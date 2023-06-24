<template>
    <div class="w-full min-h-screen bg-gray">
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[20px] h-full">
          <div class="hidden lg:flex items-center justify-center auth-slider">
            <SliderComponentVue :pagination="true" :controllers="false" space-between="24" slides-per-view="1">
              <swiper-slide>
                <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                  <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                    <img class="w-full object-cover" src="@/assets/imgs/slider-auth-item.svg" alt="" />
                  </div>
                  <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                    <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">Galerie Harfa Mall mobile app</h6>
                    <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                      Your favorite Mall now on your phone. Scan receipts and collect points
                    </p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="flex flex-col mx-auto items-center justify-center gap-[84px] max-w-[460px]">
                  <div class="relative w-full w-full items-center justify-center rounded-[16px] flex flex-col">
                    <img class="w-full object-cover" src="@/assets/imgs/slider-auth-item.svg" alt="" />
                  </div>
                  <div class="flex flex-col items-center gap-[12px] justify-center max-w-[343px]">
                    <h6 class="text-black text-center font-xl leading-[28px] tracking-[-0.4px] font-bold">Galerie Harfa Mall mobile app</h6>
                    <p class="text-grayDark text-center font-normal text-sm leading-[28px] tracking-[0.1px]">
                      Your favorite Mall now on your phone. Scan receipts and collect points
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </SliderComponentVue>
          </div>
          <div class="flex items-center justify-center bg-white min-h-screen">
            <div class="h-full w-full flex flex-col py-[40px] px-[48px]">
              <div class="w-full">
                <router-link v-if="step===1" :to="{name: $Routes.LOGIN}"  class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
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

                <div v-if="step===2" @click="step = 1" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
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

                <div v-if="step===3" @click="step = 2" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
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

                <div v-if="step===4" @click="step = 3" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
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
  
              <SignUp01StepComponent @signupWithEmail="signUpWithEmail" v-if="step === 1"/>
              <SignUpWithoutDataComponent v-if="step === 2"/>
              <VerifyEmailComponent v-if="step===3"/>
              <SignupPhoneComponent v-if="step===4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Pagination } from 'swiper'
  import { Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  
  import SliderComponentVue from '@/components/slider/SliderComponent.vue'
  
  import SignUp01StepComponent from '@/components/auth/signup_01stepComponent.vue'
  import SignUpWithoutDataComponent from '@/components/auth/signup_withoutDataComponent.vue'
  import VerifyEmailComponent from '@/components/auth/verifyEmailComponent.vue'
  import SignupPhoneComponent from '@/components/auth/signup_phoneComponent.vue'

  export default {
    name: 'Login',
    data() {
        return {
            step: 4,
        }
    },
    components: {
      SliderComponentVue,
      /* Sign Up Steps */
      SignUp01StepComponent,
      SignUpWithoutDataComponent,
      VerifyEmailComponent,
      SignupPhoneComponent,
  
      Swiper,
      SwiperSlide
    },
    methods: {
        signUpWithEmail() {
            this.step = 2
        }
    },
    setup() {
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
  