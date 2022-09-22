<template>
  <section  >
    <div >

      <div 
        style="margin-left:15%"
        class="flex     absolute  inset-0 items-center justify-center "
      >
  
      <widget-ResetPasswordVue>
        <template #oldPassword>
          
          <div class="  ">
            <input
              type="password"
              name="password"
              placeholder="old password"
              class="bg-gray-50 f border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 outline-none   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              v-model="resCoordinatoreStore.oldPassword"
            />
  
          </div>
        </template>
        <template #newPassword>
          <div class="  ">
  
            <input
              type="password"
              name="password"
              placeholder="new password"
              class="bg-gray-50 border outline-none   border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              v-model="resCoordinatoreStore.newPassword"
            />
          </div>
        </template>
        <template #confirmedPassword>
      <div class=" ">
        
        <input
          type="password"
          name="password"
          placeholder="confirm password"
          class="bg-gray-50 border outline-none   border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
          v-model="resCoordinatoreStore.confirmPassword"
        />
      </div >
        </template>
        <template #submit>
          <button @click="resCoordinatoreStore.changePassword"
            class="px-2 text-white m-1 mt-3 py-2.5 bg-sky-500 font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          >
            Save
          </button>
        </template>
        <template #cencel>
          <button @click="resCoordinatoreStore.clear"
            class="px-2 text-white m-1 mt-3 py-2.5 bg-sky-500 font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          >
            clear
          </button>
        </template>
      </widget-ResetPasswordVue>
    </div>
    <span  class="ml-3 w-25 flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
      
      <strong >Reset Password</strong>
    </span>
    </div>
</section >

</template>
<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator"
const resCoordinatoreStore = userStore()
</script>
