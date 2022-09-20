<template>
  <section class=" ">
    <div
     v-if="resCoordinatoreStore.isTrue"
      class="flex flex-row mb-50 absolute pin-t pin-b pin-r p-4 mt-[-12] fixed w-full h-full inset-0 items-center justify-center bg-gray-700 bg-opacity-50"
    >

    <widget-ResetPasswordVue>
      <template #oldPassword>
        <input
          type="password"
          name="password"
          placeholder="old password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
          v-model="resCoordinatoreStore.oldPassword"
        />
      </template>
      <template #newPassword>
        <input
          type="password"
          name="password"
          placeholder="new password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
          v-model="resCoordinatoreStore.newPassword"
        />
      </template>
      <template #confirmedPassword>
        <input
          type="password"
          name="password"
          placeholder="confirm password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
          v-model="resCoordinatoreStore.confirmPassword"
        />
      </template>
      <template #submit>
        <button @click="resCoordinatoreStore.ressetPassword"
          class="px-2 text-white m-1 mt-3 py-2.5 bg-sky-500 font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
        >
          Save
        </button>
      </template>
      <template #cencel>
        <button @click="resCoordinatoreStore.onCancel"
          class="px-2 text-white m-1 mt-3 py-2.5 bg-sky-500 font-medium text-xs leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
        >
          Cencel
        </button>
      </template>
    </widget-ResetPasswordVue>
  </div>
  <span  class="ml-3 w-25">
    <button @click="resCoordinatoreStore.onResset">Reset Password</button>
  </span>
</section >
</template>
<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator"
const resCoordinatoreStore = userStore()
</script>
