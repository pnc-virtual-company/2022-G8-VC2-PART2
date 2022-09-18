<template>
  <div  v-if="storeData.isTrue" class="z-10">  
      <div class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <form @submit.prevent="storeData.createStudent"  class="bg-white text-center p-5 w-2/5 m-auto rounded">
           <div  class="w-1/4  rounded-full m-auto">
            <label for="image">
              <img v-if="storeData.previewImage != null" :src="storeData.previewImage"  class="w-6/6 h-28 rounded-full m-auto" alt="">
              <img v-if="storeData.previewImage == null" src="../../../assets/male_logo.jpg" class="w-6/6 rounded-full m-auto" alt="" />
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
          <select v-model="storeData.class" class=" m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option selected value="web a"> WEB {{storeData.batch}} A</option>
              <option value="web b">WEB B</option>
              <option value="sna">SNA</option>
            </select>
            <input v-model="storeData.studentNumber"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="student ID">
          </div>
          <button @click="storeData.onCancel" class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10" >Cancel</button>
          <button  class=" p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10">Create</button>
        </form>
      </div>
    </div>




  <!--  Pop up of confirm to delete  -->
  <div v-if="storeData.deleteStudent" class="container mx-auto z-20">
    <div class="flex justify-center">
      <div
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Are you sure to delete?</h3>
          </div>
          <div class="mt-10 flex justify-evenly">
            <button
              @click="storeData.deleteStudent = false"
              class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
            >
              No
            </button>
            <button
              @click="
                storeData.onDeleteStudent(storeData.deleteStudentId),
                  (storeData.deleteStudent = false)
              "
              class="px-6 py-2 ml-2 text-blue-100 bg-sky-500 rounded"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end pop up -->
</template>

<script setup>
import { studentstore } from "../../../store/index";
const storeData = studentstore();
</script>