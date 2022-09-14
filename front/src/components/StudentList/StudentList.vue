<template>
  <div  class="container text-center w-5/5 h-screen overflow-y-scroll">
    <!-- ====================== Title ==================== -->
    <widget-title>
        <template v-slot>
            Manage Student
        </template>
    </widget-title>
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
      <!-- button -->
      <widget-button @click="storeData.onCreate()">
          <template v-slot >
              Create Student 
          </template>
      </widget-button>
      <!-- pop up create students -->
      <CreateStudent></CreateStudent>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div class="z-0 m-auto relative bg-gray-100 p-5 shadow-md w-11/12 sm:rounded-lg mt-3  h-96 overflow-y-scroll">
      <table class="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th  class="py-3 px-6 ">
                  Profile
              </th>
                <th  class="py-3 px-6 ">
                    ID
                </th>
                <th  class="py-3 px-6 ">
                  Name
                </th>
                <th  class="py-3 px-2">
                    Class
                </th>
                <th  class="py-3 px-3">
                    Email
                </th>
                <th  class="py-3 px-6">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody v-for="student in storeData.students" :key="student" >
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              <td >
                <div class=" py-4 px-6 text-right ">
                  <img src="../../assets/male_logo.jpg" class="w-10 rounded-full m-auto mt-5" alt="">
                </div>
              </td>
                <td  class="py-3 px-2 ">
                    <h1 class="">{{student.studentNumber}} </h1>
                </td>
                <td  class="py-3 px-6 ">
                    <h1 class="">{{student.user.first_name}} {{student.user.last_name}}</h1>
                </td>
                <td class="py-3 px-6 ">
                  {{student.class}}
                </td>
                <td class="py-4 px-5 ">
                  {{student.user.email}}
                </td>
                <td class="py-3 px-2 flex justify-end ">
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
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  </template>
<script setup>
    import CreateStudent from './CreateStudent.vue'
    import {studentstore} from "../../store/index"
    import {onMounted} from "vue"
    const storeData = studentstore()
    onMounted(()=>{
      storeData.getStudent()
    })

</script>
