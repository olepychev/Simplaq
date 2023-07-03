<template>
  <div class="w-full min-h-screen bg-gray">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-[20px] h-full">
        <div class="hidden lg:flex items-center justify-center auth-slider">
          <SliderComponentVue
           :pagination="true" :controllers="false" space-between="24" slides-per-view="1">
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
          <slot></slot>
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
      let authSliderBullets = document.querySelectorAll('.auth-slider .swiper-pagination-bullet')
      if (authSliderBullets) {
        authSliderBullets.forEach(bullet => {
          if (bullet.classList.contains('.swiper-pagination-bullet-active')) {
            bullet.classList.add('!bg-orange')
          }
        })
      }
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation]
    }
  },
}
</script>
