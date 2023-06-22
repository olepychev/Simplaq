<template>
  <div class="w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <h5 class="mb-[24px] text-black xl:text-xl 2xl:text-2xl font-bold leading-[38px] tracking-[-0.4px]">{{$t('rewards')}}</h5>

      <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] gap-y-[24px]">
        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>

        <a href="#" class="relative w-full flex flex-col shadow-sm">
          <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
            <img class="w-full h-full object-cover" src="@/assets/imgs/item3.png" alt="" />
            <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
              <div class="date px-[8px] py-[4px] bg-white flex items-center justify-center rounded-[8px]">
                <div class="flex flex-col items-center">
                  <p class="text-sm font-bold text-black leading-[20px] lowercase">100 {{ $t('points') }}</p>
                </div>
              </div>
              <Icon icon="solar:heart-outline" class="text-xl text-white" />
            </div>
          </div>
          <div class="w-full py-[12px] px-[16px] flex flex-col bg-white orange-border before:bg-yellowLight after:bg-orange rounded-bl-[16px] rounded-br-[16px]">
            <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
              <div class="flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                  <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                </div>
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
              </div>
            </div>
            <div class="w-full mt-[4px] flex gap-[4px] flex-col">
              <p class="font-bold text-back text-sm leading-[20px]">15% {{$t('off_discount_card')}}</p>
              <p class="font-medium text-xs text-grayDark">46/50 {{ $t('pcs') }}</p>
            </div>
          </div>
        </a>


      </div>

      <div class="w-full flex flex-col md:flex-row items-center justify-between gap-[30px] mt-[40px] mb-[100px]">
        <div class="flex items-center gap-[16px]">
          <p class="text-sm text-black font-medium leading-[20px]">{{$t('show_result')}}:</p>
          <select name="" id="" class="px-[24px] py-[10px] bg-gray rounded-[12px]">
            <option value="8" selected>8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <ul class="flex items-center gap-[2px]">
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.92259 4.4107C9.24803 4.73614 9.24803 5.26378 8.92259 5.58921L5.34518 9.16663H16.6667C17.1269 9.16663 17.5 9.53972 17.5 9.99996C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H5.34518L8.92259 14.4107C9.24803 14.7361 9.24803 15.2638 8.92259 15.5892C8.59715 15.9147 8.06951 15.9147 7.74408 15.5892L2.74408 10.5892C2.41864 10.2638 2.41864 9.73614 2.74408 9.4107L7.74408 4.4107C8.06951 4.08527 8.59715 4.08527 8.92259 4.4107Z"
                fill="#17181B"
              />
            </svg>
          </li>
          <li class="font-medium w-[40px] h-[40px] bg-gray hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            1
          </li>
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            2
          </li>
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            3
          </li>
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            4
          </li>
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            ...
          </li>
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            200
          </li>
          <li class="font-medium w-[40px] h-[40px] hover:bg-gray transition-all cursor-pointer text-black flex items-center justify-center rounded-[12px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0774 15.5893C11.4028 15.9147 11.9305 15.9147 12.2559 15.5893L17.2559 10.5893C17.5814 10.2639 17.5814 9.73622 17.2559 9.41079L12.2559 4.41079C11.9305 4.08535 11.4028 4.08535 11.0774 4.41079C10.752 4.73622 10.752 5.26386 11.0774 5.5893L14.6548 9.16671L3.33333 9.16671C2.8731 9.16671 2.5 9.5398 2.5 10C2.5 10.4603 2.8731 10.8334 3.33333 10.8334L14.6548 10.8334L11.0774 14.4108C10.752 14.7362 10.752 15.2639 11.0774 15.5893Z" fill="#17181B"/>
</svg>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script></script>
