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
              <router-link to="/" class="flex w-[48px] h-[48px] rounded-full bg-gray items-center justify-center">
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
            </div>

            <div class="flex flex-col items-center gap-[24px] justify-center h-full">
              <div class="w-full flex flex-col gap-[24px] items-center justify-center">
                <div class="flex flex-col">
                  <router-link to="/" class="flex max-w-[112px] w-full">
                    <img src="@/assets/logo.svg" alt="" />
                  </router-link>
                </div>
                <div class="flex flex-col items-center gap-[4px]">
                  <h6 class="text-black font-bold text-xl">{{$t('hello_again')}} 👋</h6>
                  <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">{{$t('login_welcome_text')}}</p>
                </div>
              </div>

              <form class="flex flex-col gap-[8px] w-full max-w-[360px]" action="#" method="POST">
                <div class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] bg-gray rounded-[16px]">
                  <div>
                    <Icon icon="tabler:mail" class="text-lg text-black " />
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <label for="email" class="text-s text-grayDark leading-[16px] font-medium">{{$t('email')}}</label>
                    <input
                      type="text"
                      id="email"
                      :placeholder="$t('enter_your_email')"
                      class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                    />
                  </div>
                  <div>
                    <Icon icon="bi:check" class="text-lg text-green " />
                  </div>
                </div>

                <div class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] py-[12px] bg-gray rounded-[16px]">
                  <div>
                    <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black " />

                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <label for="password" class="text-s text-grayDark leading-[16px] font-medium">{{$t('password')}}</label>
                    <input
                      type="password"
                      id="password"
                      :placeholder="$t('enter_your_password')"
                      class="text-black py-[4px] font-medium bg-transparent outline-none text-sm leading-[20px]"
                    />
                  </div>
                  <div>
                    <Icon icon="bx:hide" class="text-lg text-black " />
                  </div>
                </div>

                <div class="flex flex-col gap-[12px]">
                  <a href="#" class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end"
                    >{{$t('forgot_password')}}</a
                  >
                  <button
                    type="submit"
                    class="bg-orange py-[16px] rounded-[16px] text-white text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
                  >
                  {{$t('sign_in')}}
                  </button>
                </div>
                <p class="text-grayDark max-w-[360px] font-normal mt-[15px] text-xs leading-[20px] tracking-[-0.2px] text-center">
                  {{$t('or_use_social_media')}}
                </p>

                <div class="flex flex-col gap-[8px]">
                  <button
                    class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
                  >
                  <Icon icon="flat-color-icons:google" class="text-xl text-black " />


                  {{$t('sign_in_with_google')}}
                  </button>

                  <button
                    class="bg-gray justify-center flex items-center gap-[8px] py-[16px] rounded-[16px] text-black text-sm font-semibold leaing-[20px] tracking-[-0.2px]"
                  >
                  <Icon icon="logos:facebook" class="text-xl text-white" />

                  {{$t('sign_in_with_facebook')}}
                  </button>
                </div>

                <p class="text-center text-grayDark text-xs font-normal leading-[20px] tracking-[0.2px]">{{$t('dont_have_registration_yet?')}}
                  <routerLink to="/register" class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end"
                    >{{$t('register_now')}}</routerLink>
                </p>
              </form>
            </div>
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

export default {
  name: 'Login',
  components: {
    SliderComponentVue,

    Swiper,
    SwiperSlide
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
