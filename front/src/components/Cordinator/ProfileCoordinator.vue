<template>
  <div class="ml-3 mt-5 flex font-semibold  " >
    <span class="p-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    </span>
    <span class="p-2 ">Account</span>
  </div>
  <widget-ViewProfileDetail>
    <template #img>
      <img
      :src="
        'http://127.0.0.1:8000/storage/images/' +
        storeData.profile_img
      "
      class=" m-auto image--cover"
      alt=""
    />
      <div class="flex justify-center"> 
        <label for="profile_img">
          <img 
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/camera-512.png" 
          alt="" width="30" height="30" >
        </label>
         <input 
         type="file" 
         hidden="true"
         id="profile_img"
         @change="storeData.changeProfile">
      </div>
    </template>
    <template #fullName>
      {{ storeData.first_name }}  {{ storeData.last_name }}
    </template>
    <template #firstName>
      {{ storeData.first_name }} 
    </template>
    <template #lastName>
      {{ storeData.last_name }}
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
  </widget-ViewProfileDetail>
</template>
<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator";
import { onMounted } from "vue";
const storeData = userStore();
onMounted(() => {
  storeData.getUserData();
});
</script>
<style scoped>
  .image--cover {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
</style>