<template>
    <div class="container">
      <manage_student></manage_student>
    </div>
  </template>
  <script>
  import ManageStudent from "./ManageStudent/ManageStudent.vue"
  export default {
    components: {
      "manage_student": ManageStudent,
    },
  };
  </script>