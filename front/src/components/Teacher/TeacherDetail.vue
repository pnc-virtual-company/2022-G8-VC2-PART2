<template>
    <!-- getId -->
    <!-- send id to pinia -->
    <div class="hidden">
      {{ teacherData.getData(this.$route.params.id)}}
    </div>
    <!-- profile teacher -->
    <widget-ViewProfileDetail>
      <template #img>
        <img v-if="teacherData.profile_img != null"
            :src="'http://127.0.0.1:8000/storage/images/'+teacherData.profile_img"
            class="h-auto w-full mx-auto"
            alt=""
        />
        <img v-else-if="teacherData.gender == 'female'"
            src="@/assets/female_logo.jpg"
            class="h-auto w-full mx-auto"
            alt=""
        />
        <img v-else-if="teacherData.gender == 'male'"
            src="@/assets/male_logo.jpg"
            class="h-auto w-full mx-auto"
            alt=""
        />
      </template>
      <template #fullName>
        {{ teacherData.first_name }}
        {{ teacherData.last_name }}
      </template>
      <template #gender>
        {{ teacherData.gender }}
      </template>
      <template #rename>
        Position
      </template>
      <template #information>
        {{teacherData.position}}
      </template>
      <template #email>
        {{ teacherData.email }}
      </template>
      <template #join>
        {{ teacherData.created_at }}
      </template>
    </widget-ViewProfileDetail>
  </template>
  <script setup>
  import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement";
  import { onMounted } from "vue";
  const teacherData = teacherstore();
   onMounted(()=>{
        teacherData.getData()
   })
  </script>
  