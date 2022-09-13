<template>
  <div  class="container text-center w-5/5 h-screen overflow-y-scroll">
    <!-- ====================== Title ==================== -->
    <template >
        
    </template>
    
    <!-- ====================== filter on student list ==================== -->
    <div class="m-auto filter flex justify-around w-9/12 mt-5">
      <input
        type="text"
        class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Name"
      />
      <select
        class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Class</option>
        <option value="WEBA">WEB 2022 A</option>
        <option value="WEBB">WEB 2022 B</option>
        <option value="SNA">SNA 2022</option>
      </select>
      <button
        @click="studentStore.onCreate()"
        class="mt-2 bg-sky-500 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        Create Student
      </button>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div class="card  m-auto bg-gray-100  mt-5 p-4 rounded w-9/12"  >
      <div v-for="student in studentStore.students" :key="student"  class=" mb-2 flex justify-between items-center shadow p-3 rounded-lg bg-white" >
        <div class="flex items-center ">
          <img src="../../assets/male_logo.jpg" class="w-10 rounded-full m-auto mt-5" alt="">
          <h1 class="ml-2">{{student.user.first_name}} {{student.user.last_name}}</h1>
        </div>
        <div class="">
          <h1>{{student.batch}}</h1>
        </div>
        <div class="">
          <svg
            class="w-6 h-6"
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
        </div>
      </div>
    </div>
  </div>

  <!-- pop up create student -->
  <div v-if="studentStore.isTrue" class="">  
      <div class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <form  class="bg-white text-center p-5 w-2/5 m-auto rounded">
           <div  class="w-1/4  rounded-full m-auto">
            <label for="image">
              <img v-if="studentStore.previewImage != null" :src="studentStore.previewImage"  class="w-6/6 h-28 rounded-full m-auto" alt="">
              <img v-if="studentStore.previewImage == null" src="../../assets/male_logo.jpg" class="w-6/6 rounded-full m-auto" alt="" />
            </label>
            <input type="file" @change="studentStore.uploadImage" hidden id="image">
           </div>
          <div class="flex mt-3 ">
            <input v-model="studentStore.first_name" type="text" class=" m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name">
            <input v-model="studentStore.last_name"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name">
          </div>
          <div class="flex mt-3">
            <input v-model="studentStore.batch"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Batch">
            <select v-model="studentStore.gender"  id="countries" class=" m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="flex mt-3">
            <input v-model="studentStore.email"  type="email" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
            <div class="flex w-full m-1">
              <span class="inline-flex items-center px-2  text-sm text-gray-900  rounded-l border bg-sky-500">+855</span>
              <input v-model="studentStore.phone"  type="number" class=" bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Numer">
            </div>
          </div>
          <div class="flex mt-3">
            <input v-model="studentStore.ngo"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NGO">
            <input v-model="studentStore.province"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Province">
          </div>
          <div class="flex mt-3">
            <input v-model="studentStore.class"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="class">
            <input v-model="studentStore.studentNumber"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="student ID">
          </div>
          <button @click="isTrue = false" class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10" >Cancel</button>
          <button @click="studentStore.createStudent()" class=" p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5" >Create</button>
        </form>
      </div>
    </div>
  </template>
<script >
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
