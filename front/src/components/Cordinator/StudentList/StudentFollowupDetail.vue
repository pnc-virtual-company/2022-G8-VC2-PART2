<template>

    <div class="mt-10">
        <div class="hidden">
            {{ storeData.studentDetail(this.$route.params.id) }}
        </div>
        <!-- display users -->
        <div class="flex justify-evenly w-12/12">
            <!-- user 1 -->
            <div  class="w-3/12 justify-center items-center">
                <div class="text-center my-4"><p><strong class="text-xl">STUDENT</strong></p></div>
                <div class=" border-solid border-2 border-gray-100 py-5">
                    <!-- user 1 profile -->
                    <div class="justify-center flex items-center"><img src="@/assets/male_logo.jpg" alt="" class="w-5/12 flex items-center"></div>
                    <div class="justify-center flex items-center mt-5"><p class="text-xl">{{storeData.first_name}} {{storeData.last_name}}</p></div>
                    <!-- get more user on profile -->
                    <div class="justify-center flex items-center mt-5">
                        <router-link class="flex" :to="{name:'studentdetail',path:'studentdetail',params:{id:this.$route.params.id}}">
                            <button type="button" class="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Profile</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- user 1 -->
            <div class="w-3/12 justify-center items-center">
                <div class="text-center my-4"><p><strong class="text-xl">TUTOR</strong></p></div>
                <div class="  border-solid border-2 border-gray-100 py-5">
                    <!-- user 1 profile -->
                    <div class="justify-center flex items-center"><img src="@/assets/female_logo.jpg" alt="" class="w-5/12"></div>
                    <div class="justify-center flex items-center mt-5"><p class="text-xl">Sokunbopha Sovann</p></div>
                    <div class="justify-center flex items-center mt-5"><button type="button" class="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Profile</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
  const storeData = studentstore()
</script>
