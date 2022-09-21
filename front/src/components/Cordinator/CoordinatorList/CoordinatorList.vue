<template>
    <div>
      <!--  Pop up of confirm to delete  -->
      <div class="container mt-5 mx-auto">
        <div class="flex justify-center">
          <div
            v-show="coordinatorData.isDelete"
            class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
          >
            <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl">Are you sure to delete?</h3>
              </div>
              <div class="mt-10 flex justify-evenly">
                <button
                  @click="coordinatorData.isDelete = false , coordinatorData.isDropdown = false"
                  class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
                >
                  No
                </button>
                <button
                  @click="
                    coordinatorData.deleteCoordinator(),
                      (coordinatorData.isDelete = false)
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
      <!-- Show list all coordinator -->
      <div class="container text-center w-full max-h-screen">
        <div class="m-auto filter items-center flex justify-between px-5 w-12/12 mt-5">
          <div class="items-center ml-1 flex  w-3/6">
            <!-- count number of coordinator -->
            <span><strong>Coordinator Number: {{coordinatorData.coordinators.length}}</strong></span>
            <!-- search by name and position -->
            <input
              v-model="coordinatorData.searchData"
              type="text"
              class="ml-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Name"
            />
          </div>
          <!--   Button to create new teacher   -->
          <widget-button @click="coordinatorData.onCreate()">
            <template v-slot> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-200 font-bold w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h1 class="text-base text-gray-200"><strong>Create</strong></h1>
            </template>
          </widget-button>
        </div>
        <!--  display each card of teacher's list   -->
        <div class="card m-auto bg-gray-100 mt-4 rounded w-12/12  overflow-y-scroll" style="height: 448px;">
          <table
            class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 "
            >
              <tr>
                <th class="py-4 px-6 text-base text-slate-500">Profile</th>
                <th class="py-4 px-6 text-base text-slate-500">Name</th>
                <th class="py-4 px-3 text-base text-slate-500">Email</th>
                <th class="py-4 px-3 text-base text-slate-500">phone</th>
                <th class="py-4 px-6 text-base text-slate-500"></th>
              </tr>
            </thead>
            <!-- place search here -->
            <tbody v-for="coordinator of coordinatorData.filterDataCoordinator" :key="coordinator">
              <tr class="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 " v-if="coordinator.id != userID">
                <!-- coordinator profile image -->
                <td class="px-2">
                  <router-link class="flex" :to="{name:'coordinatordetail',path:'coordinatordetail',params:{id:coordinator.id}}">
                    <div class="m-auto px-6 text-right mb-4">
                      <!-- <router-link class="flex" :to="{name:'coordinator',path:'coordinator',params:{id:coordinator.id}}"> -->
                        <img
                          v-if="coordinator.profile_img != null"
                          :src="
                            'http://127.0.0.1:8000/storage/images/' +
                            coordinator.profile_img
                          "
                          class="image--cover w-14 h-14 rounded-full m-auto mt-5"
                          alt=""
                        />
                        <img
                          v-else-if="coordinator.gender == 'female'"
                          src="@/assets/female_logo.jpg"
                          class="w-14 h-14 rounded-full m-auto mt-5"
                          alt=""
                        />
                        <img
                          v-else-if="coordinator.gender == 'male'"
                          src="@/assets/male_logo.jpg"
                          class="w-14 h-14 rounded-full m-auto mt-5"
                          alt=""
                        />
                      <!-- </router-link> -->
                    </div>
                  </router-link>
                </td>
                <!-- coordinator first name and last name -->
                <td class="px-2">
                  <h1 class="">
                    {{ coordinator.first_name }} {{ coordinator.last_name }}
                  </h1>
                </td>
                <!-- coordinator email -->
                <td class="px-2">
                  {{ coordinator.email }}
                </td>
                <!-- coordinator phone -->
                <td class="px-2">
                  +885 {{ coordinator.phone }}
                </td>
                <!-- dropdown user action -->
                <td class="px-2 flex justify-end">
                  <div>
                    <div class="relative">
                      <!-- Dropdown toggle button -->
                      <button
                        @click.prevent="coordinatorData.isOpen(coordinator.id)"
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
                          coordinatorData.isDropdown && coordinatorData.coordinatorId == coordinator.id
                        "
                        class="border-2 bg-white-500 absolute right-0 border-zinc-400 rounded-md shadow-xl w-40"
                      >
                        <div
                          @click="coordinatorData.isDelete = true"
                          class="cursor-pointer block px-4 py-2 text-sm text-black hover:bg-slate-300 hover:text-black"
                        >
                          Detele
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
      <!-- show form create coordinator -->
      <create_coordinator></create_coordinator>
  </div>
</template>

<script>
import { coordinatorstore } from "@/store/coordinatorStore/MyCoordinatorStore/CoordinatorManagement.js";
import CreateCoordinator from "@/components/Cordinator/CoordinatorList/CreateCoordinator.vue";
export default {
  components:{
    create_coordinator:CreateCoordinator
  },
  data() {
    return{
      coordinatorData: coordinatorstore(),
      userID:sessionStorage.getItem('coordintor_id')
    }
  },
  mounted(){
    this.coordinatorData.getCoordinators()
  }
  
}
</script>
<style scoped>
.image--cover {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
