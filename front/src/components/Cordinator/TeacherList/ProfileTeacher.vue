<template>
  <!-- getId -->
  <!-- send id to pinia -->
  <div class="hidden">
    {{ storeTeacherData.getData(this.$route.params.id)}}
  </div>
  <!-- profile teacher -->
  <widget-ViewProfileDetail>
    <template #img>
      <div v-if="storeTeacherData.profile_img !=null" class="image overflow-hidden">
        <img class="h-auto w-full mx-auto" :src="'http://127.0.0.1:8000/storage/images/'+storeTeacherData.profile_img" alt="" />
      </div>
      <div v-else-if="storeTeacherData.gender == 'male'" class="image overflow-hidden">
        <img class="h-auto w-full mx-auto" src="../../../assets/male_logo.jpg" alt="" />
      </div>
      <div v-else class="image overflow-hidden">
        <img class="h-auto w-full mx-auto" src="../../../assets/female_logo.jpg" alt="" />
      </div>
    </template>
    <template #fullName>
      {{ storeTeacherData.first_name }}
      {{ storeTeacherData.last_name }}
    </template>
    <template #gender>
      {{ storeTeacherData.gender }}
    </template>
    <template #rename>
      Position
    </template>
    <template #information>
      {{storeTeacherData.position}}
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
 onMounted(()=>{
  storeTeacherData.getData()
 })
</script>
