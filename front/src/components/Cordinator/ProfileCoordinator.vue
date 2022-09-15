<template>
  <div class="container mx-auto p-5 md:flex md:justify-center">
    <div class="md:flex no-wrap md:-mx-2 ">
      <!-- Left Side -->
      <div  class="w-full md:w-3/12 m-4 ">
        <!-- Profile Card -->
        <div  class="bg-white p-3 border-2 border-black-600 rounded-lg">
          <div class="image overflow-hidden">
            <img v-if="storeData.profile_img!=''"
              class="h-auto w-full mx-auto"
              src="../../assets/female_logo.jpg"
              alt=""
            />
            <img v-else
              class="h-auto w-full mx-auto"
              :src="storeData.profile_img"
              alt=""
            />
          </div>
          <h1
            class="text-gray-900 font-bold text-xl leading-8 flex justify-center"
          >
            Jane Doe
          </h1>
        </div>
      </div>
      <!-- End of profile card -->

      <!-- Right Side -->
      <div class="w-full  md:w-9/12 m-4  border-2 border-black-600 rounded-lg ">
        <div class="bg-white rounded-sm p-5">
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
          <div class="text-gray-700">
            <div class="grid md:grid-cols-1 text-sm">
              <div class="grid grid-cols-6">
                <div class="px-4 py-2 font-semibold">Full Name</div>
                <div class="px-4 py-2">{{storeData.first_name}} {{storeData.last_name}}</div>
              </div>
              <div class="grid grid-cols-6">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2">{{storeData.gender}}</div>
              </div>
              <div class="grid grid-cols-6">
                <div class="px-4 py-2 font-semibold">Role</div>
                <div class="px-4 py-2">Coordinator</div>
              </div>
              <div class="grid grid-cols-6">
                <div class="px-4 py-2 font-semibold">Email.</div>
                <div class="px-4 py-2">
                  <a class="text-blue-800" href="mailto:jane@example.com"
                    >{{storeData.email}}</a
                  >
                </div>
              </div>
              <div class="grid grid-cols-6">
                <div class="px-4 py-2 font-semibold">Join</div>
                <div class="px-4 py-2">
                  <a class="text-blue-800" href="mailto:jane@example.com"
                    >9/9/2022</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {userStore} from "@/store/coordinatorStore/coordinator/coordinator"
import { onMounted } from "vue";
const storeData = userStore()
onMounted(()=>{
  storeData.getUserData()
})
</script>

