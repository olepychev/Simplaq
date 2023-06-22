<template>
    <HeaderComponent/>
    <BreadcrumbComponent page="Rewards" subPage="Gift Card Sturbucks"/>

    <SingleRewardCardComponent />
    <SignleRewardCardsComponent />
    <LiteFooterComponent />
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue';
import LiteFooterComponent from '@/components/lite-pages/layouts/LiteFooterComponent.vue';
import SingleRewardCardComponent from '@/components/lite-pages/SingleRewardCardComponent.vue';
import SignleRewardCardsComponent from '@/components/lite-pages/SignleRewardCardsComponent.vue';


import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
export default {
    name: "Lite",
    components: {
        HeaderComponent,
        BreadcrumbComponent,
        LiteFooterComponent,
        SingleRewardCardComponent,
        SignleRewardCardsComponent,
    }
}
</script>