<template>
<div>
  <!-- button click on update student -->
  <button @click="store.getDAta(id), show=false" class="flex cursor-pointer">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          color="blue"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </span>
    EDIT
  </button>

  <!-- form pop up create student -->
  <div v-if="store.isEdit" class="">
    <div
      class=" mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 "
    >
    <!-- on edit form -->
      <form
        @submit.prevent="store.onEditStudent"
        class="cursor-default bg-white text-center pl-5 pr-5 pt-4 pb-3 w-2/5  rounded m-5"
      >
      <div class="flex justify-end">
        <span
        @click="store.onCancel"
        class="text-red"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:bg-red-500 hover:text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </span>
      </div>
        <div class="w-28 h-28 rounded-full m-auto">
            <label for="image" class="w-28 h-28 rounded-full m-auto cursor-pointer">
              <img
                v-if="
                  store.user_profile !== null &&
                  store.previewImage == null
                "
                :src="
                  'http://127.0.0.1:8000/storage/images/' +
                  store.profile_img
                "
                class="image--cover w-28 h-28 rounded-full m-auto mt-5"
                alt=""
              />
              <img
                v-else-if="
                  store.gender == 'female' &&
                  store.previewImage == null
                "
                src="@/assets/female_logo.jpg"
                class="w-28 h-28 rounded-full m-auto mt-5"
                alt=""
              />
              <img
                v-else-if="
                  store.gender == 'male' &&
                  store.previewImage == null
                "
                src="@/assets/male_logo.jpg"
                class="w-28 h-28 rounded-full m-auto mt-5"
                alt=""
              />
              <img
                v-else-if="store.previewImage !== null"
                :src="store.previewImage"
                alt=""
                class="image--cover w-28 h-28 rounded-full m-auto"
              />
            </label>
            <input
              type="file"
              @change="store.uploadImage"
              hidden
              id="image"
              class="w-28 h-28 rounded-full m-auto"
            />
        </div>
        <div class="flex mt-3">
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            v-model="store.first_name"
          />
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            v-model="store.last_name"
          />
        </div>
        <div class="flex mt-3">
          <input
            type="number"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Batch"
            v-model="store.batch"
          />
          <select
            v-model="store.gender"
            id="countries"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="flex mt-3">
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            v-model="store.email"
          />
          <div class="flex w-full m-1">
            <span
              class="inline-flex items-center px-2 text-sm text-gray-900 rounded-l border bg-sky-500"
              >+855</span
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone Numer"
              v-model="store.phone"
            />
          </div>
        </div>
        <div class="flex mt-3">
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="NGO"
            v-model="store.ngo"
          />
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Province"
            v-model="store.province"
          />
        </div>
        <div class="flex mt-3">
          <select
            v-model="store.class"
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
            <option selected :value="'WEB '+store.batch+' A'">WEB {{ store.batch }} A</option>
            <option :value="'WEB '+store.batch+' B'">WEB{{ store.batch }} B</option>
            <option :value="'SNA '+store.batch">SNA {{ store.batch }}</option>
          </select>
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Student ID"
            v-model="store.studentNumber"
          />
        </div>
        <!-- buton click update -->
        <button
          class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
        >
          UPDATE
        </button>
      </form>
    </div>
  </div>
</div>
</template>
<script setup>
import {  defineProps } from "vue";
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
const store = studentstore();
defineProps({
  id: null,
});
</script>
<style scoped>
.image--cover {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
 
