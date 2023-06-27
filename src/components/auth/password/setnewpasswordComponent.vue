<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col">
        <div class="flex w-[72px] h-[72px] rounded-full items-center justify-center bg-gray">
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
      </div>
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('forgot_password') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">
          {{ $t('enter_email_adress_that_you_used_when_registering') }}
        </p>
      </div>
    </div>

    <form class="flex flex-col gap-[8px] w-full max-w-[360px]" action="#" method="POST">
      <div
        :class="!isEmailTouched ? 'border-transparent' : isEmailTouched && validateEmail ? 'border-green' : 'border-orange'"
        class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] border-[1px] px-[20px] bg-gray rounded-[16px]"
      >
        <div>
          <Icon icon="tabler:mail" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            @input="emailTouched"
            type="text"
            id="email"
            :placeholder="$t('email')"
            v-model="userData.email"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon v-if="validateEmail" icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div class="flex flex-col gap-[12px]">
        <button
          @click="handleSubmit"
          type="submit"
          class="bg-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
        >
          {{ $t('send_mail') }}
        </button>
      </div>

      <p class="text-center text-grayDark text-xs font-normal mt-[60px] leading-[20px] tracking-[0.2px]">
        {{ $t('need_help?') }}
        <router-link
          to="/suppoort"
          class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end"
          >{{ $t('contact_support') }}</router-link
        >
      </p>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'signup-01step',
  data() {
    return {
      userData: {
        email: ''
      },
      isEmailTouched: false
    }
  },

  computed: {
    validateEmail(): boolean {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(this.userData.email)
    },
    readyForSubmit() {
      return this.validateName && this.validateSurname && this.validateEmail && !this.nonvalidatePassword
    }
  },
  methods: {
    emailTouched() {
      this.isEmailTouched = true
    },

    handleSubmit(e) {
      e.preventDefault()
      this.isEmailTouched = true

      if (this.validateEmail) {
        console.log('submit')
      }
    }
  }
}
</script>
