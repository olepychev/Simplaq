<template>
    <LiteHeader/>

    <LiteReceiptsComponent v-if="authorized"/>

    <LiteHeroComponent v-if="!authorized" />
    <LiteCardsComponent />
    <LiteMyRewardsComponent v-if="authorized"/>
    <LiteFooterComponent />
    <!-- <UploadReceiptComponent /> -->
</template>

<script lang="ts">
import LiteHeader from '@/components/lite-pages/layouts/LiteHeader.vue';
import LiteHeroComponent from '@/components/lite-pages/LiteHeroComponent.vue';
import LiteCardsComponent from '@/components/lite-pages/cards/LiteCardsComponent.vue';
import LiteFooterComponent from '@/components/lite-pages/layouts/LiteFooterComponent.vue';
import LiteReceiptsComponent from '@/components/lite-pages/LiteReceiptsComponent.vue';
import UploadReceiptComponent from '@/components/lite-pages/UploadReceiptComponent.vue';
import LiteMyRewardsComponent from '@/components/lite-pages/cards/LiteMyRewardsComponent.vue';
export default {
    name: "Lite",
    data() {
        return {
            authorized: true,
        }
    },
    components: {
        LiteHeader,
        LiteHeroComponent,
        LiteCardsComponent,
        LiteFooterComponent,
        UploadReceiptComponent,
        LiteReceiptsComponent,
        LiteMyRewardsComponent,
    }
}
</script>