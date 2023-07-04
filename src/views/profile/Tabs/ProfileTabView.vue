<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('profile') }}</h6>

    <div class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <AccordionComponent :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="solar:user-linear" :title="$t('personal_data')">
        <ProfilePersonalDataComponent v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('personal_data')}`" />
      </AccordionComponent>

      <AccordionComponent :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="solar:lock-keyhole-minimalistic-linear" :title="$t('change_password')">
        <ProfilePasswordChangeComponent
          @cancelBtn="cancelBtn"
          v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('change_password')}`"
        />
      </AccordionComponent>

      <AccordionComponent :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="clarity:notification-line" :title="$t('notifications')">
        <ProfileNotificationsToggleComponent v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('notifications')}`" />
      </AccordionComponent>

      <AccordionComponent :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="carbon:user-avatar" :title="$t('interests')">
        <ProfileInterestsComponent v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('interests')}`" />
      </AccordionComponent>

      <AccordionComponent :activeIs="activeAccordionIs" @accordionClicked="accordionClicked" icon="icons8:add-user" :title="$t('connected_accounts')">
        <ProfileConnectedAccountsComponent v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('connected_accounts')}`" />
      </AccordionComponent>

      <div
        @click="deleteAccount"
        class="w-full flex items-center justify-between rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer"
      >
        <div class="flex items-center gap-[12px]">
          <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
            <Icon icon="fluent:delete-28-regular" class="text-lg text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px] capitalize">{{ $t('delete_account') }}</p>
        </div>
      </div>
      <div
        @click="logout"
        class="w-full flex items-center justify-between rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer"
      >
        <div class="flex items-center gap-[12px]">
          <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
            <Icon icon="solar:logout-linear" class="text-lg text-black" />
          </div>
          <p class="font-bold text-sm text-black leading-[20px] capitalize">{{ $t('log_out') }}</p>
        </div>
      </div>
    </div>
  </div>

  <DeleteAccountComponent @cancelDeleteAccount="cancelDeleteAccount" v-if="activeDeleteAccount" />
  <LogoutComponet @cancelLogout="cancelLogout" v-if="activeLogout" />
</template>

<script lang="ts">
import AccordionComponent from '@/components/accordion/AccordionComponent.vue'
import ProfilePersonalDataComponent from '@/components/profile/personal_data/PersonalDataComponent.vue'
import ProfilePasswordChangeComponent from '@/components/profile/change_password/changePasswordComponent.vue'
import ProfileNotificationsToggleComponent from '@/components/profile/notifications/NotificationsComponent.vue'
import ProfileInterestsComponent from '@/components/profile/interests/InterestsComponent.vue'
import ProfileConnectedAccountsComponent from '@/components/profile/connected_accounts/connectedAccountsComponent.vue'
import DeleteAccountComponent from '@/components/profile/delete/DeleteAccountComponent.vue'
import LogoutComponet from '@/components/modals/logoutComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'
export default {
  name: 'ProfileTab',
  data() {
    return {
      activeAccordionIs: null,
      activeDeleteAccount: false,
      activeLogout: false,

      activeAccordionIs: '',
    }
  },
  components: {
    AccordionComponent,
    ProfilePersonalDataComponent,
    ProfilePasswordChangeComponent,
    ProfileNotificationsToggleComponent,
    ProfileInterestsComponent,
    ProfileConnectedAccountsComponent,
    DeleteAccountComponent,
    LogoutComponet
  },
  methods: {
    accordionClicked(activeAccordion) {
      if(this.activeAccordionIs === activeAccordion) {
        this.activeAccordionIs = ''
      }else {
        this.activeAccordionIs = activeAccordion
      }
    },
    cancelBtn() {
      this.activeAccordionIs = ''
    },
    deleteAccount() {
      this.activeDeleteAccount = true
    },
    cancelDeleteAccount() {
      this.activeDeleteAccount = false
    },
    logout() {
      this.activeLogout = true
    },
    cancelLogout() {
      this.activeLogout = false
    }
  },
  setup() {
    useHead({
      title: 'Galerie Harfa Mall - Profile settings',
      meta: [
        {
          name: 'description',
          content:
            'Manage your profile on the Galerie Harfa Mall platform. Update your personal data, change your password, manage notifications and interests, connect accounts, and perform actions like deleting your account or logging out.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall - My Profile'
        },
        {
          property: 'og:description',
          content:
            'Manage your profile on the Galerie Harfa Mall platform. Update your personal data, change your password, manage notifications and interests, connect accounts, and perform actions like deleting your account or logging out.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
  }
}
</script>
