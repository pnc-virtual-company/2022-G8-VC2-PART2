<template>
  <widget-ViewProfileDetail>
    <template #img>
      <img
        v-if="storeData.profile_img != ''"
        class="h-auto w-full mx-auto"
        src="../../assets/female_logo.jpg"
        alt=""
      />
    </template>
    <template #edit>
      <EditCoordinatorVue ></EditCoordinatorVue>
    </template>
    <template #fullName>
      {{ storeData.first_name }} {{ storeData.last_name }}
    </template>
    <template #gender>  {{ storeData.gender }}  </template>
    <template #rename> Role </template>
    <template #information> Coordinator </template>

    <template #email>
      {{ storeData.email }}
    </template>
    <template #join>
      {{ storeData.created_at }}
    </template>
    <template #resetPassword>
      <ResetCoordinatorPasswordVue></ResetCoordinatorPasswordVue>
    </template>
  </widget-ViewProfileDetail>

</template>

<script setup>
  import EditCoordinatorVue from "./CoordinatorList/EditCoordinator.vue";
  import ResetCoordinatorPasswordVue from "./CoordinatorList/ResetCoordinatorPassword.vue";
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator";
import { onMounted } from "vue";
const storeData = userStore();
onMounted(() => {
  storeData.getUserData();
});
</script>



