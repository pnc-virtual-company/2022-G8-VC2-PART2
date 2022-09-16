<template>
  <!-- asideleft bar  -->
  <widget-navigation>
    <template #img>
      <router-link class="flex" to="/profilecoordinator">
        <img
          src="@/assets/male_logo.jpg"
          class="w-2/5 rounded-full m-auto mt-5"
        />
      </router-link>
    </template>
    <template #viewProfile
      ><router-link class="flex" to="/profilecoordinator">
        <span> Your Profile</span></router-link
      ></template
    >
    <template #manageStudentFollowUp>
      <li class="m-3">
        <router-link to="">Follow Up Board </router-link>
      </li></template
    >

    >
  </widget-navigation>
</template>
<script></script>
