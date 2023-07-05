<template>
  <AuthSliderComponent>
    <div class="h-full w-full flex flex-col py-[40px] px-[15px] sm:px-[48px]">
      <div class="w-full">
        <router-link
          v-if="step === 1"
          :to="{ name: $Routes.LOGIN }"
          class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.475 7.0667 8.83334L12.5 3.4"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>

        <div v-if="step === 2" @click="step = 1" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.475 7.0667 8.83334L12.5 3.4"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div v-if="step === 3" @click="step = 2" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.475 7.0667 8.83334L12.5 3.4"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div v-if="step === 4" @click="step = 3" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.475 7.0667 8.83334L12.5 3.4"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div v-if="step === 5" @click="step = 4" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.475 7.0667 8.83334L12.5 3.4"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div v-if="step === 6" @click="step = 5" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.475 7.0667 8.83334L12.5 3.4"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <SignUp01StepComponent @signupWithEmail="signUpWithEmail" v-if="step === 1" />
      <SignUpWithoutDataComponent v-if="step === 2" @emailVerification="emailVerification" />
      <VerifyEmailComponent v-if="step === 3" />
      <SignupPhoneComponent v-if="step === 4" />
      <VerificationcodeComponent v-if="step === 5" />
      <SuccessfulsendingComponent v-if="step === 6" />
    </div>
  </AuthSliderComponent>
</template>

<script lang="ts">
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import AuthSliderComponent from '@/components/slider/AuthSliderComponent.vue'

import SignUp01StepComponent from '@/components/auth/signup_01stepComponent.vue'
import SignUpWithoutDataComponent from '@/components/auth/signup_withoutDataComponent.vue'
import VerifyEmailComponent from '@/components/auth/verifyEmailComponent.vue'
import SignupPhoneComponent from '@/components/auth/signup_phoneComponent.vue'
import VerificationcodeComponent from '@/components/auth/verificationcodeComponent.vue'
import SuccessfulsendingComponent from '@/components/auth/successful_sendingComponent.vue'

/* vue use head */
import { useHead } from '@vueuse/head'

export default {
  name: 'Register',
  data() {
    return {
      step: 6
    }
  },
  components: {
    AuthSliderComponent,
    /* Sign Up Steps */
    SignUp01StepComponent,
    SignUpWithoutDataComponent,
    VerifyEmailComponent,
    SignupPhoneComponent,
    VerificationcodeComponent,
    SuccessfulsendingComponent,

    Swiper,
    SwiperSlide
  },
  methods: {
    signUpWithEmail() {
      this.step = 2
    },
    emailVerification() {
      this.step = 3
    }
  },
  setup() {
    useHead({
      title: 'Galerie Harfa Mall - Registration',
      meta: [
        {
          name: 'description',
          content:
            'Register for an account on the Galerie Harfa Mall platform to unlock personalized features, access rewards, manage receipts, and enjoy exclusive offers.'
        },
        {
          property: 'og:title',
          content: 'Galerie Harfa Mall - Registration'
        },
        {
          property: 'og:description',
          content:
            'Register for an account on the Galerie Harfa Mall platform to unlock personalized features, access rewards, manage receipts, and enjoy exclusive offers.'
        },
        {
          property: 'og:image',
          content: 'image.jpg'
        }
      ]
    })
    const onSwiper = swiper => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation]
    }
  }
}
</script>
