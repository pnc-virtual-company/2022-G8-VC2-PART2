<template>
    <widget-title>
        <template v-slot>
            All List Teachers
        </template>
    </widget-title>
    <div 
      class=" m-auto relative bg-gray-100 p-5 shadow-md w-11/12 sm:rounded-lg mt-3 h-screen overflow-y-scroll"
    >
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Profile</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-6">Position</th>
            <th class="py-3 px-6">Email</th>
          </tr>
        </thead>

        <tbody  v-for:="teacher in teacherData.displayTeachers">
          <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700" v-if="teacher.id!=teacherData.adminId">
            <td class="py-4 px-6">
                <router-link class="flex" :to="{name:'teacherdetail',path:'teacherdetail',params:{id:teacher.id}}">
                    <img v-if="teacher.user.profile_img != null"
                        :src="'http://127.0.0.1:8000/storage/images/'+teacher.user.profile_img"
                        class="w-12 h-12 rounded-full m-auto mt-5"
                        alt=""
                        />
                    <img v-else-if="teacher.user.gender == 'female'"
                        src="@/assets/female_logo.jpg"
                        class="w-12 h-12 rounded-full m-auto mt-5"
                        alt=""
                        />
                    <img v-else-if="teacher.user.gender == 'male'"
                        src="@/assets/male_logo.jpg"
                        class="w-12 h-12 rounded-full m-auto mt-5"
                        alt=""
                        />
                </router-link>
            </td>
            <td class="py-4 px-6">
              <h1 class="">{{teacher.user.first_name}}</h1>
            </td>
            <td class="py-4 px-6">
              <h1 class="">
                {{teacher.position}}
              </h1>
            </td>
            <td class="py-4 px-6">
              {{teacher.user.email}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
    import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement"
    import { onMounted } from "vue";
    const teacherData = teacherstore();
    onMounted(() => {
        teacherData.displayTeachersList()
    });
</script>
    
