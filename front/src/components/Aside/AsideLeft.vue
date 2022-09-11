
<template>
    <div class="content bg-sky-500 ">
        <div class="profile_info">
            <img src="@/assets/male_logo.jpg" class="w-2/5 rounded-full m-auto mt-5">
        </div>
        <aside class=" h-screen p-5 m-auto">
          <ul class="font-bold text-white">
            <li class="p-4"><router-link to="/managestudent">  Manage Student</router-link></li>
            <li class="p-4"><router-link to="/manageteacher">  Manage Teacher</router-link></li>
            <li class="p-4"><a href="">Student Follow up</a></li>
            <li class="p-4"><a href="">Follow up Histor</a></li>
          </ul>
        </aside>
        <!-- <student_card class="w-4/5 m-3"> </student_card> -->
      </div>
</template>