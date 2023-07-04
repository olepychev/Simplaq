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

/* vue use head */
import { useHead } from '@vueuse/head'

export default {
    name: "Lite",
    components: {
        HeaderComponent,
        BreadcrumbComponent,
        LiteFooterComponent,
        SingleRewardCardComponent,
        SignleRewardCardsComponent,
    },
    setup() {
        useHead({
    title: 'Galerie Harfa Mall - My Rewards',
    meta: [
      {
        name: 'description',
        content: 'View your current reward on the Galerie Harfa Mall - My Rewards page. Check the terms and conditions associated with the reward and discover other rewards you may also like.'
      },
      {
        property: 'og:title',
        content: 'Galerie Harfa Mall - My Rewards'
      },
      {
        property: 'og:description',
        content: 'View your current reward on the Galerie Harfa Mall - My Rewards page. Check the terms and conditions associated with the reward and discover other rewards you may also like.'
      },
      {
        property: 'og:image',
        content: 'image.jpg'
      }
    ]
  });
    }
}
</script>