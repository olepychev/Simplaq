<template>
  <div class="flex flex-col items-center gap-[24px] justify-center h-full">
    <div class="w-full flex flex-col gap-[24px] items-center justify-center">
      <div class="flex flex-col items-center gap-[4px] max-w-[360px]">
        <h6 class="text-black font-bold text-center text-xl">{{ $t('create_an_account') }}</h6>
        <p class="font-normal text-sm text-grayDark2 leading-[24px] tracking-[0.1px]">{{ $t('signup_welcome_text') }}</p>
      </div>
    </div>

    <form class="flex flex-col gap-[8px] w-full max-w-[360px]" action="#" method="POST">
      <div class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            type="text"
            id="name"
            :placeholder="$t('name')"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="solar:shield-user-outline" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            type="text"
            id="surname"
            :placeholder="$t('surname')"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

      <div class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]">
        <div>
            <Icon icon="tabler:mail" class="text-lg text-black " />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            type="text"
            id="surname"
            :placeholder="$t('email')"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon icon="bi:check" class="text-lg text-green" />
        </div>
      </div>

    

      <div class="items-center gap-[12px] grid grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]">
        <div>
          <Icon icon="solar:lock-keyhole-minimalistic-linear" class="text-lg text-black" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <input
            type="password"
            id="password"
            :placeholder="$t('password')"
            class="text-black py-[22px] font-medium bg-transparent outline-none text-sm leading-[20px]"
          />
        </div>
        <div>
          <Icon icon="bx:hide" class="text-lg text-black" />
        </div>
      </div>
      <div class="flex flex-col gap-[8px]">
        <div class="flex items-center gap-[12px]">
            <div class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
                <Icon icon="jam:close" class="text-xs text-black" />
            </div>
            <p class="text-xs text-grayDark3">At least 8 characters</p>
        </div>
        <div class="flex items-center gap-[12px]">
            <div class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
                <Icon icon="jam:close" class="text-xs text-black" />
            </div>
            <p class="text-xs text-grayDark3">Both uppercase and lowercase letters (optional)</p>
        </div>
        <div class="flex items-center gap-[12px]">
            <div class="w-[12px] h-[12px] rounded-full bg-gray flex items-center justify-center">
                <Icon icon="jam:close" class="text-xs text-black" />
            </div>
            <p class="text-xs text-grayDark3">At least one number or symbol (optional)</p>
        </div>
      </div>

      <div class="flex flex-col gap-[12px]">
        <button type="submit" class="bg-gray py-[16px] rounded-[16px] text-grayDark3 text-sm font-semibold leaing-[20px] tracking-[-0.2px]">
          {{ $t('sign_in') }}
        </button>
      </div>

      <p class="text-center text-grayDark text-xs mt-[60px] font-normal leading-[20px] tracking-[0.2px]">
        {{ $t('already_a_member?') }}
        <router-link to="/login" class="text-pink max-w-[360px] font-semibold text-xs leading-[20px] tracking-[-0.2px] w-full text-end">{{
          $t('login')
        }}</router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'signup-01step'
}
</script>
