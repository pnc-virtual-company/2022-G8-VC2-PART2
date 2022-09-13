<template>
    <div class="">
        <!--   Button to create new teacher   -->
    <button
          @click="isTrue = 'true'"
          class="mt-2 bg-sky-500 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Create Teacher
        </button>
    <!--  show form pop up to  create teacher   -->
    <div v-if="isTrue" class="">
      <div
        class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form
          @submit="createTeacher()"
          class="bg-white text-center p-5 w-2/5 m-auto rounded"
        >
          <div class="">
            <label for="image">
              <img v-if="previewImage != null" :src="previewImage" alt="" />
              <img
                v-if="previewImage == null"
                src="../../assets/male_logo.jpg"
                class="w-2/6 rounded-full m-auto"
                alt=""
              />
            </label>
            <input type="file" @change="uploadImage" hidden id="image" />
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
              placeholder="Position"
              v-model="position"
            />
            <select
              id="gender"
              v-model="gender"
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
                v-model="phone_number"
              />
            </div>
          </div>
          <button
            type="submit"
            class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    
</template>
<script setup>
    import { inject } from "vue";
    import { onMounted, computed } from "vue";
    import { useTeacherStore } from "../../store/editTeacher";
    const id = inject("id");
    const store = useTeacherStore();
    
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
    onMounted(() => {
      store.fetchTeacher(id);
    });
    </script>
    