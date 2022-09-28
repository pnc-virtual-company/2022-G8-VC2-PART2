<template>
  <div class="container text-center  ">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          v-if="studentfollowupStore.isAddFollowup"
          class="absolute z-10 inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
        >
          <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
              <form action="">
                <h5 class="text-2xl">
                  Do you want to add them to Follow up Student?
                </h5>
                <input

                  class="mt-5 p-5 text-lg"
                  required
                  type="text"
                  placeholder="leave a comment  ..."
                />
                <div class="mt-10 flex justify-evenly">
                  <button
                    @click="studentfollowupStore.isAddFollowup = false"
                    class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    @click.prevent="studentfollowupStore.addToFollowup()"
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
    <div class="flex ml-10 mt-5"> <i class="fa-solid fa-user fa-2x"></i><span class="text-1xl mt-3 ml-2 font-bold ">STUDENTS LIST</span> </div>
    <div class="flex justify-between">
      <div class="flex justify-center  align-items-center mt-9 ml-10 ">
        Students: <span class="ml-4"><strong class="text-sky-500"> {{studentfollowupStore.students.length}} </strong> </span>
      </div>
      <div class=" flex ">
        <input
        
          v-model="studentfollowupStore.searchByName"
          @keydown.enter="studentfollowupStore.filterByName()"      
        type="text"
        class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Student"
      />
        <select
          class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  m-4 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="WEBA">WEB 2022 A</option>
          <option value="WEBB">WEB 2022 B</option>
          <option value="SNA">SNA 2022</option>
        </select>
      </div>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div style="height:75vh"
      class="m-auto relative z-5  bg-gray-100  sm:rounded-sm   overflow-y-scroll"
    >
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700  bg-gray-300 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Profile</th>
            <th class="py-3 px-6">ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-2">Class</th>
            <th class="py-3 px-3">Status</th>
            <th class="py-3 px-6">Actions</th>
          </tr>
        </thead>

        <tbody v-for="student in studentfollowupStore.filterByName" :key="student.id">
          <tr
            class="bg-gray-50 border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700"
          >
            <td>
              <div class=" px-6 text-right">
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
                    :src="
                      'http://127.0.0.1:8000/storage/images/' +
                      student.user.profile_img
                    "
                    class="image--cover"
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
            <td class=" px-2 ">
              <h1 class="">{{ student.studentNumber }}</h1>
            </td>
            <td class=" px-6">
              <h1 class="">
                {{ student.user.first_name }}{{ student.user.last_name }}
              </h1>
            </td>
            <td class=" px-6">
              {{ student.class }}
            </td>
            <td class="px-6">
              <div v-if="student.status ==1" class="text-white bg-yellow-500 cursor-default font-medium rounded-lg text-sm px-2 py-1 w-20 ">follow up</div>
              <div v-if="student.status==0"   class="text-white bg-sky-500 cursor-default font-medium rounded-lg text-sm px-2 py-1 w-32">None Follow Up</div>

            </td>
            <td class=" px-2">
              <!--widget drop down menu  -->
              <widget-DropDown>
                <template #edit>
                  <a class="" href="#"
                    ><StudentEditFormVue
                      :id="student.user.id"
                      class="z-10"
                    ></StudentEditFormVue
                  ></a>
                </template>
                <template #delete
                  ><router-link
                  class="hover:text-black"
                  :to="{
                    name: 'manageStudentDetailVue',
                    path: 'manageStudentDetailVue',
                    params: { id: student.id },
                  }"
                >View Detail</router-link>
                </template>
                <template #add >
                  <span @click="studentfollowupStore.isAddStudentFollowup(student.user.id)" class="text-black">Add follow up</span>
                </template>
              </widget-DropDown>
              <!-- footer drop down -->
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
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
  }
</style>