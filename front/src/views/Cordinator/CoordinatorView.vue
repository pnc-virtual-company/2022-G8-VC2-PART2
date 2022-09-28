<template>
  <!-- import from aside Left for coordinator -->
  <widget-navigation>
    <!-- slot for profile_img of coordinaot and also we can link to account profile of coordinator-->
    <template #img>
      <div class="flex justify-center">
        <router-link class="flex" to="/profilecoordinator">
          <div>
            <img
              v-if="store.profile_img != ''"
              :src="'http://127.0.0.1:8000/storage/images/' + store.profile_img"
              class="image--cover"
              alt=""
            />
            <img
              v-else
              src="@/assets/male_logo.jpg"
              class="w-2/5 rounded-full m-auto mt-5"
            />
          </div>
        </router-link>
      </div>
    </template>
    <!-- route of Coordinator for manage coordinator -->
    <template #manageCoordinator>
        <li class="m-3" >
          <router-link active-class="active"  to="/managecoordinator" > Manage Coordinator</router-link>
        </li>
    </template>
    <!-- route of Coordinator for manage student -->
    <template #manageStudent>
      <li class="m-3 ">
        <router-link active-class="active" to="/managestudent"> Manage Student</router-link>
      </li>
    </template>
    <!-- router of Coordinator for manage Teacher  -->
    <template #manageTeacher>
      <li class="m-3">
        <router-link active-class="active" to="/manageteacher"> Manage Teacher</router-link>
      </li>
    </template>
    <!-- router of Coordinator for manage Student Follow Up  -->
    <template #manageStudentFollowUp>
      <li class="m-3"><router-link active-class="active"  to="/studentfollowup">Student Follow up</router-link></li>
    </template>
    <!-- router of Coordinator for manage Follow Up Histories  -->
    <template #studentFollowUpHistory>
      <li class="m-3"><router-link active-class="active" to="/followuphistory">Follow up Histories</router-link></li>
    </template>
    <!-- router of Coordinator for manage View profile of coordinator  -->
    <!-- <template #viewProfile>
      <hr />
      

      <div class="group inline-block">
        <button
          class="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-50"
        >
          <li class="m-3 flex">
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
            <span>Settings</span>
          </li>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li class="rounded-sm px-3 text-white-500 py-1"> <router-link to="/profilecoordinator">Profile </router-link></li>
          <li class="rounded-sm px-3 py-1"><router-link to="/editCoordinatorVue">Change Setting </router-link></li>
          <li class="rounded-sm px-3 py-1"><router-link to="/resetCoordinatorPasswordVue">Resset Password </router-link></li>
        </ul>
      </div>
    </template> -->
    <template #viewProfile>
      <widget-SettingVue>
       <template #setting>
         <router-link  to="/profilecoordinator"> Profile </router-link>
       </template>
       <template #changeSetting>
         <router-link  to="/editCoordinatorVue">Change Setting</router-link>
       </template>
       <template #ressetPassword>
         <router-link  to="/resetCoordinatorPasswordVue">Resset Password </router-link>
       </template>
       <template #signOut>
        <button @click="store.signOutCoordinator">Sign Out </button>
      </template>
      </widget-SettingVue>
   </template>
  </widget-navigation>
</template>
<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator";
import { onMounted } from "vue";
const store = userStore();
onMounted(() => {
  store.getUserData();

});
</script>
<style scoped>
.wrapper {
  padding: 100px;
}
.image--cover {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
/* .active{
  border-bottom:3px solid rgb(148, 144, 144);
} */
.active{
  background-color:gray;
  padding: 5px 10px;
}
</style>
