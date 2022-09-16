<template>
<<<<<<< HEAD
  <section class="lg:flex w-5/5">
    <!-- <div>
      <login_view></login_view>
    </div> -->
    <div class="">
      <aside_left></aside_left>
    </div>
    <div class="w-4/5">
      <navbar_view class="w-5/5"></navbar_view>
      <router-view  class="w-5/5"/>
=======
  <section >
    <div class="">
      <router-view  />
>>>>>>> db896168b1817ccda2f6e37cd1adef6379bbdd18
    </div>
  </section>
<div></div>
</template>
<script>
<<<<<<< HEAD
import NavbarView from "@/components/NavBar/NavbarView.vue"
import AsideLeft from '@/components/Aside/AsideLeft.vue';
// import LoginView from '@/components/Login/loginView.vue'

export default {
  components: {
    "navbar_view":NavbarView,
    'aside_left':AsideLeft,
    // 'login_view':LoginView
  },
=======
  
export default {
>>>>>>> db896168b1817ccda2f6e37cd1adef6379bbdd18
};
</script>