<template>
  <HeaderComponent />

  <div class="bg-gray">
    <div class="w-full relative flex py-[16px] max-w-[1600px] mx-auto px-[25px] gap-[40px]">
    <ProfileSidebar />
    <RouterView></RouterView>
  </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import ProfileSidebar from '@/components/profile/sidebar/SidebarComponent.vue'
export default {
  name: 'Profile',
  components: {
    HeaderComponent,
    ProfileSidebar,
  }
}
</script>
