<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px]">
    <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('profile') }}</h6>

    <div class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <AccordionComponent @accordionClicked="accordionClicked" icon="solar:user-linear" :title="$t('personal_data')">
        <ProfilePersonalDataComponent v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('personal_data')}`" />
      </AccordionComponent>

      <AccordionComponent @accordionClicked="accordionClicked" icon="solar:lock-keyhole-minimalistic-linear" :title="$t('change_password')">
        <ProfilePasswordChangeComponent @cancelChangePassword="cancelChangePassword"  v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('change_password')}`" />
      </AccordionComponent>

      <AccordionComponent @accordionClicked="accordionClicked" icon="clarity:notification-line" :title="$t('notifications')">
        <ProfileNotificationsToggleComponent v-if="activeAccordionIs && activeAccordionIs === `accordion${$t('notifications')}`"/>
      </AccordionComponent>

      <AccordionComponent @accordionClicked="accordionClicked" icon="carbon:user-avatar" :title="$t('interests')"> </AccordionComponent>

      <AccordionComponent @accordionClicked="accordionClicked" icon="icons8:add-user" :title="$t('connected_accounts')">
      </AccordionComponent>

      <div
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
</template>

<script lang="ts">
import AccordionComponent from '@/components/accordion/AccordionComponent.vue'
import ProfilePersonalDataComponent from '@/components/profile/personal_data/PersonalDataComponent.vue'
import ProfilePasswordChangeComponent from '@/components/profile/change_password/changePasswordComponent.vue'
import ProfileNotificationsToggleComponent from '@/components/profile/notifications/NotificationsComponent.vue'
export default {
  name: 'ProfileTab',
  data() {
    return {
      activeAccordionIs: null
    }
  },
  components: {
    AccordionComponent,
    ProfilePersonalDataComponent,
    ProfilePasswordChangeComponent,
    ProfileNotificationsToggleComponent,
  },
  methods: {
    accordionClicked(activeAccordion) {
      if (activeAccordion) {
        this.activeAccordionIs = activeAccordion.getAttribute('id')
      } else {
        this.activeAccordionIs = null
      }
    },
    cancelChangePassword() {
      document.getElementById(`${this.activeAccordionIs}`).classList.remove('active')
      this.activeAccordionIs = null
    }
  }
}
</script>
