<template>
  <aside class="relative w-full max-w-[300px] rounded-[24px] bg-white px-[20px] pt-[20px] pb-[24px]">
    <div class="w-full flex flex-col items-start">
      <div class="w-full flex flex-col gap-[4px]">
        <div class="w-full flex flex-col gap-[12px]">
          <div class="flex items-center gap-[12px]">
            <div class="flex items-end flex overflow-hidden justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
              <img class="w-[80%]" src="@/assets/imgs/profile.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[2px]">
              <p class="font-bold text-sm leading-[20px] text-black">Ann Haiduk</p>
              <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-grayDark">120 {{ $t('loyalty_points') }}</p>
            </div>
          </div>
          <div class="w-full bg-gray p-[16px] rounded-[16px] flex items-center justify-between">
            <div class="flex items-center gap-[12px]">
              <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
              <p class="capitalize text-black font-bold leading-[20px] text-sm">{{ $t('user_id') }}: 2434334</p>
            </div>
            <Icon icon="solar:copy-outline" class="text-lg text-black cursor-pointer" />
          </div>
        </div>

        <div class="w-full flex flex-col gap-[2px]">
          <RouterLink exact-active-class :to="{ name: $Routes.PROFILE_TAB }" class="sidebar-link w-full flex p-[8px] items-center gap-[12px]">
            <div
              class="icon flex group-active:bg-yellowLight items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all"
            >
              <Icon icon="solar:user-linear" class="text-lg text-black" />
            </div>
            <p class="font-bold text-sm text-black leading-[20px]">{{ $t('profile') }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'Profile-Sidebar'
}
</script>
