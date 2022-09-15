<template>
  <div class="bg-sky-500 lg:relative w-60 text-white p-3 sticky top-0 h-screen">
    <div class="profile_info">
      <router-link class="flex" to="/profilecoordinator">
        <img
          src="@/assets/male_logo.jpg"
          class="w-2/5 rounded-full m-auto mt-5"
        />
      </router-link>
    </div>
    <aside class="p-5 m-auto">
      <ul class="font-bold text-white">
        <li
          class="p-4"
          @click="checkOnPage(1)"
          :class="{ 'bg-white text-black': onPage == 1 }"
        >
          <router-link to="/managestudent"> Manage Student</router-link>
        </li>
        <li
          class="p-4"
          @click="checkOnPage(2)"
          :class="{ 'bg-white text-black': onPage == 2 }"
        >
          <router-link to="/manageteacher"> Manage Teacher</router-link>
        </li>
        <li
          class="p-4"
          @click="checkOnPage(3)"
          :class="{ 'bg-white text-black': onPage == 3 }"
        >
          <a href="">Student Follow up</a>
        </li>
        <li
          class="p-4"
          @click="checkOnPage(4)"
          :class="{ 'bg-white text-black': onPage == 4 }"
        >
          <a href="">Follow up Histor</a>
        </li>
      </ul>

      <ul class="font-bold text-white">
        <li class="p-4">
          <router-link class="flex" to="/profilecoordinator">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span> View Profile</span></router-link
          >
        </li>
      </ul>
    </aside>
  </div>
</template>
