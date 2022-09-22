<template>
    
    <div  v-if="storeData.isTrue" class="z-10">  
      <div class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <form @submit.prevent="storeData.createStudent"  class="bg-white text-center p-5 w-2/5 m-auto rounded">
          <!-- ==================== User on action cancel ==================== -->
          <div class="flex justify-end">
            <span @click="storeData.onCancel" class="text-red cursor-pointer hover:bg-red-500 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>

          <div  class="w-28 h-28 rounded-full m-auto object cursor-pointer">
            <label for="image" class="w-28 h-28 rounded-full m-auto object cursor-pointer">
              <img v-if="storeData.previewImage != null" :src="storeData.previewImage"  class="w-28 h-28 rounded-full m-auto object image--cover" alt="">
              <img v-if="storeData.previewImage == null" src="../../../assets/male_logo.jpg" class="w-28 h-28 rounded-full m-auto" alt="" />
            </label>
            <input type="file" @change="storeData.uploadImage" hidden id="image">
           </div>
           <!-- user first name and last name -->
          <div class="flex mt-3">
            <input v-if="storeData.no_firstname" v-model="storeData.first_name" type="text" class="  m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name">
            <input v-else v-model="storeData.first_name" type="text" class="  m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name">
            <input v-if="storeData.no_lastname" v-model="storeData.last_name"  type="text" class="m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name">
            <input v-else v-model="storeData.last_name"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name">
          </div>
          <!-- user batch and gender -->
          <div class="flex mt-3">
            <input v-if="storeData.no_batch" v-model="storeData.batch"  type="number" class="m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Batch">
            <input v-else v-model="storeData.batch"  type="number" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Batch">
            <select v-if="storeData.no_gender" v-model="storeData.gender"  id="countries" class=" m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select v-else v-model="storeData.gender"  id="countries" class=" m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <!-- user email and phone number -->
          <div class="flex mt-3">
            <input v-if="storeData.no_email || storeData.uniqueEmail" v-model="storeData.email"  type="email" class="m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
            <input v-else v-model="storeData.email"  type="email" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
            <div class="flex w-full m-1 ">
              <span class="inline-flex items-center px-2  text-sm text-gray-900  rounded-l border bg-sky-500">+855</span>
              <input v-if="storeData.no_phone" v-model="storeData.phone"  type="number" class=" bg-red-50 border border-red-500 rounded-r text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Numer">
              <input v-else v-model="storeData.phone"  type="number" class=" bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Numer">
            </div>
          </div>
          <!-- user nog and province -->
          <div class="flex mt-3">
            <input v-if="storeData.no_ngo" v-model="storeData.ngo"  type="text" class="m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NGO">
            <input v-else v-model="storeData.ngo"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NGO">
            <input v-if="storeData.no_province" v-model="storeData.province"  type="text" class="m-1 bg-red-50 border border-red-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Province">
            <input v-else v-model="storeData.province"  type="text" class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Province">
          </div>
          <!-- user class and id -->
          <div class="flex mt-3">
            <select
            v-else
            v-model="storeData.class"
            class="
              m-1
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
          >
            <option selected value="webb">sellect class</option>
            <option selected :value="'WEB '+storeData.batch+' A'">WEB {{ storeData.batch }} A</option>
            <option :value="'WEB '+storeData.batch+' B'">WEB{{ storeData.batch }} B</option>
            <option :value="'SNA '+storeData.batch">SNA {{ storeData.batch }}</option>
          </select>
          </div>
          <button  class=" p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10">Create</button>
        </form>
      </div>
    </div>
</template>

<script setup>
    import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
    const storeData = studentstore()
</script>
<style scoped>
.image--cover {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
