<template>
  <div class="w-full my-[32px]">
    <div class="relative max-w-[1600px] mx-auto">
      <div class="w-full max-w-[664px] mx-auto px-[25px] sm:px-[0px]">
        <div class="flex flex-col w-full">
          <slot name="head">

          </slot>

          <div class="w-full flex flex-col">
            <slot name="hero"></slot>

            <slot name="body"></slot>
          </div>
          <div class="mt-[100px] w-full">
              <slot name="suggestions"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
