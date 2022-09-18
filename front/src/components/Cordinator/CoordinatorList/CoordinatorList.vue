<template>
    <div>
    <!-- Show list all coordinator -->
    <div class="container text-center w-5/5 h-screen overflow-y-scroll">
      <div class="w-11/12 m-auto mt-5">
        <h1 class="bg-sky-500 text-white font-bold text-2xl p-5 m-2 rounded-lg">
          Manage Coordinator
        </h1>
      </div>
      <div class="m-auto filter flex justify-around w-11/12 mt-5">
        <!-- search by name and position -->
        <input
          type="text"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Name"
        />
        <!-- set label to search -->
        <select
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="position">Position</option>
          <option  value="name">Name</option>
        </select>
        <!--   Button to create new teacher   -->
        <button
          class="mt-2 bg-sky-500 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Create Coordinator
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
              <th class="py-3 px-6">Name</th>
              <th class="py-3 px-3">Email</th>
              <th class="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <!-- place search here -->
          <tbody v-for="coordinator of coordinatorData.coordinators" :key="coordinator">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <!-- coordinator profile image -->
              <td>
                <div class="py-4 px-6 text-right">
                  <!-- <router-link class="flex" :to="{name:'coordinator',path:'coordinator',params:{id:coordinator.id}}"> -->
                    <img
                      v-if="coordinator.profile_img != null"
                      :src="
                        'http://127.0.0.1:8000/storage/images/' +
                        coordinator.profile_img
                      "
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                    <img
                      v-else-if="coordinator.gender == 'female'"
                      src="@/assets/female_logo.jpg"
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                    <img
                      v-else-if="coordinator.gender == 'male'"
                      src="@/assets/male_logo.jpg"
                      class="w-12 h-12 rounded-full m-auto mt-5"
                      alt=""
                    />
                  <!-- </router-link> -->
                </div>
              </td>
              <!-- coordinator first name and last name -->
              <td class="py-3 px-6">
                <h1 class="">
                  {{ coordinator.first_name }} {{ coordinator.last_name }}
                </h1>
              </td>
              <!-- coordinator email -->
              <td class="py-4 px-5">
                {{ coordinator.email }}
              </td>
              <!-- dropdown user action -->
              <td class="py-3 px-2 flex justify-end">
                <div>
                  <div class="relative">
                    <!-- Dropdown toggle button -->
                    <button
                      @click.prevent="coordinator.isOpen(coordinator.id)"
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
                        coordinator.show && coordinator.id == coordinator.id
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
                        @click="coordinator.openEdit(coordinator.id)"
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
  </div>
</template>

<script>
import { coordinatorstore } from "@/store/coordinatorStore/MyCoordinatorStore/CoordinatorManagement.js";

export default {
  data() {
    return{
      coordinatorData: coordinatorstore()
    }
  },
  mounted(){
    this.coordinatorData.getCoordinators()
  }
  
}
</script>
