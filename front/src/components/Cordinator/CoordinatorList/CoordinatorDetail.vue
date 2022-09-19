<template>
  <!-- profile coordinator -->
  <div class="hidden">
  {{ coordinatorData.coordinatorDetail(this.$route.params.id) }}
</div>
<!-- // view coordinator detail -->
<div class="p-5 container mx-auto flex justify-center">
    <button></button>
    <div class="md:flex w-full no-wrap md:-mx-2">
    <!-- Left Side -->
        <div class="w-full md:w-3/12 m-4">
            <!-- Profile Card -->
            <div class="bg-white p-3 border-2 border-black-600 rounded-lg">
                <div v-if="coordinatorData.profile_img !=null" class="image overflow-hidden">
                    <img class="h-48 w-full mx-auto" :src="'http://127.0.0.1:8000/storage/images/'+coordinatorData.profile_img" alt="" />
                </div>
                <div v-else-if="coordinatorData.gender == 'male'" class="image overflow-hidden">
                    <img class="h-48 w-full mx-auto" src="../../../assets/male_logo.jpg" alt="" />
                </div>
                <div v-else-if="coordinatorData.gender == 'female'" class="image overflow-hidden">
                    <img class="h-48 w-full mx-auto" src="../../../assets/female_logo.jpg" alt="" />
                </div>
                <h1
                    class="text-gray-900 font-bold text-xl leading-8 flex justify-center"
                    >
                    {{coordinatorData.first_name}} {{coordinatorData.last_name}}
                </h1>
            </div>
        </div>

    <!-- Right Side -->
        <div class="w-full md:w-9/12 m-4 border-2 border-black-600 rounded-lg">
            <div class="bg-white rounded-sm p-5">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
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
                    <div class="text-sm ">
                        <div >
                            <!-- First Name -->
                            <div class="flex">
                            <div class="px-4 py-2 font-semibold">Full Name</div>
                            <div class="px-4 py-2">
                                {{coordinatorData.first_name + ' ' + coordinatorData.last_name}}
                            </div>
                            </div>
                            <!-- Gender  -->
                            <div class="flex">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">
                                    {{coordinatorData.gender}}
                                </div>
                            </div>
                            <!-- Email  -->
                            <div class="flex">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2">
                                    {{coordinatorData.email}}
                                </div>
                            </div>
                            <!-- Phone  -->
                            <div class="flex">
                                <div class="px-4 py-2 font-semibold">Phone</div>
                                <div class="px-4 py-2">
                                    {{coordinatorData.phone}}
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
<script>
  import { coordinatorstore } from "@/store/coordinatorStore/MyCoordinatorStore/CoordinatorManagement"
  export default {
    data(){
        return{
            coordinatorData: coordinatorstore()
        }
    }
  }
</script>











