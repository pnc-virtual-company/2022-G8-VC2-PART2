<template>
<div>
    <div class="container flex">
      <aside_left class="w-1/5"></aside_left>
      <navbar_view class="w-4/5"></navbar_view>
    </div>
    <router-view />
</div>

</template>
<script>
// import CoordinatorView from "@/views/Cordinator/CoordinatorView.vue";
import NavbarView from "@/components/NavBar/NavbarView.vue"
import AsideLeft from '@/components/Aside/AsideLeft.vue';
export default {
  components: {
    // 'coordinator_view': CoordinatorView,
    "navbar_view":NavbarView,
    'aside_left':AsideLeft,
  },
};
</script>
