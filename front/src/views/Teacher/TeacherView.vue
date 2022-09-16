<template>
  <!-- import from aside left bar  -->
  <widget-navigation>
    <!-- slot for image also we can link to account profile of teacher -->
    <template #img>
      <router-link class="flex" to="/profilecoordinator">
        <img
          src="@/assets/male_logo.jpg"
          class="w-2/5 rounded-full m-auto mt-5"
        />
      </router-link>
    </template>
    <!-- route that Teacher can manage student  -->
    <template #manageStudent>
      <li class="m-3">
        <router-link to="/teacherManageStusent"> Manage Student</router-link>
      </li>
    </template>
    <!-- router that teacher can manage student follow up -->
    <template #manageStudentFollowUp>
      <li class="m-3">
        <router-link to="">Student Follow up </router-link>
      </li></template
    >
    <!-- route that teacher can manage student follow up histories -->
    <template #studentFollowUpHistory>
      <li class="m-3"><router-link to="">Follow up Histories</router-link></li>
    </template>
    <!-- route link to account profile teacher -->
    <template #viewProfile
      ><router-link class="flex" to="/profilecoordinator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span> View Profile</span></router-link
      ></template
    >
  </widget-navigation>
</template>
<script>

</script>
