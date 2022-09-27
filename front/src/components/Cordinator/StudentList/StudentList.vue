<template>
<div>

  <div class="container text-center w-5/5 h-full mt-5">
    <!--  Pop up of confirm to add student into follow up list  -->
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          v-if="storeData.isAddFollowup"
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
                    @click="storeData.isAddFollowup = false"
                    class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    @click.prevent="storeData.addToFollowup()"
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
    <div
      class="m-auto filter items-center flex justify-between px-5 w-12/12 mt-5"
    >
      <div class="flex w-8/12 gap-5 items-center">
        <span class="mr-5"
          ><strong
            >Student Number: {{ storeData.filterByName.length }}</strong
          ></span
        >
        <!-- ====================== filter on student list ==================== -->
        <input
          v-model="storeData.searchData"
          @keydown.enter="storeData.filterByName()"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Student"
        />
        <select
          v-model="storeData.searchOption"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-3/12 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="name">USER NAME</option>
          <option value="id">STUDENT ID</option>
          <option value="class">CLASS ROOM</option>
        </select>
      </div>
        <!-- ====================== option delete many ======================= -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="w-7 h-7 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
      <button @click="storeData.getHistoryData()">get History</button>
      <!-- button -->
      <widget-button @click="storeData.onCreate()">
        <template v-slot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="text-gray-200 font-bold w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <h1 class="text-base text-gray-200"><strong>Create</strong></h1>
        </template>
      </widget-button>
      <!-- pop up create students -->
      <CreateStudent></CreateStudent>
    </div>
    <!-- ============================ display list all student ========================== -->
    
    <div
      class="m-auto relative bg-gray-100 shadow-md w-full mt-3 overflow-y-scroll"
      style="height: 457.4px">
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-4 px-6 text-base text-slate-500 flex justify-around">
              <!-- option for user seleted all coordinator -->
              <!-- <input  value="all" v-model="coordinatorData.dataDeleteCoordinator" @click="storeData.selectAll()" type="checkbox" id="delete" class="-ml-7"> -->
              <span class="-ml-8">Profile</span>
            </th>
            <th class="py-4 px-6 text-base text-slate-500">Profile</th>
            <th class="py-4 px-6 text-base text-slate-500">ID</th>
            <th class="py-4 px-6 text-base text-slate-500">Name</th>
            <th class="py-4 px-6 text-base text-slate-500">Class</th>
            <th class="py-4 px-6 text-base text-slate-500">Status</th>
            <th class="py-4 px-6 text-base text-slate-500"></th>
          </tr>
        </thead>

        <tbody v-for="student in storeData.filterByName" :key="student.id">
          <tr
            class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700"
          >
            <td class="pb-5 px-2">
              <div class="flex justify-evenly items-center text-right">
                <!-- =============== get for delete many user ============== -->
                <input
                  type="checkbox"
                  id="delete"
                  :value="student.user.id"
                  v-model="storeData.dataDeleteStudent"
                />

                <router-link
                  class="flex"
                  :to="{
                    name: 'studentdetail',
                    path: 'studentdetail',
                    params: { id: student.id },
                  }"
                >
                  <img
                    v-if="student.user.profile_img != null"
                    :src="
                      'http://127.0.0.1:8000/storage/images/' +
                      student.user.profile_img
                    "
                    class="w-14 h-14 rounded-full m-auto mt-5 image--cover"
                    alt=""
                  />
                  <img
                    v-else-if="student.user.gender == 'female'"
                    src="@/assets/female_logo.jpg"
                    class="w-14 h-14 rounded-full m-auto mt-5"
                    alt=""
                  />
                  <img
                    v-else-if="student.user.gender == 'male'"
                    src="@/assets/male_logo.jpg"
                    class="w-14 h-14 rounded-full m-auto mt-5"
                    alt=""
                  />
                </router-link>
              </div>
            </td>
            <td class="px-2">
              <h1 class="">{{ student.studentNumber }}</h1>
            </td>
            <td class="px-6">
              <h1 class="">
                {{ student.user.first_name }} {{ student.user.last_name }}
              </h1>
            </td>
            <td class="px-6">
              {{ student.class }}
            </td>
            <td class="px-6">
              <!-- <strong><p v-if="student.status==0" class="text-sky-500">OUT FOLLOW UP</p></strong> -->
              <button
                v-if="student.status == 1"
                type="button"
                class="text-white bg-yellow-500 cursor-default font-medium rounded-lg text-sm px-2 py-1"
              >
                Follow Up
              </button>
              <button
                v-if="student.status == 0"
                type="button"
                class="text-white bg-sky-500 cursor-default font-medium rounded-lg text-sm px-2 py-1"
              >
                None Follow Up
              </button>
              <!-- <strong><p v-if="student.status==1" style="color:#FFAD5C;">IN FOLLOW UP</p>   </strong> -->
            </td>
            <td class="px-2">
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
                  ><span @click="storeData.onDeleteStudent(student.user.id)"
                    >Delete</span
                  >
                </template>
                <template #add>
                  <span @click="storeData.isAddStudentFollowup(student.user.id)"
                    >Add follow up</span
                  >
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
import CreateStudent from "./CreateStudent.vue";
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement";
import StudentEditFormVue from "./EditStudent.vue";
import { onMounted } from "vue";
const storeData = studentstore();
onMounted(() => {
  storeData.getStudent();
});
</script>
<style scoped>
.image--cover {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
