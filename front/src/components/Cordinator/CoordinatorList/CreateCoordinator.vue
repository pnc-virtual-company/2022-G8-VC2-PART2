<template>
    <!--  show form pop up to  create teacher   -->
    <div v-if="coordinatorData.isCreate" class="z-10">
      <div
        class="mt-[-12] fixed w-full h-full inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form
          @submit.prevent="coordinatorData.createCoordinator()"
          class="bg-white text-center p-5 w-2/5 m-auto rounded"
        >
        <!-- ==================== User on action cancel ==================== -->
          <div class="flex justify-end">
            <span @click="coordinatorData.onCancel" class="text-red">
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

        <!-- ==================== User profile image ======================= -->
          <div  class="w-28 h-28 rounded-full m-auto cursor-pointer">
            <label for="image" class="w-28 h-28 rounded-full m-auto cursor-pointer">
              <img
                v-if="coordinatorData.previewImage != null"
                :src="coordinatorData.previewImage"
                alt=""
                 class="w-28 h-28 rounded-full m-auto"
              />
              <img
                v-if="coordinatorData.previewImage == null"
                src="@/assets/male_logo.jpg"
                 class="w-28 h-28 rounded-full m-auto"
                alt=""
              />
            </label>
            <input
              type="file"
              @change="coordinatorData.uploadImage"
              hidden
              id="image"
               class="w-28 h-28 rounded-full m-auto"
            />
          </div>

        <!-- ==================== Form input user Info ===================== -->
          <div class="flex mt-3">
            <input
              type="text"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First Name"
              v-model="coordinatorData.first_name"
            />
            <input
              type="text"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last Name"
              v-model="coordinatorData.last_name"
            />
          </div>
          
          <!-- User email -->
          <div class="flex mt-3">
            <!-- User email -->
            <input
              type="text"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              v-model="coordinatorData.email"
            />
          </div>  
          <!-- User phone number and gender -->
          <div class="flex mt-3">
            <!-- User gender -->
            <select
              id="gender"
              v-model="coordinatorData.gender"
              class="m-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <!-- User phone number -->
            <div class="flex w-full m-1">
              <span
                class="inline-flex items-center px-2 text-sm text-gray-900 rounded-l border bg-sky-500"
                >+855</span
              >
              <input
                type="number"
                class="bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone Numer"
                v-model="coordinatorData.phone"
              />
            </div>
          </div>

          <!-- User click on create -->
          <button class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5">
            Submit
          </button>
        </form>
      </div>
    </div>
</template>
<script>
import { coordinatorstore } from "@/store/coordinatorStore/MyCoordinatorStore/CoordinatorManagement.js";
export default {
  data() {
    return {
      coordinatorData: coordinatorstore(),
      id: null,
    }
  },
  mounted() {
    this.coordinatorData.getCoordinators();
  },
};
</script>
