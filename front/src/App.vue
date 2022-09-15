<template>
  <section class="lg:flex w-5/5">
    <div  >
      <aside_left></aside_left>
    </div>
    <div class="w-4/5 ">
      <navbar_view class="w-5/5"></navbar_view>
      <router-view  class="w-5/5"/>
    </div>
  </section>

</template>
<script>
import NavbarView from "@/components/NavBar/NavbarView.vue"
import AsideLeft from '@/components/Aside/AsideLeft.vue';

export default {
  components: {
    "navbar_view":NavbarView,
    'aside_left':AsideLeft,
  },
};
</script>