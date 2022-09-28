<template>
  <div class="container text-center w-5/5 h-full mt-5">
    <!--  Pop up of confirm to delete  -->
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div
          v-show="teacherStore.isDelete"
          class="absolute z-10 inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
        >
          <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">Are you sure to delete?</h3>
            </div>
            <div class="mt-10 flex justify-evenly">
              <button
                @click="teacherStore.isDelete = false, teacherStore.dataDeleteTeacher = [], teacherStore.show = false"
                class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
              >
                No
              </button>
              <button
                v-if="teacherStore.dataDeleteTeacher.length == 0"
                @click="
                  teacherStore.deleteTeacher(teacherStore.id),
                  (teacherStore.isDelete = false),
                  teacherStore.show = false
                "
                class="px-6 py-2 ml-2 text-blue-100 bg-sky-500 rounded"
              >
                Yes
              </button>
              <button
                v-else
                @click="
                  teacherStore.deleteManyTeachers(),
                  (teacherStore.isDelete = false),
                  teacherStore.selectAll()
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
    <div class="container text-center w-5/5">

      <!-- ===================== option for user filter and create new teacher ===================== -->
      <div v-if="teacherStore.dataDeleteTeacher.length == 0" class="m-auto filter items-center flex justify-between px-5 w-12/12 mt-5">
      <div class="flex w-8/12 gap-5 items-center">
        <span class="mr-5"><strong>Teacher Number: {{teacherStore.searchDataTeacher.length}}</strong></span>
        <!-- search by name and position -->
        <input
          type="text"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
          v-model="teacherStore.search"
        />
        <!-- set label to search -->
        <select
          v-model="teacherStore.searchLabel"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="position">Position</option>
          <option  value="name">Name</option>
        </select>
      </div>
        <!--   Button to create new teacher   -->
        <button
          @click="teacherStore.onCreate()"
          class="text-white	 mt-2 bg-sky-500 border border-gray-300 font-medium text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Create Teacher
        </button>
      </div>

      <!-- ====================== option delete many teacher ======================= -->
      <div v-else class="flex mx-6 mb-7 gap-10 mt-8">
        <div>
          <strong v-if="teacherStore.dataDeleteTeacher[teacherStore.dataDeleteTeacher.length-1] == 'all'">Select Number: {{teacherStore.dataDeleteTeacher.length - 1}}</strong>
          <strong v-else>Select Number: {{teacherStore.dataDeleteTeacher.length}}</strong>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-7 h-7 text-red-500 cursor-pointer"
            @click="teacherStore.isDelete=true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>

      <!-- ====================== display each card of teacher's list ====================== -->
      <div class="card m-auto bg-gray-100 mt-5 w-12/12 overflow-y-scroll"  style="height: 435px;">
        <table
          class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="py-4 pl-7 text-base text-slate-500 flex justify-around">
              <!-- option for user seleted all coordinator -->
                <input v-if="teacherStore.teachers.length > 0" @click="teacherStore.selectAll()"  value="all" v-model="teacherStore.dataDeleteTeacher" type="checkbox" id="delete" class="-ml-7">
              </th>
              <th class="py-4 px-6 text-base text-slate-500">Profile</th>
              <th class="py-4 px-6 text-base text-slate-500">Name</th>
              <th class="py-4 px-6 text-base text-slate-500">Position</th>
              <th class="py-4 px-6 text-base text-slate-500">Email</th>
              <th class="py-4 px-6 text-base text-slate-500"></th>
            </tr>
          </thead>
          <!-- place search here -->
          <tbody v-for="teacher of teacherStore.searchDataTeacher" :key="teacher">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="pb-5 px-2">
                <!-- =============== get for delete many user ============== -->
                <input
                  type="checkbox"
                  id="delete"
                  :value="teacher.user.id"
                  v-model="teacherStore.dataDeleteTeacher"
                />
              </td>
              <td>
                <div class="py-4 px-6 text-right">
                  <router-link class="flex" :to="{name:'profileTeacher',path:'profileTeacher',params:{id:teacher.id}}">
                    <img
                      v-if="teacher.user.profile_img != null"
                      :src="
                        'http://127.0.0.1:8000/storage/images/' +
                        teacher.user.profile_img
                      "
                      class="image--cover w-12 h-12 rounded-full m-auto mt-5"
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
                        @click="teacherStore.isDelete = true"
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
<style scoped>
.image--cover {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
