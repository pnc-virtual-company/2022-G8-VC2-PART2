<template>
  <!-- import from aside Left for coordinator -->
  <widget-navigation>
    <!-- slot for profile_img of coordinaot and also we can link to account profile of coordinator-->
    <template #img>
      <router-link class="flex" to="/profilecoordinator">
        <img
          src="@/assets/male_logo.jpg"
          class="w-2/5 rounded-full m-auto mt-5"
        />
      </router-link>
    </template>
    <!-- route of Coordinator for manage student -->
    <template #manageStudent>
      <li class="m-3">
        <router-link to="/managestudent"> Manage Student</router-link>
      </li>
    </template>
    <!-- router of Coordinator for manage Teacher  -->
    <template #manageTeacher>
      <li class="m-3">
        <router-link to="/manageteacher"> Manage Teacher</router-link>
      </li>
    </template>
       <!-- router of Coordinator for manage Student Follow Up  -->
    <template #manageStudentFollowUp>
      <li class="m-3"><router-link to="">Student Follow up</router-link></li>
    </template>
       <!-- router of Coordinator for manage Follow Up Histories  -->
    <template #studentFollowUpHistory>
      <li class="m-3"><router-link to="">Follow up Histories</router-link></li>
    </template>
       <!-- router of Coordinator for manage View profile of coordinator  -->
    <template #viewProfile
    >
    <router-link  to="/profilecoordinator">
        <li class="m-3 flex" >
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
          <span> View Profile</span>
        </li>
        </router-link>
          
      </template>
  </widget-navigation>
</template>
<script>
export default {};
</script>
