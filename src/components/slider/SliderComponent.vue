<template>
  <div class="main-slider-parent w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <div :class="!controllers ? 'hidden' : ''" class="w-full flex items-center justify-between mb-[24px]">
        <h5 class="text-black xl:text-xl 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4[x]]">{{ sectionTitle }}</h5>
        <div class="flex items-center gap-[16px]">
          <a href="#" class="text-pink font-semibold xl:text-sm 2xl:text-base leading-[22px] tracking-[-0.4px]">{{ $t('see_all') }}</a>
          <div class="slider-btns-responsive flex slider-nav items-center gap-[4px]">
            <div @click="prev" class="prev w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.4995 16.6L7.06621 11.1667C6.42454 10.525 6.42454 9.47503 7.06621 8.83336L12.4995 3.40002"
                  stroke="#17181B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div @click="next" class="next w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47503 12.8581 8.83336L7.4248 3.40002"
                  stroke="#17181B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Swiper -->
      <swiper
        class="h-full w-full"
        :modules="modules"
        :slides-per-view="slidesPerViewIs"
        :space-between="spaceBetween"
        :pagination="{ clickable: true }"
        navigation
        :scrollbar="{ draggable: true }"
      >
        <slot></slot>
      </swiper>
      <div class="slider-btns-responsive-sm hidden justify-center flex slider-nav items-center gap-[4px]">
        <div @click="prev" class="prev w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.4995 16.6L7.06621 11.1667C6.42454 10.525 6.42454 9.47503 7.06621 8.83336L12.4995 3.40002"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div @click="next" class="next w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47503 12.8581 8.83336L7.4248 3.40002"
              stroke="#17181B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
  data() {
    return {
      slidesPerViewIs: this.slidesPerView,
      breakpointIs: this.breakpoint
    }
  },
  props: {
    controllers: {},
    sectionTitle: {
      required: true
    },
    slidesPerView: {
      required: true
    },
    spaceBetween: {
      required: true
    },
    breakpoint: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    prev(e) {
      const prevBtn = e.target.closest('.main-slider-parent').querySelector('.swiper-button-prev')
      prevBtn.click()
    },
    next(e) {
      const nextBtn = e.target.closest('.main-slider-parent').querySelector('.swiper-button-next')
      nextBtn.click()
    }
  },
  mounted() {
    let width = document.body.getBoundingClientRect().width

    if (typeof this.breakpoint !== 'undefined') {
      this.breakpoint.forEach(item => {
        if (width <= item.size) {
          this.slidesPerViewIs = item.view
        }
      })
    }

    window.addEventListener('resize', () => {
      width = document.body.getBoundingClientRect().width
      if (typeof this.breakpoint !== 'undefined') {
        this.breakpoint.forEach((item, i) => {
          if (width <= item.size) {
            this.slidesPerViewIs = item.view
          } else {
            if (width > this.breakpoint[0].size) {
              this.slidesPerViewIs = this.slidesPerView
            }
          }
        })
      }
    })
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  }
}
</script>
