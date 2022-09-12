<template>
<div>
    <div class="container flex">
      <aside_left class="w-1/5"></aside_left>
      <nav_bar class="w-4/5"></nav_bar>
    </div>
    <router-view />
</div>

</template>
<script>
import NavBar from "@/components/NavBar/NavbarView.vue";
import AsideLeft from '@/components/Aside/AsideLeft.vue';
import StudentFollowUp from '@/components/views/StudentFollowUp.vue';
export default {
  components: {
    'nav_bar': NavBar,
    'aside_left':AsideLeft,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
