<template>
  <div class="md:flex min-h-screen sm:min-h-screen lx:min-h-screen">
    <div class="md:flex" data-dev-hint="container">
      <input type="checkbox" id="menu-open" class="hidden" />
      <aside
        id="sidebar"
        class="z-10 sm:min-h-full   bg-sky-500 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <div
          class="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <div class="flex flex-row-reverse lg:hidden">
            <label
              for="menu-open"
              class="text-white right-2 bottom-2 md:hidden"
              data-dev-hint="floating action button"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <span class="text-2xl font-extrabold whitespace-nowrap truncate"
            ><div class="profile_info">
              <slot name="img"></slot></div
          ></span>
          <nav>
            <!-- <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"> -->
            <ul
              class="flex  items-center space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              <slot name="manageCoordinator"></slot>
            </ul>
            <ul
              class="flex items-center space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              <slot name="manageStudent"></slot>
            </ul>
            <ul
              class="flex items-center space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              <slot name="manageTeacher"></slot>
            </ul>
            <ul
              class="flex items-center space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              <slot name="manageStudentFollowUp"></slot>
            </ul>
            <ul
              class="flex items-center space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              <slot name="studentFollowUpHistory"></slot>
            </ul>
            <ul class="font-bold text-white">
              <li class="m-3">
                <slot name="viewProfile"></slot>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
    <nav class="w-full border-b-2 w-full">
      <div class="px-6 py-2 shadow">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <label
              for="menu-open"
              class="text-black right-2 bottom-2 md:hidden"
              data-dev-hint="floating action button"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <div class="text-2xl">
              <strong>
                Student Follow Up System
              </strong>
            </div>
          
          </div>
          
          <div class="flex  items-center">
            <div class="relative inline-block text-white">
              <img class="w-14 h-14" src="@/assets/pnc_logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <main id="content" class="flex-1">
        <router-view></router-view>
      </main>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
#sidebar {
  --tw-translate-x: -100%;
}
#menu-close-icon {
  display: none;
}

#menu-open:checked ~ #sidebar {
  --tw-translate-x: 0;
}
#menu-open:checked ~ * #mobile-menu-button {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}
#menu-open:checked ~ * #menu-open-icon {
  display: none;
}
#menu-open:checked ~ * #menu-close-icon {
  display: block;
}

@media (min-width: 768px) {
  #sidebar {
    --tw-translate-x: 0;
  }
}
</style>
