<template>
  <!-- profile teacher -->
  <div class="hidden">
  {{ storeData.studentDetail(this.$route.params.id) }}
</div>
<!-- // view Student detail -->

<div class="container mx-auto p-5 md:flex md:justify-center">
  <div class="md:flex no-wrap md:-mx-2">
    <!-- Left Side -->
    <div class="w-full md:w-3/12 m-4">
      <!-- Profile Card -->
      <div class="bg-white p-3 border-2 border-black-600 rounded-lg">
        <div v-if="storeData.profile_img !=null" class="image overflow-hidden">
          <img class="h-auto w-full mx-auto" :src="'http://127.0.0.1:8000/storage/images/'+storeData.profile_img" alt="" />
        </div>
        <div v-else class="image overflow-hidden">
          <img class="h-auto w-full mx-auto" src="../../../assets/male_logo.jpg" alt="" />
        </div>
        <h1
        class="text-gray-900 font-bold text-xl leading-8 flex justify-center"
        >
        {{storeData.first_name}} {{storeData.last_name}}
      </h1>
    </div>
  </div>
  <!-- End of profile card -->
  
  <!-- Right Side -->
  <div class="w-full md:w-9/12 m-4 border-2 border-black-600 rounded-lg">
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
    <div class="text-sm flex justify-around">
      <div >
        <!-- First Name -->
        <div class="flex">
          <div class="px-4 py-2 font-semibold">First Name</div>
          <div class="px-4 py-2">
            {{storeData.first_name}}
          </div>
        </div>
                  <!-- Gender  -->
                  <div class="flex">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">
                      {{storeData.gender}}
                    </div>
                  </div>
                  <!-- Class  -->
                  <div class="flex">
                    <div class="px-4 py-2 font-semibold">Class</div>
                    <div class="px-4 py-2">
                      {{storeData.class}}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- Province -->
                    <div class="px-4 py-2 font-semibold">Province</div>
                    <div class="px-4 py-2">
                      {{storeData.province}}
                    </div>
                  </div>
              </div>
              <div >
                <div class="flex">
                    <!-- Last Name -->
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">
                      {{storeData.last_name}}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- Email  -->
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">
                      {{storeData.email}}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- Phone  -->
                    <div class="px-4 py-2 font-semibold">Phone</div>
                    <div class="px-4 py-2">
                      {{storeData.phone}}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- NGO -->
                    <div class="px-4 py-2 font-semibold">NGO</div>
                    <div class="px-4 py-2">
                      {{storeData.ngo}}
                    </div>
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
  import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
  const storeData = studentstore()
</script>











