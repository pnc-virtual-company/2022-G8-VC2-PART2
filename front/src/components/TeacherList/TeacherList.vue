<template>
  <div>
    <div class="container text-center">
      <div class="w-11/12 m-auto mt-5">
        <h1 class="bg-sky-500 text-white font-bold text-2xl p-5 m-2 rounded-lg">
          Manage Teacher
        </h1>
      </div>
      <div class="m-auto filter flex justify-around w-11/12 mt-5">
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
      <div class="card m-auto bg-gray-100 mt-5 p-4 rounded w-11/12">
        <table class="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th  class="py-3 px-6 ">
                  Profile
              </th>
                <th  class="py-3 px-6 ">
                    ID
                </th>
                <th  class="py-3 px-6 ">
                  Name
                </th>
                <th  class="py-3 px-2">
                    Position
                </th>
                <th  class="py-3 px-3">
                    Email
                </th>
                <th  class="py-3 px-6">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody v-for="teacher of teacherStore.teachers"
          :key="teacher" >
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              <td >
                <div class=" py-4 px-6 text-right ">
                  <img src="../../assets/male_logo.jpg" class="w-10 rounded-full m-auto mt-5" alt="">
                </div>
              </td>
                <td  class="py-3 px-2 ">
                    <h1 class="">{{teacher.id}} </h1>
                </td>
                <td  class="py-3 px-6 ">
                    <h1 class="">{{teacher.user.first_name}} {{teacher.user.last_name}}</h1>
                </td>
                <td class="py-3 px-6 ">
                  {{teacher.position}}
                </td>
                <td class="py-4 px-5 ">
                  {{teacher.user.email}}
                </td>
                <td class="py-3 px-2 flex justify-end ">
                    <svg
                      class="w-6 h-6 mt-4"
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
                </td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
    <!--  show form pop up to  create teacher   -->
    <div v-if="teacherStore.isTrue" class="">
      <div
        class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form
          @submit="teacherStore.createTeacher()"
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
          <button @click="teacherStore.onCancel" class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10" >Cancel</button>
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