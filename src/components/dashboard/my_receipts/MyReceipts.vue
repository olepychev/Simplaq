<template>
  <div class="w-full flex flex-col gap-[20px] py-[16px] min-h-[calc(100vh-195px)]">
    <div class="w-full flex items-center justify-between">
      <h6 class="text-black font-bold text-xl leading-[28px] tracking-[-0.4px]">{{ $t('my_receipts') }}</h6>

      <div class="flex items-center justify-end flex-1 gap-[4px]">
        <div
          @click="openSearch"
          :class="
            searchable
              ? 'w-full max-w-[500px] grid grid-cols-[40px,auto,20px] items-center px-[16px]'
              : 'max-w-[48px] w-[48px] items-center justify-center'
          "
          class="h-[48px] bg-white rounded-full flex transition-all"
          id="searchToggle"
        >
          <Icon icon="ri:search-2-line" class="text-xl h-full cursor-pointer text-black" />
          <input
            v-if="searchable"
            v-model="searchVal"
            @input="searchPoints"
            id="search"
            ref="searchInput"
            type="text"
            class="w-full h-full outline-none text-xs text-black font-medium leading-[20px] tracking-[-0.2px] placeholder:text-grayDark"
          />
          <Icon
            @click="clearSearchInput"
            v-if="searchable && searchVal.length !== 0"
            icon="zondicons:close-solid"
            class="text-sm h-full cursor-pointer text-black"
          />
        </div>
        <div
          @click="openFilterComponent"
          class="cursor-pointer min-w-[48px] w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center"
        >
          <Icon icon="mingcute:filter-line" class="text-xl text-black" />
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col gap-[8px] bg-white p-[24px] border-[1px] border-graylight rounded-[24px]">
      <div class="w-full flex items-center mb-[16px]">
        <ul class="flex items-center gap-[4px]">
          <li
            @click="filterReceiptsPoints"
            receipt-filter="all"
            :class="receiptFilter === 'all' ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('all') }}
          </li>
          <li
            @click="filterReceiptsPoints"
            :receipt-filter="ReceiptFilters_ENUM.APPROVED"
            :class="receiptFilter === ReceiptFilters_ENUM.APPROVED ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('approved') }}
          </li>
          <li
            @click="filterReceiptsPoints"
            :receipt-filter="ReceiptFilters_ENUM.REJECTED"
            :class="receiptFilter === ReceiptFilters_ENUM.REJECTED ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('rejected') }}
          </li>
          <li
            @click="filterReceiptsPoints"
            :receipt-filter="ReceiptFilters_ENUM.PENDING_APPROVAL"
            :class="receiptFilter === ReceiptFilters_ENUM.PENDING_APPROVAL ? 'bg-orange text-white' : 'bg-gray text-black'"
            class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
          >
            {{ $t('pending_approval') }}
          </li>
        </ul>
      </div>
      <div class="relative w-full flex flex-col gap-[8px] max-h-[600px] overflow-auto custom-scrollbar" id="receiptsMain">
        <div
          v-if="DynamicReceiptArr.length !== 0"
          v-for="(item, index) in DynamicReceiptArr"
          :key="index"
          class="rounded-[24px] border border-gray"
        >
          <div @click="openDropdown(item.id)" class="cursor-pointer w-full grid grid-cols-5 items-center py-[12px] px-[20px]">
            <div class="flex items-center gap-[16px]" v-if="item.logo">
              <div class="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" :src="item.logo.image" alt="" />
              </div>
              <div class="flex items-center gap-[12px]">
                <Icon icon="ph:receipt-thin" class="text-lg text-black group-hover:text-orange transition-all" />
                <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">{{ item.logo.title }}</p>
              </div>
            </div>

            <div class="flex flex-col gap-[2px]">
              <p class="text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]">{{ $t('date') }}</p>
              <p class="text-black font-bold text-sm text-black leading-[20px]">{{ item.date }}</p>
            </div>

            <div class="flex flex-col gap-[2px]">
              <p class="text-xs font-medium text-grayDark leading-[20px] tracking-[-0.2px]" v-if="item.points">{{ $t('points') }}</p>
              <p class="text-black font-bold text-sm text-black leading-[20px]">{{ item.points ? item.points : '' }}</p>
            </div>

            <div class="flex justify-end">
              <p class="font-bold text-xl text-orange leading-[28px] tracking-[-0.4px]">{{ item.price }}</p>
            </div>
            <div class="flex justify-end gap-[10px] items-center">
              <div
                :class="
                  item.type === ReceiptFilters_ENUM.APPROVED
                    ? 'bg-greenLight text-green'
                    : item.type === ReceiptFilters_ENUM.REJECTED
                    ? 'bg-redLight text-red'
                    : item.type === ReceiptFilters_ENUM.PENDING_APPROVAL
                    ? 'bg-yellowLight text-orange'
                    : ''
                "
                class="flex px-[16px] py-[6px] cursor-pointer rounded-[8px] bg-gray"
              >
                <p class="font-semibold text-xs leading-[20px] tracking-[-0.2px]">{{ $t(`${item.type}`) }}</p>
              </div>
              <Icon
                icon="octicon:chevron-down-24"
                :class="dropdown === item.id ? 'rotate-180' : ''"
                class="text-2xl text-grayDark4 accordion-icon transition-all"
              />
            </div>
          </div>
          <div
            v-if="item.dropdownOptions && dropdown === item.id"
            class="w-full grid grid-cols-[50%,auto] gap-[40px] py-[16px] border-t border-gray mt-[14px] px-[20px]"
          >
            <div class="flex flex-col">
              <h6 class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('items_to_be_accounted_for') }}</h6>
              <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                <div class="flex items-start flex-col gap-[4px]">
                  <p class="text-sm font-bold text-black leading-[20px]">{{ item.dropdownOptions.title01 }}</p>
                  <p class="text-xs text-grayDark4 leading-[20px] tracking-[-0.2px]">1 pcs'1</p>
                </div>
                <p class="text-lg font-bold text-black leading-[20px]">{{ item.dropdownOptions.price01 }}</p>
              </div>
              <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                <div class="flex items-start flex-col gap-[4px]">
                  <p class="text-sm font-bold text-black leading-[20px]">{{ item.dropdownOptions.title02 }}</p>
                  <p class="text-xs text-grayDark4 leading-[20px] tracking-[-0.2px]">1 pcs'1</p>
                </div>
                <p class="text-lg font-bold text-black leading-[20px]">{{ item.dropdownOptions.price02 }}</p>
              </div>
              <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                <div class="flex items-start flex-col gap-[4px]">
                  <p class="text-sm font-bold text-black leading-[20px]">{{ item.dropdownOptions.title03 }}</p>
                  <p class="text-xs text-grayDark4 leading-[20px] tracking-[-0.2px]">1 pcs'1</p>
                </div>
                <p class="text-lg font-bold text-black leading-[20px]">{{ item.dropdownOptions.price03 }}</p>
              </div>
              <div class="w-full flex items-center justify-between py-[16px] border-b border-b-gray">
                <p class="text-sm font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]"></p>
                <p class="text-xl font-bold text-orange leading-[20px]">{{ item.dropdownOptions.total }}</p>
              </div>
            </div>
            <div class="flex flex-col">
              <h6 class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('photo') }}</h6>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center py-[100px]">
          <div
            class="flex relative w-full max-w-max mb-[24px] rounded-[16px] bg-gray rounded-full w-[136px] overflow-hidden flex items-start justify-center gap-[10px]"
          >
            <img class="w-full max-w-[136px]" src="@/assets/imgs/points.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center gap-[8px]">
            <p class="text-base2 text-black leading-[26px] tracking-[-0.1px] font-bold">{{ $t('search') }}</p>
            <p class="text-grayDark text-sm font-regular leading-[24px] text-center tracking-[-0.1px]">
              {{ $t('change_your_request') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FilterComponent v-if="activefilter" @closeFilterComponent="closeFilterComponent" @filterOptions="filterOptions" />
</template>

<script lang="ts">
import FilterComponent from '@/components/modals/filter/FilterComponent.vue'
import { ReceiptFilters_ENUM } from '@/enums/dashboard/my_receipts/receiptFilters'
interface Receipt {
  id: number,
  logo: {
    image: string
    title: string
  }
  date: string
  points: string | null
  price: string
  type: ReceiptFilters_ENUM.APPROVED | ReceiptFilters_ENUM.REJECTED | ReceiptFilters_ENUM.PENDING_APPROVAL
  dropdownOptions: {
    title01: string
    price01: string
    title02: string
    price02: string
    title03: string
    price03: string
    total: string
  }
}
export default {
  name: 'EarnedPoints',
  components: {
    FilterComponent
  },
  data() {
    return {
      dropdown: null as number | null,
      ReceiptFilters_ENUM: ReceiptFilters_ENUM,
      activefilter: false as boolean,
      receiptFilter: 'all' as string,
      searchable: false as boolean,
      searchVal: '' as string,
      StaticReceiptArr: [
        {
          id:0,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/hm.svg`,
            title: 'H&M'
          },
          date: '12.07.2022',
          points: '230',
          price: '$230.00',
          type: 'approved',
          dropdownOptions: {
            title01: 'H&M BADIS SHIRT',
            price01: '$49.00',
            title02: 'H&M Tshirt',
            price02: '$32.00',
            title03: 'H&M  BADIS shoes',
            price03: '$149.00',
            total: '$230.00'
          }
        },
        {
          id: 1,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/adidas.svg`,
            title: 'Adidas'
          },
          date: '12.07.2022',
          points: null,
          price: '$99.00',
          type: 'rejected',
          dropdownOptions: {
            title01: 'H&M BADIS SHIRT',
            price01: '$149.00',
            title02: 'H&M Tshirt',
            price02: '$232.00',
            title03: 'H&M  BADIS shoes',
            price03: '$1449.00',
            total: '$2230.00'
          }
        },
        {
          id:2,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/nike.svg`,
            title: 'Nike'
          },
          date: '12.07.2022',
          points: null,
          price: '$23.00',
          type: 'pending_approval',
          dropdownOptions: {
            title01: 'H&M BADIS SHIRT',
            price01: '$49.00',
            title02: 'H&M Tshirt',
            price02: '$32.00',
            title03: 'H&M  BADIS shoes',
            price03: '$149.00',
            total: '$230.00'
          }
        },
        {
          id: 4,
          logo: {
            image: `${window.location.origin}/src/assets/imgs/ikea.svg`,
            title: 'Ikea'
          },
          date: '12.07.2022',
          points: null,
          price: '$230.00',
          type: 'approved',
          dropdownOptions: {
            title01: 'H&M BADIS SHIRT',
            price01: '$49.00',
            title02: 'H&M Tshirt',
            price02: '$32.00',
            title03: 'H&M  BADIS shoes',
            price03: '$149.00',
            total: '$230.00'
          }
        }
      ] as Receipt[],
      DynamicReceiptArr2: [] as Receipt[],
      DynamicReceiptArr: [] as Receipt[]
    }
  },
  mounted() {
    this.DynamicReceiptArr = this.StaticReceiptArr
    this.DynamicReceiptArr2 = this.StaticReceiptArr
    document.addEventListener('click', e => {
      const target = e.target as Element
      if (!target.closest('#searchToggle')) {
        this.searchable = false
      }

      if (!target.closest('#receiptsMain')) {
        this.dropdown = null
      }
    })
  },
  methods: {
    openDropdown(itemId: number) {
      if (this.dropdown !== null && this.dropdown === itemId) {
        this.dropdown = null
      } else {
        this.dropdown = itemId
      }
    },
    filterOptions(filterOpt: { rangeMin: number; rangeMax: number; place: string }) {
      this.DynamicReceiptArr = this.DynamicReceiptArr2.filter((item: { price: string; logo: { title: string } }) => {
        const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
        const itemsInFilter = numericPrice >= filterOpt.rangeMin && numericPrice <= filterOpt.rangeMax
        if (filterOpt.place) {
          const placeInFilter = item.logo.title.toLowerCase().includes(filterOpt.place.toLowerCase())

          if (itemsInFilter && placeInFilter) {
            return item
          }
        } else {
          if (itemsInFilter) {
            return item
          }
        }
      })
      this.activefilter = false
    },
    closeFilterComponent() {
      this.activefilter = false
    },
    openFilterComponent() {
      this.activefilter = true
    },
    searchPoints() {
      const searchVal = this.searchVal.toLowerCase()

      this.DynamicReceiptArr = this.DynamicReceiptArr2.filter((item: { logo: { title: string } }) => {
        const amountMatch = item.logo.title.toLowerCase().includes(searchVal)
        const hasMatch = amountMatch
        const isEmptySearch = searchVal === ''
        return isEmptySearch || hasMatch
      })
    },
    filterReceiptsPoints(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('receipt-filter')
      this.receiptFilter = targetFilter

      if (this.receiptFilter === ReceiptFilters_ENUM.APPROVED) {
        this.DynamicReceiptArr = this.StaticReceiptArr.filter((item: { type: string }) => {
          if (item.type === ReceiptFilters_ENUM.APPROVED) {
            return item
          }
        })
        this.DynamicReceiptArr2 = this.StaticReceiptArr.filter((item: { type: string }) => {
          if (item.type === ReceiptFilters_ENUM.APPROVED) {
            return item
          }
        })
      } else if (this.receiptFilter === ReceiptFilters_ENUM.REJECTED) {
        this.DynamicReceiptArr = this.StaticReceiptArr.filter((item: { type: string }) => {
          if (item.type === ReceiptFilters_ENUM.REJECTED) {
            return item
          }
        })
        this.DynamicReceiptArr2 = this.StaticReceiptArr.filter((item: { type: string }) => {
          if (item.type === ReceiptFilters_ENUM.REJECTED) {
            return item
          }
        })
      } else if (this.receiptFilter === ReceiptFilters_ENUM.PENDING_APPROVAL) {
        this.DynamicReceiptArr = this.StaticReceiptArr.filter((item: { type: string }) => {
          if (item.type === ReceiptFilters_ENUM.PENDING_APPROVAL) {
            return item
          }
        })
        this.DynamicReceiptArr2 = this.StaticReceiptArr.filter((item: { type: string }) => {
          if (item.type === ReceiptFilters_ENUM.PENDING_APPROVAL) {
            return item
          }
        })
      } else {
        this.DynamicReceiptArr = this.StaticReceiptArr
        this.DynamicReceiptArr2 = this.StaticReceiptArr
      }
    },
    clearSearchInput() {
      this.searchVal = ''
      // this.DynamicReceiptArr = this.StaticReceiptArr
      this.DynamicReceiptArr = this.DynamicReceiptArr2
    },
    openSearch() {
      this.searchable = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    }
  }
}
</script>
