<template>
  <div class="flex font-semibold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    <span class="ml-2"> Settings </span>
    <div class="ml-6">
      <router-link to="/profilecoordinator">Account</router-link>
       
    </div>
  </div>
  
  <div class="container mx-auto md:justify-center">
    <!-- End of profile card -->
    <div class="bg-black-500">
      <img
        :src="'http://127.0.0.1:8000/storage/images/' + store.profile_img"
        class="m-auto image--cover"
        alt=""
      />
      <div class="flex justify-center">
        <label for="profile_img">
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/camera-512.png"
            alt=""
            width="30"
            height="30"
          />
        </label>
        <input
          type="file"
          hidden="true"
          id="profile_img"
          @change="store.changeProfile"
        />
      </div>
    </div>
    <!-- Right Side -->
    <div
      class=" md:-mx-2 w-full m-4 border-2 border-black-600 rounded-lg"
    >
      <div class="bg-white rounded-sm m-4">
        <div
          class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
        >
          <span clas="text-green-500">
            <svg
              class="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span class="tracking-wide">About</span>
        </div>
        <form     @submit.prevent="store.onUpdateProfile">

          <div class="text-gray-700  grid grid-cols-2">
            <div class="text-sm grid grid-cols-2">
           
                <div class="px-4    py-8 font-semibold">First Name</div>
                <div class="px-4 py-2 ">
                  <input
                    type="text"
                    class="m-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    v-model="store.first_name"
                  />
                </div>
  
            </div>
            <!-- Gender  -->
  
            <div class="flex grid grid-cols-2">
              <!-- Last Name -->
              <div class="px-4 py-8 font-semibold">Last Name</div>
              <div class="px-4 py-2">
                <input
                  type="text"
                  class="m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  v-model="store.last_name"
                />
              </div>
            </div>
            <div class="flex grid grid-cols-2" >
              <div class="px-4 py-8 font-semibold">Gender</div>
              <div class="px-4 py-2">
                <select
                  v-model="store.gender"
                  id="countries"
                  class="m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <!-- Class  -->
  
          
            <div class=" grid md:grid-cols-2 ">
              <!-- Email  -->
              <div class="px-4 py-8 font-semibold">Email</div>
              <div class="px-4 py-2">
                <input
                  type="text"
                  class="m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  v-model="store.email"
                />
              </div>
            </div>
            <div class="flex grid grid-cols-2">
              <!-- Phone  -->
              <div class="px-4 py-2 font-semibold">Phone</div>
              <div class="flex ml-4">
                <span
                  class="inline-flex items-center px-2 text-sm text-gray-900 rounded-l border bg-sky-500"
                  >+855</span
                >
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 rounded-r text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone Numer"
                  v-model="store.phone"
                />
              </div>
            </div>
          </div>
          <button class="p-1.5 text-white bg-sky-500 mr-60 m-2 rounded w-20">
            save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator";
const store = userStore();
</script>
<style scoped>
.image--cover {
  width: 100px;
  height: 100px;
  border-radius: 50%;

  object-fit: cover;
  object-position: center;
}
</style>
