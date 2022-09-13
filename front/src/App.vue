<template>
  <section class="lg:flex w-5/5">
    <div class="antialiased h-screen w-1/5" >
      <aside_left></aside_left>
    </div>
    <div class="w-4/5 ml-12">
      <navbar_view class="w-5/5"></navbar_view>
      <router-view  class="w-5/5"/>
    </div>
  </section>

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