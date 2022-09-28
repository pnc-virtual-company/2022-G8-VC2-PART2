<template>
  <div class="container text-center  ">
    <!--  Pop up of confirm to add student into follow up list  -->
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          v-if="studentfollowupStore.isAssign"
          class="absolute z-10 inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
        >
          <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
              <form action="">
                <!-- ======================= On cancel user assing ====================== -->
                <div class="flex justify-end mb-4">
                  <span @click="studentfollowupStore.isAssign = false" class="text-red">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6  cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>                  


                <h5 class="text-2xl">
                  Choose one Tutor below
                </h5>


                <div>
                  <div v-for="tutor of studentfollowupStore.teachersData" :key="tutor">
                    <div class="items-center justify-left flex ">
                      <input type="radio" name="tutor" :value="tutor.user.id" v-model="studentfollowupStore.tutorId">
                      <img
                          v-if="tutor.user.profile_img != null"
                          :src="
                            'http://127.0.0.1:8000/storage/images/' +
                            tutor.user.profile_img
                          "
                          class="image--cover w-8 h-8 rounded-full m-auto mt-5"
                          alt=""
                        />
                      <img
                          v-else-if="tutor.user.gender == 'female'"
                          src="@/assets/female_logo.jpg"
                          class="w-8 h-8 rounded-full m-auto mt-5"
                          alt=""
                        />
                      <img
                          v-else-if="tutor.user.gender == 'male'"
                          src="@/assets/male_logo.jpg"
                          class="w-8 h-8 rounded-full m-auto mt-5"
                          alt=""
                      />
                      <p>{{tutor.user.first_name}} {{tutor.user.last_name}}</p>
                    </div>

                  </div>
                </div>
                <div class="mt-10 flex justify-evenly">
                  <button
                    @click.prevent="studentfollowupStore.assignTutor()"
                    class="px-6 py-2 ml-2 text-blue-100 bg-sky-500 rounded"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====================== filter on student list ==================== -->
    <div class="m-auto filter flex justify-between items-center w-12/12 mt-5">
      <div class="w-6/12 ">
        <select name="" id="" class=" ml-4 bg-sky-500 p-2 rounded text-base outline-none text-white">
          <option value="all followup">All Follow Up</option>
          <option value="followup with tutor">Follow up with totur</option>
          <option value="followup no tutor">Follow up no totur</option>
        </select>
      </div>
      <div class="flex justify-around items-center">
        <input
          type="text"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
        />
        <select
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="WEBA">WEB 2022 A</option>
          <option value="WEBB">WEB 2022 B</option>
          <option value="SNA">SNA 2022</option>
        </select>
      </div>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div
      style="height: 75vh "
      class="m-auto relative z-5 mt-3 bg-gray-100 sm:rounded-sm overflow-y-scroll"
    >
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 bg-gray-400 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Profile</th>
            <th class="py-3 px-6">ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-2">Class</th>
            <th class="py-3 px-2">Assign Tutor</th>
          </tr>
        </thead>
        <tbody v-for="student in studentfollowupStore.filterByName" :key="student.id">
          <tr
            v-if="student.status == 1"
            class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700"
          >
            <td>
              <div class="py-4 px-6 text-right">
                <router-link
                  class="flex"
                  :to="{
                    name: 'manageStudentDetailVue',
                    path: 'manageStudentDetailVue',
                    params: { id: student.id },
                  }"
                >
                  <img
                    v-if="student.user.profile_img != null"
                    :src="'http://127.0.0.1:8000/storage/images/' +student.user.profile_img
                    "
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />

                  <img
                    v-else-if="student.user.gender == 'female'"
                    src="@/assets/female_logo.jpg"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
                  <img
                    v-else-if="student.user.gender == 'male'"
                    src="@/assets/male_logo.jpg"
                    class="w-12 h-12 rounded-full m-auto mt-5"
                    alt=""
                  />
                </router-link>
              </div>
            </td>
            <td class="py-3 px-2">
              <h1 class="">{{ student.studentNumber }}</h1>
            </td>
            <td class="py-3 px-6">
              <h1 class="font-bold">
                {{ student.user.first_name }} {{ student.user.last_name }}
              </h1>
            </td>
            <td class="py-3 px-6">
              {{ student.class }}
            </td>
            <td class="py-3 px-6">
              <button @click="studentfollowupStore.getTeachers(student.user.id)" class="bg-sky-500 rounded text-white px-5 py-2">Assign</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { studentfollowupstore } from "@/store/teacherStore/StudentStore/StudentManagement";
import { onMounted } from "vue";
const studentfollowupStore = studentfollowupstore();
onMounted(() => {
  studentfollowupStore.getStudent();
});
</script>
<style scoped>
  .image--cover {
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  </style>
