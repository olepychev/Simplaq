<template>
  <div class="w-full h-screen fixed top-0 left-0 bg-overlay z-50">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full max-w-[664px] p-[40px] bg-white rounded-[24px]">
        <div class="w-full h-full " id="step-01">
          <div class="flex items-center justify-between pb-[16px] border-b-[1px] border-gray">
            <div class="flex flex-col gap-[4px]">
              <h6 class="font-bold leading-[26px] tracking-[-0.4px] text-black text-lg">Upload my receipt</h6>
              <p class="text-normal text-sm text-grayDark leading-[24px] tracking-[0.1px]">
                Here you can upload receipts in order to get reward points
              </p>
            </div>
            <div @click="closeUploadReceiptComponent"
              class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.5509 4.49042C16.8434 4.19708 16.8434 3.72148 16.5509 3.42814C16.2585 3.13479 15.7844 3.13479 15.4919 3.42814L10.0067 8.93021L4.49038 3.4294C4.19708 3.13692 3.72154 3.13692 3.42823 3.4294C3.13493 3.72188 3.13493 4.19608 3.42823 4.48857L8.94766 9.99249L3.44674 15.5103C3.1543 15.8036 3.1543 16.2792 3.44674 16.5726C3.73918 16.8659 4.21333 16.8659 4.50577 16.5726L10.0098 11.0516L15.5094 16.5358C15.8027 16.8283 16.2783 16.8283 16.5716 16.5358C16.8649 16.2434 16.8649 15.7691 16.5716 15.4767L11.0688 9.98937L16.5509 4.49042Z"
                  fill="#17181B" />
              </svg>
            </div>
          </div>

          <div
            class="flex flex-col relative w-full p-[24px] border-[1px] border-gray rounded-[16px] flex items-center justify-center gap-[10px]">
            <div class="flex w-[72px] h-[72px] bg-gray flex items-center justify-center rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.60842 16.4167C6.29175 15.6833 7.33342 15.7417 7.93342 16.5417L8.77508 17.6667C9.45008 18.5583 10.5417 18.5583 11.2167 17.6667L12.0584 16.5417C12.6584 15.7417 13.7001 15.6833 14.3834 16.4167C15.8667 18 17.0751 17.475 17.0751 15.2583V5.86666C17.0834 2.50832 16.3001 1.66666 13.1501 1.66666H6.85008C3.70008 1.66666 2.91675 2.50832 2.91675 5.86666V15.25C2.91675 17.475 4.13341 17.9917 5.60842 16.4167Z"
                  stroke="#17181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.66675 5.83334H13.3334" stroke="#17181B" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M7.5 9.16666H12.5" stroke="#17181B" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div class="flex flex-col gap-[6px]">
              <div class="flex items-center justify-center gap-[6px]">
                <p class="font-base text-black leading-[22px] tracking-[-0.3px] font-medium">Drag and drop an receipt, or
                </p>
                <div
                  class="relative overflow-hidden font-base cursor-pointer text-pink leading-[22px] tracking-[-0.3px] font-medium">
                  Browse
                  <input class="absolute left-0 opacity-0 cursor-pointer" type="file" name="" id="" />
                </div>
              </div>
              <p class="text-xs font-grayDark leading-[20px] font-normal tracking-[0.2px]">
                Maxiumum file size 20 Mb. Allowed formats: jpg, png, pdf
              </p>
            </div>
          </div>
        </div>

        <div class="w-full h-full hidden" id="step-02">
          <div class="flex items-center justify-between pb-[16px]">
            <div class="flex flex-col gap-[4px]">
              <h6 class="font-bold leading-[26px] tracking-[-0.4px] text-black text-lg">Upload my receipt</h6>
              <p class="text-normal text-sm text-grayDark leading-[24px] tracking-[0.1px]">
                Here you can upload receipts in order to get reward points
              </p>

              <div class="flex gap-[8px] mt-[16px]">
                <button
                  class="bg-orange rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-white">Receipt</button>
                <button class="bg-gray rounded-[12px] px-[24px] py-[10px] text-sm font-semibold text-black">Visualized
                  Data</button>
              </div>
            </div>

            <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.5509 4.49042C16.8434 4.19708 16.8434 3.72148 16.5509 3.42814C16.2585 3.13479 15.7844 3.13479 15.4919 3.42814L10.0067 8.93021L4.49038 3.4294C4.19708 3.13692 3.72154 3.13692 3.42823 3.4294C3.13493 3.72188 3.13493 4.19608 3.42823 4.48857L8.94766 9.99249L3.44674 15.5103C3.1543 15.8036 3.1543 16.2792 3.44674 16.5726C3.73918 16.8659 4.21333 16.8659 4.50577 16.5726L10.0098 11.0516L15.5094 16.5358C15.8027 16.8283 16.2783 16.8283 16.5716 16.5358C16.8649 16.2434 16.8649 15.7691 16.5716 15.4767L11.0688 9.98937L16.5509 4.49042Z"
                  fill="#17181B" />
              </svg>
            </div>
          </div>

          <div
            class="flex relative w-full p-[24px] border-[1px] max-h-[361px] overflow-y-scroll border-gray rounded-[16px] flex items-start justify-center gap-[10px]">
            <img class="w-full max-w-[350px]" src="@/assets/imgs/receipt.svg" alt="" />
          </div>

          <div class="flex gap-[8px] mt-[16px] grid grid-cols-2">
            <button class="border-[1px] border-gray rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-black">
              Delete receipt
            </button>
            <button
              class="border-[1px] border-orange bg-orange rounded-[12px] px-[24px] py-[17px] text-sm font-semibold text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['closeUploadReceiptComponent'],
  methods: {
    closeUploadReceiptComponent() {
      this.$emit('closeUploadReceiptComponent')
    }
  }
}
</script>
