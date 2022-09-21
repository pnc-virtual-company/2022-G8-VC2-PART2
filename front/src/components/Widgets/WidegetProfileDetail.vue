<template>
  <div class="container mx-auto p-5 md:flex md:justify-center">
    <div class="md:flex no-wrap md:-mx-2">
      <!-- Left Side -->
      <div class="w-full md:w-3/12 m-4">
        <!-- Profile Card -->
        <div class="bg-white p-3 border-2 border-black-600 rounded-lg">
          <div class="image  overflow-hidden">
            <slot name="img"></slot>
            <img class="h-auto w-full mx-auto" src="" alt="" />
          </div>
          <h1
            class="text-gray-900 font-bold text-xl leading-8 flex justify-center"
          >
            <slot name="fullName"></slot>
          </h1>
        </div>
      </div>
      <!-- End of profile card -->
      <!-- Right Side -->
      <div class="w-full md:w-9/12 m-4 border-2 border-black-600 rounded-lg">
        <div class="bg-white rounded-sm p-5">
          <div
            class="flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8"
          >
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
            <div>
            <slot name="edit"></slot>
            </div>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
              <div class="grid grid-cols-3">
                <!-- fullname -->
                <div class="px-4 py-2 font-semibold">First Name</div>
                <div class="px-4 py-2"><slot name="firstName"></slot></div>
              </div>
              <div class="grid grid-cols-3">
                <!-- fullname -->
                <div class="px-4 py-2 font-semibold">Last Name</div>
                <div class="px-4 py-2"><slot name="lastName"></slot></div>
              </div>
              <div class="grid grid-cols-3">
                <!-- gender -->
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2"><slot name="gender"></slot></div>
              </div>
              <div class="grid grid-cols-3">
                <!-- you can rename your style such position or role , or student -->
                <div class="px-4 py-2 font-semibold">
                  <slot name="rename"></slot>
                </div>
                <div class="px-4 py-2"><slot name="information"></slot></div>
              </div>
              <div class="grid grid-cols-3">
                <!-- email of user -->
                <div class="px-4 py-2 font-semibold">Email</div>
                <div class="px-4 py-2">
                  <a class="text-blue-800" href="mailto:jane@example.com"
                    ><slot name="email"></slot
                  ></a>
                </div>
              </div>
              <div class="grid grid-cols-3">
                <!-- data that create account -->
                <div class="px-4 py-2 font-semibold">Join</div>
                <div class="px-2 py-2">
                  <a class="text-blue-800" href=""><slot name="join"></slot></a>
                </div>
              </div>
              <slot name="class"></slot>
              <slot name="phone"></slot>
              <slot name="province"></slot>
              <slot name="ngo"></slot>
              <slot name="tutor"></slot>
            </div>
            <slot name="resetPassword"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
