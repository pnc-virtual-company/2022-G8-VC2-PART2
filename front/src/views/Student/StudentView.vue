<template>
  <!-- asideleft bar  -->
  <widget-navigation>
    <template #img>
      <div class="flex justify-center">
        <router-link class="flex" to="/profilecoordinator">
          <div>
            <img
              v-if="studentStore.profile_img != ''"
              :src="'http://127.0.0.1:8000/storage/images/' + studentStore.profile_img"
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

    <template #manageStudentFollowUp>
      <li class="m-3">
        <router-link class="flex" to="/ManageStudentProfile"
          >Follow Up Board</router-link
        >
      </li>
    </template>
  </widget-navigation>
<<<<<<< HEAD
  {{ studentStore.studentId }}
=======
>>>>>>> df112db9bea4b93410af515588908432cd89608e
</template>
<script setup>
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement";
import { onMounted } from "vue";
const studentStore = studentstore();
onMounted(() => {
  studentStore.getStudentToken();
});
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
