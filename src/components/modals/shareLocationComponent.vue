<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-[664px] px-[40px] pt-[56px] pb-[40px] bg-white rounded-[24px]">
        <div class="w-full h-full">
          <div class="flex items-center justify-between pb-[16px]">
            <div></div>

            <div @click="closeShareLocation" class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5509 4.49042C16.8434 4.19708 16.8434 3.72148 16.5509 3.42814C16.2585 3.13479 15.7844 3.13479 15.4919 3.42814L10.0067 8.93021L4.49038 3.4294C4.19708 3.13692 3.72154 3.13692 3.42823 3.4294C3.13493 3.72188 3.13493 4.19608 3.42823 4.48857L8.94766 9.99249L3.44674 15.5103C3.1543 15.8036 3.1543 16.2792 3.44674 16.5726C3.73918 16.8659 4.21333 16.8659 4.50577 16.5726L10.0098 11.0516L15.5094 16.5358C15.8027 16.8283 16.2783 16.8283 16.5716 16.5358C16.8649 16.2434 16.8649 15.7691 16.5716 15.4767L11.0688 9.98937L16.5509 4.49042Z"
                  fill="#17181B"
                />
              </svg>
            </div>
          </div>

          <div class="flex relative w-full mb-[24px] rounded-[16px] flex items-start justify-center gap-[10px]">
            <img class="w-full max-w-[136px]" src="@/assets/imgs/location.svg" alt="" />
          </div>

          <h6 class="font-bold text-black text-xl mb-[8px] text-center">{{ $t('share_your_location') }}</h6>

          <p class="font-medium text-sm text-grayDark max-w-[380px] mx-auto text-center leading-[24px]">{{ $t('share_your_location_text') }}</p>

          <div class="flex gap-[8px] mt-[84px] border-t pt-[16px] border-gray w-full items-center justify-center">
            <button
              @click="closeShareLocation"
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t('not_now') }}
            </button>
            <button
              class="border-[1px] max-w-[343px] w-full border-graylight rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black hover:bg-orange hover:text-white transition-all"
            >
              {{ $t('allow_location') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Share_location',
  emits: ['closeShareLocation'],
  methods: {
    closeShareLocation() {
      this.$emit('closeShareLocation', '')
    }
  }
}
</script>
