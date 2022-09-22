<template>
  <!-- import from aside left bar  -->


    <widget-navigation >
      <!-- slot for image also we can link to account profile of teacher -->
      <template #img>
        <div class="flex justify-center">
          <router-link class="flex" to="/manageTeacherProfile">
            <div>
              <img
               v-if="storeTeacherData.profile_img!=''"
                :src="'http://127.0.0.1:8000/storage/images/' + storeTeacherData.profile_img"
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
      <!-- route that  Teacher can see all list teachers  -->
      <template #displayListTeacher>
        <li class="m-3">
          <router-link to="/displaylistteacher">All Teacher List</router-link>
        </li>
      </template>
  
      <!-- route that Teacher can manage student  -->
      <template #manageStudent>
        <li class="m-3">
          <router-link to="/teacherManageStudent"> Manage Student</router-link>
        </li>
      </template>
      <!-- router that teacher can manage student follow up -->
      <template #manageStudentFollowUp>
        <li class="m-3">
          <router-link to="/followupStudent">Student Follow up </router-link>
        </li>
      </template>
      <!-- route that teacher can manage student follow up histories -->
      <template #studentFollowUpHistory>
        <li class="m-3">
          <router-link to="">Follow up Histories</router-link>
        </li>
      </template>
      <!-- route link to account profile teacher -->
        <template #viewProfile>
           <widget-SettingVue>
            <template #setting>
              <router-link to="/manageTeacherProfile"> Profile </router-link>
            </template>
            <template #ressetPassword>
              <router-link to="/ressetPasswordTeacherVue">Resset Password </router-link>
            </template>
            <template #signOut>
              <button @click="storeTeacherData.signOut">Sign Out </button>
            </template>
           </widget-SettingVue>
        </template>
      </widget-navigation>
</template>
<script setup>
import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement"
import { onMounted } from "vue";
const storeTeacherData = teacherstore()
onMounted(()=>{
  storeTeacherData.getDatTeacherToPRofile()
})
</script>
<style scoped>
  .image--cover {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  
    object-fit: cover;
    object-position: center;
  }
</style>
