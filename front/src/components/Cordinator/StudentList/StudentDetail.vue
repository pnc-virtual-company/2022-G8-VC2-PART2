<template>
    <!-- student detail -->
    <div class="flex">
        <div class="p-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="w-20" src="@/assets/male_logo.jpg" alt="">
            <h1>{{storeData.detail.id}}</h1>
        </div> 
        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h1>
                Name: {{storeData.detail.id}}
            </h1>
            <h1>
                Sex: Male
            </h1>
            <h1>
                Class: {{storeData.detail.class}}
            </h1>
            <h1>
                Email: {{storeData.detail.id}}
            </h1>
            <h1>
                Phone: {{storeData.detail.phone}}
            </h1>
            <h1>
                ID: {{storeData.detail.studentNumber}}
            </h1>
            <h1>
                Province: {{storeData.detail.province}}
            </h1>
            <h1>
                NGO: {{storeData.detail.ngo}}
            </h1>
            <h1>
                Tutor: Ronan
            </h1>
        </div>
    </div>
</template>

<script setup>
    import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement"
    const storeData = studentstore()
</script>

<style>

</style>