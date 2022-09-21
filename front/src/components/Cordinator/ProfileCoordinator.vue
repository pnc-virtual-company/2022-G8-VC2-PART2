<template>
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