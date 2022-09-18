<template>
  <!-- asideleft bar  -->
  <widget-navigation>
    <template #img>
      <router-link class="flex" to="/ManageStudentProfile">
        <img
          src="@/assets/male_logo.jpg"
          class="w-2/5 rounded-full m-auto mt-5"
        />
      </router-link>
    </template>
   
    <template #manageStudentFollowUp>
      <li class="m-3">
        <router-link class="flex" to="/ManageStudentProfile">Follow Up Board</router-link>
      </li>
      </template>
  </widget-navigation>
  {{studentStore.studentId}}
</template>
<script setup>
  import {userStore} from "@/store/coordinatorStore/coordinator/coordinator"
import { onMounted } from "vue";
  const studentStore = userStore()
  onMounted(()=>{
    studentStore.getStudentToken()
  })
  </script>