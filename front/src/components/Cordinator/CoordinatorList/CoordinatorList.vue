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
                <!-- Button cancel on user action delete -->
                <button
                  @click="coordinatorData.isDelete = false , coordinatorData.isDropdown = false, coordinatorData.isSelect='', coordinatorData.selectAll()"
                  class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
                >
                  No
                </button>
                <!-- Button delete for many coordinator -->
                <button
                  v-if="coordinatorData.dataDeleteCoordinator.length > 0"
                  @click="
                    coordinatorData.deleteManyCoordinator(),
                      (coordinatorData.isDelete = false), coordinatorData.selectAll()
                  "
                  class="px-6 py-2 ml-2 text-blue-100 bg-sky-500 rounded"
                >
                  Yes
                </button>
                <!-- Button delete for each coordinator -->
                <button
                  v-else
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

        <!-- ====================== option delete many ======================= -->
        <div v-if="coordinatorData.dataDeleteCoordinator.length > 0" class="ml-10 mt-5 flex items-center">
          <span v-if="coordinatorData.dataDeleteCoordinator[coordinatorData.dataDeleteCoordinator.length-1] == 'all'" class="mr-8"><strong>Select Number: {{coordinatorData.dataDeleteCoordinator.length-1}}</strong></span>
          <span v-else class="mr-8"><strong>Select Number: {{coordinatorData.dataDeleteCoordinator.length}}</strong></span>
          <svg @click="coordinatorData.isDelete = true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-7 h-7 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>

        <!-- ======================= Option for user filter on coordinator ======================= -->
        <div v-else class="m-auto filter items-center flex justify-between px-5 w-12/12 mt-5">
          <div class="items-center ml-1 flex  w-3/6">
            <!-- count number of coordinator -->
            <span><strong>Coordinator Number: {{coordinatorData.coordinators.length-1}}</strong></span>
            <!-- search by name and position -->
            <input
              v-model="coordinatorData.searchData"
              type="text"
              class="ml-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Name"
            />
          </div>

          <!--   Button to create new coordinator   -->
          <widget-button @click="coordinatorData.onCreate()">
            <template v-slot> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-200 font-bold w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h1 class="text-base text-gray-200"><strong>Create</strong></h1>
            </template>
          </widget-button>
        </div>

        <!-- ======================= display each card of teacher's list ==========================  -->
        <div 
        
        class="card m-auto bg-gray-100 mt-4  w-12/12  overflow-y-scroll" style="height: 437px;">
          <table
            class="w-full text-sm text-center text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 "
            >
              <tr>
                <th class="py-4 px-6 text-base text-slate-500 flex justify-around">
                  <!-- option for user seleted all coordinator -->
                  <input  value="all" v-model="coordinatorData.dataDeleteCoordinator" @click="coordinatorData.selectAll()" type="checkbox" id="delete" class="-ml-7">
                  <span class="-ml-8">Profile</span>
                </th>
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
                <td class="px-2 flex justify-evenly">



                  <!-- option for user select one coordinator -->
                  <input  type="checkbox" id="delete" :value="coordinator.id"  v-model="coordinatorData.dataDeleteCoordinator">

                  <router-link class="flex" :to="{name:'coordinatordetail',path:'coordinatordetail',params:{id:coordinator.id}}">
                    <div class="  text-right ">
                      <!-- <router-link class="flex" :to="{name:'coordinator',path:'coordinator',params:{id:coordinator.id}}"> -->
                        <img
                          v-if="coordinator.profile_img != null"
                          :src="
                            'http://127.0.0.1:8000/storage/images/' +
                            coordinator.profile_img
                          "
                          class="image--cover mt-2 mb-2"
                          alt=""
                        />
                        <img
                          v-else-if="coordinator.gender == 'female'"
                          src="@/assets/female_logo.jpg"
                          class="image--cover mt-2 mb-2"
                          alt=""
                        />
                        <img
                          v-else-if="coordinator.gender == 'male'"
                          src="@/assets/male_logo.jpg"
                          class="image--cover mt-2 mb-2"
                          alt=""
                        />
                      <!-- </router-link> -->
                    </div>
                  </router-link>
                </td>
                <!-- coordinator first name and last name -->
                <td class="">
                  <h1 class="">
                    {{ coordinator.first_name }} {{ coordinator.last_name }}
                  </h1>
                </td>
                <!-- coordinator email -->
                <td class="">
                  {{ coordinator.email }}
                </td>
                <!-- coordinator phone -->
                <td class="">
                  +885 {{ coordinator.phone }}
                </td>
                <!-- dropdown user action -->
                <td class="">
                  <div class="mb-2">
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
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
  }

</style>
