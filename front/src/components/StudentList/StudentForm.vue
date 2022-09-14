<template>
  <button
    @click="onCreate"
    class="mt-2 bg-sky-500 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    Create Student
  </button>
  <!-- pop up create student -->
  <div v-if="isTrue" class="">
    <div
      class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <form @submit.prevent="store.onEdit(5)" class="bg-white text-center p-5 w-2/5 m-auto rounded">
        <div class="">
          <img
            src="../../assets/male_logo.jpg"
            class="w-2/6 rounded-full m-auto"
            alt=""
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
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Batch"
            v-model="store.batch"
          />
          <select
          v-model="store.gender"
            id="countries"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
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
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Class"
            v-model="store.class"
          />
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Student ID"
            v-model="store.studentId"
          />
        </div>
       
        <button
          @click="store.onCancel"
          class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10"
        >
          Cancel
        </button>
        <button
          class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
        >
        UPDATE
      </button>
    </form>
  </div>
</div>
</template>
<script setup>
import { computed } from "vue";
import { useStudentStore } from "../../store/edit";
const store = useStudentStore();
const onCreate = store.onCreate;
const isTrue = computed(() => {
  return store.isTrue;
});
</script>
