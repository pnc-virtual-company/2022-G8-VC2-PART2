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
      <form class="bg-white text-center p-5 w-2/5 m-auto rounded">
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
           v-model="first_name"
          />
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            v-model="last_name"
          />
        </div>
        <div class="flex mt-3">
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Batch"
            v-model="batch"
          />
          <select
          v-model="gender"
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
            v-model="email"
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
              v-model="phone"
            />
          </div>
        </div>
        <div class="flex mt-3">
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="NGO"
            v-model="ngo"
          />
          <input
            type="text"
            class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Province"
            v-model="province"
          />
        </div>
        <button
          @click="isFalse = false"
          class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10"
        >
          Cancel
        </button>
        <button
          @click="onEdit(6,{first_name:first_name})"
          class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
        >
      </button>
    </form>
  </div>
</div>
Update{{name}}
</template>
<script setup>
import { inject } from "vue";
import { onMounted, computed } from "vue";
import { useStudentStore } from "../../store/edit";
const id = inject("id");
const store = useStudentStore();

const onCreate = computed(() => {
  return store.onCreate;
});
const first_name = computed(() => {
  return store.first_name;
});
const last_name = computed(() => {
  return store.last_name;
});
const batch = computed(() => {
  return store.batch;
});
const phone = computed(() => {
  return store.phone;
});
const province = computed(() => {
  return store.province;
});
const gender = computed(() => {
  return store.gender;
});
const ngo = computed(() => {
  return store.ngo;
});
const email = computed(() => {
  return store.email;
});

const onEdit = computed(() => {
  return store.onEdit;
});
const isTrue = computed(() => {
  return store.isTrue;
});

</script>
