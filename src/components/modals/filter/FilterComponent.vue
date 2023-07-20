<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-[664px] px-[40px] pt-[56px] pb-[40px] bg-white rounded-[24px]">
        <div class="w-full h-full">
          <div class="flex items-center justify-between pb-[16px] border-b border-gray">
            <div class="flex flex-col gap-[4px]">
              <p class="text-lg font-bold text-black leading-[26px] tracking-[-0.4px]">{{ $t('filter') }}</p>
              <p class="text-sm font-normal text-grayDark leading-[24px] tracking-[0.1px]">
                {{ $t('here_you_can_configure_the_filters') }}
              </p>
            </div>

            <div @click="closeFilterComponent"
              class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.5509 4.49042C16.8434 4.19708 16.8434 3.72148 16.5509 3.42814C16.2585 3.13479 15.7844 3.13479 15.4919 3.42814L10.0067 8.93021L4.49038 3.4294C4.19708 3.13692 3.72154 3.13692 3.42823 3.4294C3.13493 3.72188 3.13493 4.19608 3.42823 4.48857L8.94766 9.99249L3.44674 15.5103C3.1543 15.8036 3.1543 16.2792 3.44674 16.5726C3.73918 16.8659 4.21333 16.8659 4.50577 16.5726L10.0098 11.0516L15.5094 16.5358C15.8027 16.8283 16.2783 16.8283 16.5716 16.5358C16.8649 16.2434 16.8649 15.7691 16.5716 15.4767L11.0688 9.98937L16.5509 4.49042Z"
                  fill="#17181B" />
              </svg>
            </div>
          </div>

          <div class="w-full flex flex-col gap-[40px] mt-[16px]">
            <p class="text-black font-bold text-base leading-[24px] capitalize">{{ $t('price_range') }}</p>
            <div class="relative slider-container mb-[16px]">
              <img src="@/assets/imgs/vector.svg" class="absolute left-0 bottom-full w-full z-1" />
              <Slider v-model="range" :min="0" :max="1750" :tooltips="false" @slide="handleSliderSlide" />
              <div class="flex items-center mt-[16px] w-full justify-between">
                <div class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px] handle-label">0</div>
                <div
                  class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px] handle-label absolute left-[26.8%]">
                  500</div>
                <div
                  class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px] handle-label absolute left-[66.5%]">
                  1200</div>
                <div class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px] handle-label">1750</div>
              </div>
            </div>
          </div>

          <div
            class="relative bg-gray items-center multiselect-focus-orange border-[1px] border-transparent gap-[0px] grid grid-cols-[20px,auto] px-[20px] gap-[12px] rounded-[16px]">
            <div class="w-[20px]">
              <img class="w-full" src="@/assets/imgs/logo-notitle.svg" />
            </div>
            <div class="flex items-center gap-[12px] py-[17px]" id="placeSelect">
              <div class="flex flex-col gap-[2px] w-full">
                <label for="place" class="text-s text-grayDark leading-[16px] font-medium">{{ $t('select_place')
                }}</label>
                <vue-multiselect v-model="selectedPlace" :options="places" :searchable="searchable"
                  :placeholder="$t('search_place')" :option-height="60" ref="placeSelect" track-by="title"
                  :custom-label="customLabel">
                  <template #option="{ option }">
                    <div class="country-option w-full flex items-center gap-[12px]">
                      <div
                        class="country-details flex w-full items-center justify-between px-[20px] border-b-[1px] py-[16px] border-gray">
                        <div class="flex items-start gap-[12px]">
                          <div
                            class="w-[56px] border border-graylight h-[56px] bg-gray rounded-full flex items-center justify-center">
                            <img class="w-full max-w-[47px]" :src="option.image" />
                          </div>
                          <div class="flex flex-col gap-[10px]">
                            <div class="flex flex-col gap-[4px]">
                              <p class="country-name text-sm text-black font-bold leading-[20px] tracking-[-0.2px]">{{
                                option.title }}</p>
                              <p class="text-xs text-grayDark font-medium leading-[20px] tracking-[-0.2px]">{{ option.type
                              }}</p>
                            </div>
                            <div class="flex items-center gap-[4px]">
                              <Icon icon="solar:routing-3-bold" class="text-lg text-black" />

                              <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-black">{{ option.floor
                              }}</p>
                            </div>
                          </div>
                        </div>
                        <Icon icon="bi:check" class="check text-lg text-orange hidden" />
                      </div>
                    </div>
                  </template>

                  <template #noResult>
                    <div class="w-full flex flex-col items-center justify-center">
                      <img src="@/assets/imgs/noresult.svg" class="max-w-[136px] mt-[40px] mb-[24px]" alt="" />
                      <h6 class="text-lg text-black font-bold leading-[26px] tracking-[-0.4px]">{{ $t('search') }}</h6>
                      <p class="text-center mt-[12px] text-grayDark text-sm leading-[24px] tracking-[0.1px]">
                        {{ $t('unfortunately_nothing_was_found_Try_changing_your_request') }}
                      </p>
                    </div>
                  </template>
                </vue-multiselect>
              </div>
              <Icon icon="octicon:chevron-down-24" class="select-icon text-lg text-black" />
            </div>
          </div>

          <div class="flex gap-[8px] mt-[84px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button @click="resetValue"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t('reset') }}
            </button>
            <button @click="filterOptions"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all">
              {{ $t('apply') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Slider from '@vueform/slider'
import VueMultiselect from 'vue-multiselect'

import '@vueform/slider/themes/default.css'

interface Places {
  title: string,
  image: string,
  type: string,
  floor: string,
}
export default {
  name: 'Filter',
  emits: ['closeFilterComponent', 'filterOptions'],
  components: {
    Slider,
    VueMultiselect
  },
  data() {
    return {
      searchable: true as boolean,
      range: [0, 1750] as [number, number],
      places: [
        {
          title: 'Zara',
          image: 'http://localhost:5174/src/assets/imgs/hm.svg',
          type: 'Clothes',
          floor: '2nd floor'
        },
        {
          title: 'Adidas',
          image: 'http://localhost:5174/src/assets/imgs/adidas.svg',
          type: 'Clothes',
          floor: '2nd floor'
        },
        {
          title: 'Nike',
          image: 'http://localhost:5174/src/assets/imgs/nike.svg',
          type: 'Clothes',
          floor: '2nd floor'
        },
        {
          title: 'Nike',
          image: 'http://localhost:5174/src/assets/imgs/ikea.svg',
          type: 'Clothes',
          floor: '2nd floor'
        }
      ] as Places[],
      selectedPlace: null
    }
  },

  mounted() {
    this.selectedPlace = null
  },

  updated() {
    this.updateSelectedPlace(this.selectedPlace)
  },

  computed: {
    label1Value() {
      return this.range[1]
    },
    label2Value() {
      return this.range[2]
    }
  },
  methods: {
    filterOptions() {
      const filterOpt = {
        place: this.selectedPlace ? this.selectedPlace.title : false,
        rangeMin: this.range[0],
        rangeMax: this.range[1]
      }
      this.$emit('filterOptions', filterOpt)
    },
    changeSearchInputPlace() {
      let searchInput = document.querySelector('#placeSelect .multiselect__input')
      let searchInputParent = document.querySelector('#placeSelect .multiselect__content-wrapper')
      searchInputParent.prepend(searchInput)
    },
    updateSelectedPlace(newSelectedPlace) {
      this.$nextTick(() => {
        if (newSelectedPlace) {
          let selected = `<div class="flex items-center gap-[8px]">
          <p class="text-sm leading-[20px] tracking-[-0.2px] text-black">${newSelectedPlace.title}</p>
      </div>`
          let selectedEl = document.createElement('div')
          selectedEl.classList.add('country-selected')
          selectedEl.innerHTML = selected

          if (document.querySelector('.multiselect__tags .country-selected')) {
            document
              .querySelector('#placeSelect .multiselect__tags')
              .removeChild(document.querySelector('.multiselect__tags .country-selected'))
          }
          document.querySelector('#placeSelect .multiselect__tags').appendChild(selectedEl)
        } else {
          if (document.querySelector('.multiselect__tags .country-selected')) {
            document
              .querySelector('#placeSelect .multiselect__tags')
              .removeChild(document.querySelector('.multiselect__tags .country-selected'))
          }
        }
      })
    },

    customLabel({ title }) {
      return `${title}`
    },

    closeFilterComponent() {
      this.$emit('closeFilterComponent', '')
    },
    handleSliderSlide() {
      const [min, max] = this.range

      // Check if the second handle is near the label value
      if (Math.abs(max - this.range[1]) <= 5) {
        this.range[1] = this.range[1]
      }

      // Check if the first handle is near the label value
      if (Math.abs(min - this.range[0]) <= 5) {
        this.range[0] = this.range[0]
      }
    },
    resetValue() {
      this.range = [0, 1750]
    }
  },
  watch: {
    selectedPlace(newSelectedPlace) {
      this.updateSelectedPlace(newSelectedPlace)
    }
  }
}
</script>

<style>
#placeSelect input,
#placeSelect .multiselect__placeholder,
#placeSelect input::placeholder,
.multiselect__placeholder {
  color: theme('colors.black');
  font-size: theme('fontSize.sm');
}

.slider-target {
  height: 3px;
}

.slider-connect {
  background: theme('colors.black');
}

.slider-handle {
  width: 22px !important;
  height: 22px !important;
  border: 7px solid theme('colors.black');
  transform: translateY(-4px) !important;
  box-shadow: none;
}
</style>
