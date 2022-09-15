<template>
  <div class="container text-center w-5/5 h-screen overflow-y-scroll">
    <!-- ====================== Title ==================== -->
    <widget-title>
      <template v-slot> Manage Student </template>
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
        <template v-slot> 
            <h1 class=" text-lg">Create</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </template>
      </widget-button>
      <!-- pop up create students -->
      <CreateStudent></CreateStudent>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div 
      v-if="storeData.isClcik"
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
            <th class="py-3 px-6">ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-2">Class</th>
            <th class="py-3 px-3">Email</th>
            <th class="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody v-for="student in storeData.students" :key="student.id">
          <tr @click="storeData.studentDetail(student.id)" class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700">
            <td>
              <div class="py-4 px-6 text-right">
                  <img v-if="student.user.profile_img != null"
                    :src="'http://127.0.0.1:8000/storage/images/'+student.user.profile_img"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
                  <img v-else-if="student.user.gender == 'female'"
                    src="@/assets/female_logo.jpg"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
                  <img v-else-if="student.user.gender == 'male'"
                    src="@/assets/male_logo.jpg"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
              </div>
            </td>
            <td class="py-3 px-2">
              <h1 class="">{{ student.studentNumber }}</h1>
            </td>
            <td class="py-3 px-6">
              <h1 class="">
                {{ student.user.first_name }} {{ student.user.last_name }}
              </h1>
            </td>
            <td class="py-3 px-6">
              {{ student.class }}
            </td>
            <td class="py-4 px-5">
              {{ student.user.email }}
            </td>
            <td class="py-3 px-2">
              <!--widget drop down menu  -->
              <widget-DropDown>
                <template #edit>
                  <a class="" href="#"
                    ><StudentFormVue
                      :id="student.user.id"
                      class="z-10"
                    ></StudentFormVue
                  ></a>
                </template>
                <template #delete ><span @click=" storeData.onDeleteStudent(student.user.id)">Delete</span> </template>
                <template #add > <span >Add follow up</span>  </template>
              </widget-DropDown>
              <!-- footer drop down -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- pop up delete -->
    <div class="w-1/2 border-t-4 border-l-4 border-r-4 border-b-4">
      <!-- <div class="flex justify-center">
        <img 
        src="../../assets/ques.jpg"
        class="flex justify-Content object-cover h-32 w-32  ...">
       </div> -->
      <p class="text-center font-bold text-xl">Are you sure?</p>
      <div class="flex justify-around mb-4">
        <button @click="store.dialogDelete = false" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">cancel</button>
        <button  @click="storeData.onDeleteStudent" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">DELETE</button>
      </div>
  </div>
  </div>
  <StudentDetail></StudentDetail>
</template>
<script setup>
import StudentDetail from "./StudentDetail.vue"
import StudentFormVue from "./EditStudent.vue"
import CreateStudent from "./CreateStudent.vue"
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
import { onMounted } from "vue";
const storeData = studentstore();
onMounted(() => {
  storeData.getStudent();
});
</script>
