<template>
  <!-- profile teacher -->
  <widget-ViewProfileDetail>
    <template #img>
      <img
        :src="
          'http://127.0.0.1:8000/storage/images/' + storeTeacherData.profile_img
        "
        class="m-auto image--cover"
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
         @change="storeTeacherData.changeProfileTeacherImage">
      </div>
    </template>
    <template #fullName>
      {{ storeTeacherData.first_name }}  {{ storeTeacherData.last_name }}
    </template>
    <template #firstName>
      {{ storeTeacherData.first_name }}
    </template>
    <template #lastName>
      {{ storeTeacherData.last_name }}
    </template>
    <template #gender>
      {{ storeTeacherData.gender }}
    </template>
    <template #rename> Position </template>
    <template #information>
      {{ storeTeacherData.position }}
    </template>
    <template #email>
      {{ storeTeacherData.email }}
    </template>
    <template #join>
      {{ storeTeacherData.created_at }}
    </template>
  </widget-ViewProfileDetail>
</template>
<script setup>
import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement";
import { onMounted } from "vue";
const storeTeacherData = teacherstore();
onMounted(() => {
  storeTeacherData.getDatTeacherToPRofile();
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