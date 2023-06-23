<template>
  <vue-multiselect v-model="selectedCountries" :options="countries" :multiple="true" :searchable="true"
    placeholder="Type to search" :option-height="60">
    <template #option="{ option }">
      <div class="country-option">
        <img :src="option.image" class="country-flag" :alt="option.country" />
        <div class="country-details">
          <p class="country-name">{{ option.country }}</p>
          <p class="country-code">{{ option.code }}</p>
        </div>
      </div>
    </template>

    <template #selected-option="{ option }">
      <div class="selected-country">
        <img :src="option.image" class="country-flag" :alt="option.country" />
        <div class="country-details">
          <!-- <p class="country-name">{{ option.country }}</p> -->
          <!-- <p class="country-code">{{ option.code }}</p> -->
        </div>
      </div>
    </template>
    <template #noResult>
      Oops! No elements found. Consider changing the search query.
    </template>
  </vue-multiselect>
  {{ selectedCountries }}
  <!-- <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('create_an_account') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">{{ $t('enter_your_mobile_phone_number') }}</p>
      </div>
    </div>

    <form class="flex flex-col gap-[8px] w-full max-w-[360px]" action="#" method="POST">
      <div class="items-center gap-[0px] grid grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="ph:phone-light" class="text-lg text-black" />
        </div>
        <div class="flex items-center">

          <div class="flex flex-col gap-[2px]">
            <input
              type="text"
              id="name"
              :placeholder="$t('phone_number')"
              class="text-black py-[4px] py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
            />
          </div>
        </div>
        <div>
          <Icon icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div class="flex flex-col gap-[12px]">
        <button type="submit" class="bg-gray py-[16px] rounded-[16px] text-grayDark3 text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
          {{ $t('continue') }}
        </button>
      </div>
    </form>

    <p class="text-center text-grayDark text-xs mt-[60px] font-normal leading-[20px] tracking-[0.2px]">
      {{ $t('already_a_member?') }}
      <router-link to="/login" class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end">{{
        $t('login')
      }}</router-link>
    </p>
  </div> -->
</template>

<script>
import { ref } from 'vue';
import VueMultiselect from 'vue-multiselect'

export default {
  name: 'YourComponent',
  components: {
    VueMultiselect
  },
  data() {
    return {
      selectedCountries: null,
      selected: 0,
      countries:[
        {
          country: "Spain",
          code: "+591",
          image: "https://flagsworld.org/img/cflags/spain-flag.png",
        },
        {
          country: "France",
          code: "+291",
          image: "https://flagsworld.org/img/cflags/France-flag.png",
        },
      ]
    }
  },
  watch: {
    selectedCountries(newSelectedCountries) {
      // Do something when the value of selectedCountries changes
      let selected = `<div class="flex items-center gap-[8px]">
          <img src="${newSelectedCountries[0].image}"/>
        </div>`
      document.querySelector('.multiselect__tags-wrap').innerHTML = selected
    },
  },
};

</script>