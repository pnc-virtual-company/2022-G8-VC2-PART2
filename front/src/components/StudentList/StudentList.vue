<template>
  <div class="container text-center ">
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
    </div>
    <!-- ============================ display list all student ========================== -->
    <div class=" m-auto relative bg-gray-100 p-5 shadow-md w-11/12 sm:rounded-lg mt-3  h-screen overflow-y-scroll">
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

  <!-- pop up create student -->
  <div  v-if="storeData.isTrue" class="">  
      <div class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <form @submit.prevent="storeData.createStudent"  class="bg-white text-center p-5 w-2/5 m-auto rounded">
           <div  class="w-1/4  rounded-full m-auto">
            <label for="image">
              <img v-if="storeData.previewImage != null" :src="storeData.previewImage"  class="w-6/6 h-28 rounded-full m-auto" alt="">
              <img v-if="storeData.previewImage == null" src="../../assets/male_logo.jpg" class="w-6/6 rounded-full m-auto" alt="" />
            </label>
            <input type="file" @change="storeData.uploadImage" hidden id="image">
           </div>
          <div class="flex mt-3 ">
            <input v-model="storeData.first_name" type="text" class=" m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name">
            <input v-model="storeData.last_name"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name">
          </div>
          <div class="flex mt-3">
            <input v-model="storeData.batch"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Batch">
            <select v-model="storeData.gender"  id="countries" class=" m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="flex mt-3">
            <input v-model="storeData.email"  type="email" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
            <div class="flex w-full m-1">
              <span class="inline-flex items-center px-2  text-sm text-gray-900  rounded-l border bg-sky-500">+855</span>
              <input v-model="storeData.phone"  type="number" class=" bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Numer">
            </div>
          </div>
          <div class="flex mt-3">
            <input v-model="storeData.ngo"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NGO">
            <input v-model="storeData.province"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Province">
          </div>
          <div class="flex mt-3">
            <input v-model="storeData.class"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="class">
            <input v-model="storeData.studentNumber"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="student ID">
          </div>
          <button @click="storeData.onCancel" class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10" >Cancel</button>
          <button  class=" p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5" >Create</button>
        </form>
      </div>
    </div>
<<<<<<< HEAD
  </template>
<script>

    import {studentstore} from "../../store/index"
    export default {

    data(){
      return{
        studentStore:studentstore(),
         firstname:"",
         lastname:"",
         batch:"",
         gender:"male",
         email:"",
         phone:"",
         ngo:"",
         province:"",
      }
    },
    mounted(){
      this.studentStore.getStudent()
    },
  }
</script>
=======
>>>>>>> bc8a48c6c1690badb937e6f7eb899544ac548b2e

  </template>
<script setup>
    import {studentstore} from "../../store/index"
    import {onMounted} from "vue"
    const storeData = studentstore()
    onMounted(()=>{
      storeData.getStudent()
    })
</script>
