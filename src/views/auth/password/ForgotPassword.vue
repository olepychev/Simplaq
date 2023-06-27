<template>
  <AuthSliderComponent>
    <div class="h-full w-full flex flex-col py-[40px] px-[48px]">
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

        <div v-if="step===2"
          @click="step = 1"
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
        </div>
      </div>

      <ForgotpasswordComponent v-if="step === 1" />
      <SuccessfulsendingComponent v-if="step === 2" />
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
import ForgotpasswordComponent from '@/components/auth/password/forgotpasswordComponent.vue'
import SuccessfulsendingComponent from '@/components/auth/password/succesful_sendingComponent.vue'

export default {
  name: 'Forgot-password',
  components: {
    AuthSliderComponent,
    ForgotpasswordComponent,
    SuccessfulsendingComponent,

    Swiper,
    SwiperSlide
  },
  data() {
    return {
      step: 2
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
