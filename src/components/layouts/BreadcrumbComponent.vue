<template>
  <div class="w-full bg-gray">
    <div class="relative max-w-[1600px]] mx-auto">
      <div class="w-full px-[25px] py-[21px] flex items-center gap-[8px]">
        <img src="@/assets/imgs/logo-notitle.svg" class="w-[29px]" alt="">


        <Icon icon="octicon:chevron-right-24" class="text-lg text-grayDark2" />

        <p class="font-semibold text-sm text-black leading-[20px] tracking-[-0.2px]">{{page}}</p>
        
        <Icon icon="octicon:chevron-right-24" class="text-lg text-grayDark2" />

        <p class="font-semibold text-sm text-grayDark leading-[20px] tracking-[-0.2px]">{{subPage}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    export default {
        props: {
            page: {
                required: true,
                type: String,
            },
            subPage: {
                required: true,
                type: String,
            },
        }
    }
</script>
