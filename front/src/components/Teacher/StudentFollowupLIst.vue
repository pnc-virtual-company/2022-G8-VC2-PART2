<template>
  <div class="container ">
    
    <!-- ====================== filter on student list ==================== -->
    <div class="mt-5 ml-10 "><i class="fa-solid fa-user fa-2x"></i> <strong class="text-2x">STUDENTS FOLLOW UP LIST</strong></div>
    <div class="flex justify-between">
      <div class="flex justify-center align-items-center mt-5 ml-10">
        Students:
        <span class="ml-4"
          ><strong class="text-sky-500">
            {{ studentfollowupStore.students.length }}
          </strong>
        </span>
      </div>

      <div class="flex justify-end">
        <input
          type="text"
          class="m-2 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
        />
        <select
          class="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="WEBA">WEB 2022 A</option>
          <option value="WEBB">WEB 2022 B</option>
          <option value="SNA">SNA 2022</option>
        </select>
      </div>
    </div>

    <!-- ============================ display list all student ========================== -->
    <div
      style="height: 75vh"
      class="m-auto relative z-5 bg-gray-100 sm:rounded-sm overflow-y-scroll"
    >
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 bg-gray-400 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Profile</th>
            <th class="py-3 px-6">ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-2">Class</th>
          </tr>
        </thead>

        <tbody
          v-for="student in studentfollowupStore.students"
          :key="student.id"
        >
          <tr
            v-if="student.status == 1"
            class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700"
          >
            <td>
              <div class="py-4 px-6 text-right">
                <router-link
                  class="flex"
                  :to="{
                    name: 'teacherViewStudentDetail',
                    path: 'teacherViewStudentDetail',
                    params: { id: student.id },
                  }"
                >
                  <img
                    v-if="student.user.profile_img != null"
                    :src="
                      'http://127.0.0.1:8000/storage/images/' +
                      student.user.profile_img
                    "
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />

                  <img
                    v-else-if="student.user.gender == 'female'"
                    src="@/assets/female_logo.jpg"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
                  <img
                    v-else-if="student.user.gender == 'male'"
                    src="@/assets/male_logo.jpg"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
                </router-link>
              </div>
            </td>
            <td class="py-3 px-2">
              <h1 class="">{{ student.studentNumber }}</h1>
            </td>
            <td class="py-3 px-6">
              <h1 class="">
                {{ student.user.first_name }}{{ student.user.last_name }}
              </h1>
            </td>
            <td class="py-3 px-6">
              {{ student.class }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { studentfollowupstore } from "@/store/teacherStore/StudentStore/StudentManagement";
import { onMounted } from "vue";
const studentfollowupStore = studentfollowupstore();
onMounted(() => {
  studentfollowupStore.getStudent();
});
</script>
