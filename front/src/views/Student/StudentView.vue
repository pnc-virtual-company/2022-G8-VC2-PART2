<template>
  <!-- asideleft bar  -->
  <widget-navigation>
    <template #img>
      <router-link class="flex" :to="{name:'studentProfileDetail',path:'studentProfileDetail',params:{id:6}}">
        <img
          src="@/assets/male_logo.jpg"
          class="w-2/5 rounded-full m-auto mt-5"
        />
      </router-link>
    </template>
   
    <template #manageStudentFollowUp>
      <li class="m-3">
        <router-link class="flex" :to="{name:'studentProfileDetail',path:'studentProfileDetail',params:{id:1}}">Follow Up Board</router-link>
      </li></template
    >
    >
  </widget-navigation>
</template>
<script></script>
