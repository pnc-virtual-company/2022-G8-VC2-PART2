<template>
  <!-- getId -->
  <!-- send id to pinia -->
  <div class="hidden">
    {{ storeTeacherData.getData(this.$route.params.id) }}
  </div>
  <!-- profile teacher -->
  <widget-profileDetail>
    <template #img>
      <img
        class="h-auto w-full mx-auto"
        src="../../../assets/female_logo.jpg"
        alt=""
    /></template>
    <template #fullName>
      {{ storeTeacherData.first_name }}
      {{ storeTeacherData.last_name }}
    </template>
    <template #gender>
      {{ storeTeacherData.gender }}
    </template>
    <template #email>
      {{ storeTeacherData.email }}
    </template>
    <template #join>
      {{ storeTeacherData.created_at }}
    </template>
  </widget-profileDetail>
</template>
<script setup>
import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement";
const storeTeacherData = teacherstore();
</script>
