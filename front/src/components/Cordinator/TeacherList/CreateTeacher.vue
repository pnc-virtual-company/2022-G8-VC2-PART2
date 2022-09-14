<template>
    <div class="">
    <!--  show form pop up to  create teacher   -->
    <div v-if="teacherStore.isTrue" class="">
      <div
        class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form
         @submit.prevent="teacherStore.createTeacher()"
          class="bg-white text-center p-5 w-2/5 m-auto rounded"
        >
          <div class="w-1/4 h-28 rounded-full m-auto">
            <label for="image">
              <img v-if="teacherStore.previewImage != null" :src="teacherStore.previewImage" alt="" class="w-6/6  h-28 rounded-full m-auto"/>
              <img
                v-if="teacherStore.previewImage == null"
                src="@/assets/male_logo.jpg"
                class="w-2/6  h-20 rounded-full m-auto"
                alt=""
              />
            </label>
            <input type="file" @change="teacherStore.uploadImage" hidden id="image"  class="w-4/6 h-28 rounded-full m-auto"/>
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
                type="number"
                class="bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone Numer"
                v-model="teacherStore.phone_number"
              />
            </div>
          </div>
          <button @click="teacherStore.onCancel" class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10" >Cancel</button>
          <button
           
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
  import {teacherstore} from "@/store/TeacherManagement"
  export default {
  data(){
    return{
      teacherStore:teacherstore(),
      id: null,
      first_name: "",
      last_name: "",
      position: "",
      gender: "male",
      email: "",

    }
  },
  mounted(){
    this.teacherStore.getTeacher()
  },
}
</script>
