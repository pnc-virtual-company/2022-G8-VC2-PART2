<template>
    <div class="container text-center w-5/5 h-screen overflow-y-scroll">
      <!-- ====================== Title ==================== -->
      <!-- <widget-title>
        <template v-slot> Follow up History </template>
      </widget-title> -->
      <!-- ====================== filter on student list ==================== -->
      <div class="m-auto filter flex justify-around w-12/12 mt-5">
        <input
          type="text"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
        />
        <select
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="WEBA">WEB 2022 A</option>
          <option value="WEBB">WEB 2022 B</option>
          <option value="SNA">SNA 2022</option>
        </select>
      </div>
    </div>

    <!-- ====================== filter on student list ==================== -->
    <div class="m-auto filter flex justify-around w-11/12 mt-5">
      <input
        type="text"
        class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Name"
      />
      <select
        class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected value="WEBA">WEB 2022 A</option>
        <option value="WEBB">WEB 2022 B</option>
        <option value="SNA">SNA 2022</option>
      </select>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div
      class="m-auto relative bg-gray-100 p-5 shadow-md w-11/11  mt-3 h-screen overflow-y-scroll"
    >
        <table
          class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="py-3 px-6">Profile</th>
              <th class="py-3 px-6">ID</th>
              <th class="py-3 px-6">Name</th>
              <!-- <th class="py-3 px-2">Class</th> -->
              <th class="py-3 px-2">Date</th>
            </tr>
          </thead>
  
          <tbody v-for="(student, index) in storeData.dataHistory" :key="[student, index]">
            <tr
              class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700"
            >
              <td>
                <div class="py-4 px-6 text-right">
                  <router-link
                    class="flex"
                    :to="{
                      name: 'teacherViewStudentDetail',
                      path: 'teacherViewStudentDetail',
                      params:{id:student[1].id}
                    }"
                  >
                    <img
                      v-if="student[1].profile_img != null"
                      :src="
                        'http://127.0.0.1:8000/storage/images/' +
                        student[1].profile_img
                      "
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
  
                    <img
                      v-else-if="student[1].gender == 'female'"
                      src="@/assets/female_logo.jpg"
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                    <img
                      v-else-if="student[1].gender == 'male'"
                      src="@/assets/male_logo.jpg"
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                  </router-link>
                </div>
              </td>
              <td class="py-3 px-6">
                <h1 class="">
                  {{ student[1].id }}
                </h1>
              </td>
              <td class="py-3 px-6">
                {{ student.first_name}} {{student.last_name}}
              </td>
              <td class="py-3 px-6">
                {{ student.created_at}}
              </td>
              <!-- <td class="py-3 px-6">
                <div>
                  <div class="relative">

                    <button
                      @click.prevent="storeData.isOpen(student[index])"
                      class="flex items-center p-2 text-black-100"
                    >
                      <svg
                        class="w-6 h-6 mt-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
    </div>
    <!-- </div> -->
  </template>
  <script setup>
  import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement";
  import { onMounted } from "vue";
  const storeData = studentstore();
  onMounted(() => {
    storeData.getHistoryData();
  });
  </script>