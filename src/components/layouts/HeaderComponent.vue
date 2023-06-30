<template>
  <header class="w-full relative">
    <div class="max-w-[1600px] mx-auto px-[25px]">
      <div class="header_top py-[16px] border-b-[1px] border-gray flex items-center justify-between">
        <div class="header_top-left flex items-center gap-[40px]">
          <a href="#" class="lg:flex brand hidden items-center">
            <img class="w-[112px]" src="@/assets/logo.svg" alt="logo" />
          </a>
          <div class="header_btns flex items-center gap-[8px]">
            <button
              class="flex lg:hidden items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all">
              <Icon icon="ion:menu-outline" class="text-xl" />
            </button>
            <button
              class="flex items-center justify-center min-w-[48px] min-h-[48px] gap-[8px] lg:px-[24px] lg:py-[12px] bg-gray rounded-full lg:rounded-[16px] opacity-80 hover:opacity-100 transition-all">
              <Icon icon="ri:search-2-line" class="text-xl text-black" />

              <p class="hidden lg:block text-sm text-black font-semibold">{{ $t('search') }}</p>
            </button>

            <button
              class="flex items-center justify-center min-w-[48px] min-h-[48px] gap-[8px] md:px-[24px] md:py-[12px] bg-gray rounded-full md:rounded-[16px] opacity-80 hover:opacity-100 transition-all">
              <Icon icon="solar:streets-map-point-bold" class="text-xl text-pink" />

              <p class="hidden md:block text-sm text-black font-semibold">{{ $t('floorplan') }}</p>
            </button>
          </div>
        </div>
        <a href="#" class="lg:hidden brand flex items-center">
          <img class="w-[112px] hidden md:block" src="@/assets/logo.svg" alt="logo" />
          <img class="w-[38px] hidden sm:block md:hidden" src="@/assets/imgs/logo-notitle.svg" alt="logo" />
        </a>
        <div v-if="!userStore.token" class="header_top-right flex items-center gap-[8px]">
          <button
            class="hidden lg:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all">
            <Icon icon="ph:chats-circle-light" class="text-xl text-black" />
          </button>
          <button
            class="hidden lg:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all">
            <Icon icon="clarity:notification-line" class="text-xl text-black" />
          </button>

          <router-link :to="{ name: $Routes.LOGIN }"
            class="px-[26px] py-[13px] min-w-[120px] flex items-center justify-center rounded-[16px] transparent border-[1px] border-graylight text-sm font-semibold transition-all">{{
              $t('login') }}
          </router-link>
          <router-link :to="{ name: $Routes.REGISTER }"
            class="px-[26px] py-[13px] min-w-[120px] hidden md:flex items-center justify-center rounded-[16px] transparent border-[1px] border-transparent text-sm font-semibold bg-orange text-white transition-all">{{
              $t('create_account') }}</router-link>
        </div>
        <div v-else class="relative header_top-right flex items-center gap-[8px]">
          <button
            class="hidden sm:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all">
            <Icon icon="iconamoon:heart-thin" class="text-xl text-black" />
          </button>

          <button
            class="hidden sm:flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all">
            <Icon icon="ph:chats-circle-light" class="text-xl text-black" />
          </button>
          <button @click="openNotifications" :titleIs="$t('notifications')"
            :class="activeNotifications ? 'bg-yellowLight' : 'bg-gray'"
            class="header_notification_button relative hidden sm:flex items-center justify-center gap-[8px] w-[48px] h-[48px] rounded-full transition-all before:content-[attr(titleIs)] before:absolute before:top-[calc(100%+14px)] before:z-50 before:bg-black before:px-[16px] before:py-[8px] before:text-white before:font-medium before:text-xs before:tracking-[-0.2px] before:rounded before:invisible after:absolute after:w-[12px] after:h-[12px] after:bg-black after:rotate-45 after:top-[calc(100%+12px)] after:invisible hover:after:visible hover:before:visible transition-all before:delay-300 after:delay-300 before:transition-all after:transition-all">
            <Icon icon="clarity:notification-line" :class="activeNotifications ? 'text-orange' : 'text-black'"
              class="text-lg" />
              <div v-if="notification" class="w-[8px] h-[8px] bg-orange rounded-full absolute top-[11px] right-[11px]"></div>
          </button>

          <button
            class="flex items-end flex overflow-hidden justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full opacity-80 hover:opacity-100 transition-all">
            <img class="w-[80%]" src="@/assets/imgs/profile.svg" alt="" />
          </button>
          <HeaderNotifications v-if="activeNotifications" :isNotification="notification" />
        </div>
      </div>
      <div class="lg:flex hidden header_bot mt-[20px] pb-[22px] items-center justify-between">
        <nav class="relative nav">
          <ul class="nav-list flex items-center gap-[40px]">
            <li class="nav-item">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="solar:bag-4-bold" class="text-xl text-pink" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('shop') }}</p>
                <Icon icon="octicon:chevron-down-24" class="text-lg text-grayDark2" />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="bxs:dish" class="text-xl text-orange" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('dine') }}</p>
                <Icon icon="octicon:chevron-down-24" class="text-lg text-grayDark2" />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="solar:ticket-bold" class="text-xl text-green" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('entertain') }}</p>
                <Icon icon="octicon:chevron-down-24" class="text-lg text-grayDark2" />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="fluent:vehicle-car-28-filled" class="text-xl text-yellow" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('services') }}</p>
                <Icon icon="octicon:chevron-down-24" class="text-lg text-grayDark2" />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="flex items-center gap-[8px]">
                <Icon icon="ion:gift" class="text-xl text-purple" />

                <p class="font-bold text-sm text-black leading-[20px]">{{ $t('rewards') }}</p>
                <Icon icon="octicon:chevron-down-24" class="text-lg text-grayDark2" />
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-[8px]">
          <a href="#">
            <Icon icon="ri:app-store-fill" class="text-xl text-blue" />
          </a>
          <a href="#">
            <Icon icon="logos:google-play-icon" class="text-lg text-blue" />
          </a>
          <p class="text-sm text-black font-bold">{{ $t('download_mobile_app') }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import HeaderNotifications from '@/components/popups/HeaderNotifications.vue'

export default {
  name: 'HeaderComponent',
  components: {
    HeaderNotifications
  },
  data() {
    return {
      activeNotifications: false,
      notification: true,
    }
  },
  computed: {
    userStore() {
      return useUserStore()
    }
  },
  mounted() {
    document.addEventListener('click', (e: Event) => {
      const target = e.target as Element;
      if (!target.closest('.header_notification_button') && !target.closest('.header_notifications_wrapper')) {
        this.activeNotifications = false;
      }
    });
  },
  methods: {
    openNotifications() {
      this.activeNotifications = !this.activeNotifications
    }
  }
}
</script>
