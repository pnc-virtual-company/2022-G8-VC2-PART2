<template>
  <div>
    <div class="container text-center w-5/5">
      <div class="w-9/12 m-auto mt-5">
        <h1 class="bg-sky-500 text-white font-bold text-2xl p-5 m-2 rounded-lg">
          Manage Teacher
        </h1>
      </div>
      <div class="m-auto filter flex justify-around w-9/12 mt-5">
        <input
          type="text"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
        />
        <select
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Position</option>
          <option value="US">WEB Trainer</option>
          <option value="CA">SNA Trainer</option>
          <option value="FR">English Trainer</option>
        </select>
        <!--   Button to create new teacher   -->
        <button
          @click="teacherStore.onCreate()"
          class="mt-2 bg-sky-500 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Create Teacher
        </button>
      </div>
      <!--  display each card of teacher's list   -->
      <div class="card m-auto bg-gray-100 mt-5 p-4 rounded w-9/12">
        <div
          v-for="teacher of teacherStore.teachers"
          :key="teacher"
          class="flex justify-between items-center shadow p-3 mb-2 rounded-lg bg-white"
        >
          <div class="flex items-center">
            <img
              src="../../assets/male_logo.jpg"
              class="w-10 rounded-full m-auto mt-5"
              alt=""
            />
            <h1 class="ml-2">
              {{ teacher.user.first_name }} {{ teacher.user.last_name }}
            </h1>
          </div>
          <div class="">
            <h1>{{ teacher.position }}</h1>
          </div>
          <div class="" @click="dropdownEditDelete(teacher.id)">
            <!--  show dropdown of edit and delete  -->
            <div>
              <div class="relative">
                <div
                  v-show="show && id == teacher.id"
                  class="absolute right-0 py-2 mt-5 bg-black rounded-md shadow-xl w-44"
                >
                  <router-link
                    to="/"
                    class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
                  >
                    Edit
                  </router-link>
                  <div
                    @click="deleteTeacher(teacher.id)"
                    class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
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
    <!--  show form pop up to  create teacher   -->
    <div v-if="teacherStore.isTrue" class="">
      <div
        class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form
          @submit="createTeacher()"
          class="bg-white text-center p-5 w-2/5 m-auto rounded"
        >
          <div class="">
            <label for="image">
              <img v-if="teacherStore.previewImage != null" :src="teacherStore.previewImage" alt="" />
              <img
                v-if="teacherStore.previewImage == null"
                src="../../assets/male_logo.jpg"
                class="w-2/6 rounded-full m-auto"
                alt=""
              />
            </label>
            <input type="file" @change="teacherStore.uploadImage" hidden id="image" />
          </div>
          <div class="flex mt-3">
            <input
              type="text"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First Name"
              v-model="teacherStore.first_name"
            />
            <input
              type="text"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last Name"
              v-model="teacherStore.last_name"
            />
          </div>
          <div class="flex mt-3">
            <input
              type="text"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Position"
              v-model="teacherStore.position"
            />
            <select
              id="gender"
              v-model="teacherStore.gender"
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
              v-model="teacherStore.email"
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
                v-model="teacherStore.phone_number"
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

<script >
  import {teacherstore} from "../../store/createTeacher"
  export default {

  data(){
    return{
      teacherStore:teacherstore(),
      id: null,
        // teachers: [],
        // show: false,
        // isTrue: false,
        // isShow: false,
        first_name: "",
        last_name: "",
        position: "",
        gender: "male",
        email: "",
        // password: 12345678,
        // profile_img: "",
        // previewImage: null,
    }
  },
  mounted(){
    this.teacherStore.getTeacher()
  },
}
</script>