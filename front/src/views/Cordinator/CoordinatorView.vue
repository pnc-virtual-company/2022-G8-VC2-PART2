<template>
    <div class="container">
      <navbar_view></navbar_view>
      <manage_student></manage_student>
    </div>
  </template>
  <script>
  import ManageStudent from "./ManageStudent/ManageStudent.vue"
  import NavbarView from "@/components/NavBar/NavbarView.vue";
  export default {
    components: {
      "navbar_view": NavbarView,
      "manage_student": ManageStudent,
    },
  };
  </script>