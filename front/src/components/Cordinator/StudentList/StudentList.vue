<template>
  <div class="container text-center w-full mt-10">
    <!-- ====================== Title ==================== -->
    <!-- <widget-title>
      <template v-slot> Manage Student </template>
    </widget-title> -->
    <div class="m-auto filter items-center flex justify-between px-5 w-12/12 mt-5">
      <div class="flex w-8/12 gap-5 items-center">
        <span class="mr-5"><strong>Student Number: {{storeData.filterByName.length}}</strong></span>
        <!-- ====================== filter on student list ==================== -->
        <input
          v-model="storeData.searchData"
          @keydown.enter="storeData.filterByName()"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Student"
        />
        <select
          v-model="storeData.searchOption"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-3/12 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="name">USER NAME</option>
          <option value="id">STUDENT ID</option>
          <option value="class">CLASS ROOM</option>
        </select>

      </div>
      <!-- button -->
      <widget-button @click="storeData.onCreate()">
        <template v-slot> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-200 font-bold w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <h1 class="text-base text-gray-200"><strong>Create</strong></h1>
        </template>
      </widget-button>
      <!-- pop up create students -->
      <CreateStudent></CreateStudent>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div 
      class="m-auto relative bg-gray-100 shadow-md w-full mt-3 overflow-y-scroll" style="height: 457.4px;"
    >
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-4 px-6 text-base text-slate-500">Profile</th>
            <th class="py-4 px-6 text-base text-slate-500">ID</th>
            <th class="py-4 px-6 text-base text-slate-500">Name</th>
            <th class="py-4 px-6 text-base text-slate-500">Class</th>
            <th class="py-4 px-6 text-base text-slate-500">Status</th>
            <th class="py-4 px-6 text-base text-slate-500"></th>
          </tr>
        </thead>

        <tbody v-for="student in storeData.filterByName" :key="student.id">
          <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700">
            <td class="pb-5 px-2">
              <div class=" text-right" >
                <router-link class="flex" :to="{name:'studentdetail',path:'studentdetail',params:{id:student.id}}">
                  <img v-if="student.user.profile_img != null"
                      :src="'http://127.0.0.1:8000/storage/images/'+student.user.profile_img"
                      class="w-14 h-14 rounded-full m-auto mt-5 image--cover"
                      alt=""
                    />
                    <img v-else-if="student.user.gender == 'female'"
                      src="@/assets/female_logo.jpg"
                      class="w-14 h-14 rounded-full m-auto mt-5"
                      alt=""
                    />
                    <img v-else-if="student.user.gender == 'male'"
                      src="@/assets/male_logo.jpg"
                      class="w-14 h-14 rounded-full m-auto mt-5"
                      alt=""
                    />
                </router-link>
              </div>
            </td>
            <td class="px-2">
              <h1 class="">{{ student.studentNumber }}</h1>
            </td>
            <td class="px-6">
              <h1 class="">
                {{ student.user.first_name }} {{ student.user.last_name }}
              </h1>
            </td>
            <td class="px-6">
              {{ student.class }}
            </td>
            <td class="px-6">
              <!-- <strong><p v-if="student.status==0" class="text-sky-500">OUT FOLLOW UP</p></strong> -->
              <button v-if="student.status==0" type="button" class="text-white bg-yellow-500 cursor-default font-medium rounded-lg text-sm px-2 py-1">Follow Up</button>
              <button v-if="student.status==1" type="button" class="text-white bg-sky-500 cursor-default font-medium rounded-lg text-sm px-2 py-1">None Follow Up</button>
              <!-- <strong><p v-if="student.status==1" style="color:#FFAD5C;">IN FOLLOW UP</p>   </strong> -->
                         
            </td>
            <td class="px-2">
              <!--widget drop down menu  -->
              <widget-DropDown>
                <template #edit>
                  <a class="" href="#"
                    ><StudentEditFormVue
                      :id="student.user.id"
                      class="z-10"
                    ></StudentEditFormVue
                  ></a>
                </template>
                <template #delete><span @click=" storeData.onDeleteStudent(student.user.id)">Delete</span> </template>
                <template #add > <span >Add follow up</span>  </template>
              </widget-DropDown>
              <!-- footer drop down -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import CreateStudent from "./CreateStudent.vue"
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
import StudentEditFormVue from "./EditStudent.vue"
import { onMounted } from "vue";
const storeData = studentstore();
onMounted(() => {
  storeData.getStudent();
});
</script>
<style scoped>
.image--cover {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
