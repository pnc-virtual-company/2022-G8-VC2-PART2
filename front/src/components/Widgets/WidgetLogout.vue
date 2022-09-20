<template>
    <ul class="text-center mt-40 ">
          <button @click="storeData.logOut()" class="bg-transparent hover:bg-green-300 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"><svg class="h-8 w-8 text-white hover:text-cyan-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg></button>
    </ul>
</template>
<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator";
import { onMounted } from "vue";
const storeData = userStore();
onMounted(() => {
  storeData.logOut();
});
</script>