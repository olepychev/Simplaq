<template>
    <div class="alertShow fixed left-[50%] translate-x-[-50%] z-[9999] max-w-[360px] w-full flex items-center justify-between bg-white rounded-[20px] p-[16px] drop-shadow-md">
        <div class="flex items-center gap-[12px]">
            <Icon icon="jam:triangle-danger-f" class="text-xl text-redLight2" />
            <p class="text-redLight2 font-medium text-sm leading-[20px] tracking-[-0.2px]">{{$t('invalid_password_confirmation')}}</p>
        </div>

        <Icon icon="majesticons:close" class="text-xl text-grayDark4 cursor-pointer hover:text-grayDark3" />
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            message: {
                required: true,
            },
        },
    }
</script>

<style>
.alertShow {
    animation: alertShow 0.6s forwards;
}
@keyframes alertShow {
    0% {
        bottom: -250px;
    }
    100% {
        bottom: 32px;
    }
}
</style>