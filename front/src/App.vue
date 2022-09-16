<template>
  <section class="lg:flex w-5/5">
    <div>
      <login_view></login_view>
    </div>
    <div v-if="2==3" class="">
      <aside_left></aside_left>
    </div>
    <div v-if="1==2" class="w-4/5">
      <navbar_view class="w-5/5"></navbar_view>
      <router-view  class="w-5/5"/>
    </div>
  </section>

</template>
<script>
import NavbarView from "@/components/NavBar/NavbarView.vue"
import AsideLeft from '@/components/Aside/AsideLeft.vue';
import LoginView from '@/components/Login/loginView.vue'

export default {
  components: {
    "navbar_view":NavbarView,
    'aside_left':AsideLeft,
    'login_view':LoginView
  },
};
</script>