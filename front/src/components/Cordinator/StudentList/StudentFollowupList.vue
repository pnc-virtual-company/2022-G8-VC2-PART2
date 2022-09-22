<template>
  <div class="container text-center w-5/5 h-screen overflow-y-scroll">
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
                  Do you want to remove them to Follow up Student?
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
                    @click.prevent="storeData.removeFollowup()"
                    class="px-6 py-2 ml-2 text-blue-100 bg-sky-500 rounded"
                  >
                    Remove
                  </button>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====================== Title ==================== -->
    <widget-title>
      <template v-slot> Follow up Students </template>
    </widget-title>
    <!-- ====================== filter on student list ==================== -->
    <div class="m-auto filter flex justify-around w-11/12 mt-5">
      <input
        type="text"
        class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Name"
      />
      <select
        class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected value="WEBA">WEB 2022 A</option>
        <option value="WEBB">WEB 2022 B</option>
        <option value="SNA">SNA 2022</option>
      </select>
    </div>
    <!-- ============================ display list all student ========================== -->
    <div
      class="m-auto relative bg-gray-100 p-5 shadow-md w-11/12 sm:rounded-lg mt-3 h-screen overflow-y-scroll"
    >
      <table
        class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="py-3 px-6">Profile</th>
            <th class="py-3 px-6">ID</th>
            <th class="py-3 px-6">Name</th>
            <th class="py-3 px-2">Class</th>
            <th class="py-3 px-2">Action</th>
          </tr>
        </thead>

        <tbody v-for="student in storeData.students" :key="student.id">
          <tr
            v-if="student.status == 1"
            class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:border-gray-700"
          >
            <td>
              <div class="py-4 px-6 text-right">
                <router-link
                  class="flex"
                  :to="{
                    name: 'teacherViewStudentDetail',
                    path: 'teacherViewStudentDetail',
                    params: { id: student.id },
                  }"
                >
                  <img
                    v-if="student.user.profile_img != null"
                    :src="
                      'http://127.0.0.1:8000/storage/images/' +
                      student.user.profile_img
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
              <h1 class="">
                {{ student.user.first_name }} {{ student.user.last_name }}
              </h1>
            </td>
            <td class="py-3 px-6">
              {{ student.class }}
            </td>
            <td class="py-3 px-6">
              <div>
                <div class="relative">
                  <!-- Dropdown toggle button -->
                  <button
                    @click.prevent="storeData.isOpen(student.id)"
                    class="flex items-center p-2 text-black-100"
                  >
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
                  </button>
                  <!-- Dropdown menu -->
                  <div
                    v-show="storeData.show && storeData.id == student.id"
                    class="border-2 bg-white-500 absolute right-0 border-zinc-400 rounded-md shadow-xl w-40"
                  >
                    <div
                      @click="
                        storeData.isRemoveStudentFollowup(student.user.id)
                      "
                      class="cursor-pointer block px-4 py-2 text-sm text-black hover:bg-slate-300 hover:text-black"
                    >
                      Remove from follow up
                    </div>
                    <div
                      class="cursor-pointer block px-4 py-2 text-sm text-black hover:bg-slate-300 hover:text-black"
                    >
                      <router-link
                        :to="{
                          name: 'studentdetail',
                          path: 'studentdetail',
                          params: { id: student.id },
                        }"
                        >View Detail</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement";
import { onMounted } from "vue";
const storeData = studentstore();
onMounted(() => {
  storeData.getStudent();
});
</script>
