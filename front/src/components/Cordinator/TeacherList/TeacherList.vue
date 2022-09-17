<template>
  <div>
    <!--  Pop up of confirm to delete  -->
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          v-show="isDelete"
          class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
        >
          <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">Are you sure to delete?</h3>
            </div>
            <div class="mt-10 flex justify-evenly">
              <button
                @click="isDelete = false"
                class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
              >
                No
              </button>
              <button
                @click="
                  teacherStore.deleteTeacher(teacherStore.id),
                    (isDelete = false)
                "
                class="px-6 py-2 ml-2 text-blue-100 bg-sky-500 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Show list all student -->
    <div class="container text-center w-5/5 h-screen overflow-y-scroll">
      <div class="w-11/12 m-auto mt-5">
        <h1 class="bg-sky-500 text-white font-bold text-2xl p-5 m-2 rounded-lg">
          Manage Teacher
        </h1>
      </div>
      <div class="m-auto filter flex justify-around w-11/12 mt-5">
        <!-- search by name and position -->
        <input
          type="text"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
          v-model="teacherStore.search"
        />
        <!-- set label to search -->
        <select
          v-model="teacherStore.searchLabel"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="position">Position</option>
          <option  value="name">Name</option>
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
        <table
          class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="py-3 px-6">Profile</th>
              <!-- <th class="py-3 px-6">ID</th> -->
              <th class="py-3 px-6">Name</th>
              <th class="py-3 px-2">Position</th>
              <th class="py-3 px-3">Email</th>
              <th class="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <!-- place search here -->
          <tbody v-for="teacher of teacherStore.searchDataTeacher" :key="teacher">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td>
                <div class="py-4 px-6 text-right">
                  <router-link class="flex" :to="{name:'profileTeacher',path:'profileTeacher',params:{id:teacher.id}}">
                    <img
                      v-if="teacher.user.profile_img != null"
                      :src="
                        'http://127.0.0.1:8000/storage/images/' +
                        teacher.user.profile_img
                      "
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                    <img
                      v-else-if="teacher.user.gender == 'female'"
                      src="@/assets/female_logo.jpg"
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                    <img
                      v-else-if="teacher.user.gender == 'male'"
                      src="@/assets/male_logo.jpg"
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                  </router-link>
                </div>
              </td>
              <!-- <td class="py-3 px-2">
                <h1 class="">{{ teacher.id }}</h1>
              </td> -->
              <td class="py-3 px-6">
                <h1 class="">
                  {{ teacher.user.first_name }} {{ teacher.user.last_name }}
                </h1>
              </td>
              <td class="py-3 px-6">
                {{ teacher.position }}
              </td>
              <td class="py-4 px-5">
                {{ teacher.user.email }}
              </td>
              <td class="py-3 px-2 flex justify-end">
                <div>
                  <div class="relative">
                    <!-- Dropdown toggle button -->
                    <button
                      @click.prevent="teacherStore.isOpen(teacher.id)"
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
                      v-show="
                        teacherStore.show && teacherStore.id == teacher.id
                      "
                      class="border-2 bg-white-500 absolute right-0 border-zinc-400 rounded-md shadow-xl w-40"
                    >
                      <div
                        @click="isDelete = true"
                        class="cursor-pointer block px-4 py-2 text-sm text-black hover:bg-slate-300 hover:text-black"
                      >
                        Detele
                      </div>
                      <div
                        @click="teacherStore.openEdit(teacher.id)"
                        class="cursor-pointer block px-4 py-2 text-sm text-black hover:bg-slate-300 hover:text-black"
                      >
                        Edit
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
    <!--  show form pop up to  create teacher   -->
    <create_teacher></create_teacher>
    <!--  show form pop up to update teacher     -->
    <update_teacher></update_teacher>
  </div>
</template>
<script>
import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement";
import CreateTeacher from "@/components/Cordinator/TeacherList/CreateTeacher.vue";
import UpdateTeacher from "@/components/Cordinator/TeacherList/UpdateTeacher.vue";
export default {
  components: {
    create_teacher: CreateTeacher,
    update_teacher: UpdateTeacher,
  },
  data() {
    return {
      teacherStore: teacherstore(),
      isDelete: false,
      first_name: "",
      last_name: "",
      position: "",
      gender: "male",
      email: "",
      imgURL: process.env.VUE_APP_IMG_URL,
      // ====================data for filter ========================
      search_value: '',
      search_option: '',
    };
  },
  mounted() {
    this.teacherStore.getTeacher();
  },
};
</script>
