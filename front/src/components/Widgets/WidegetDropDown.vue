<template>
  <div class="dropdown inline-block">
    <!-- icoun ... -->
    <button class="font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">
        <svg
          class="w-6 mt-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path></svg
      ></span>
    </button>
    <!-- footer icoun ... -->
    <!-- drop down label -->
    <ul class="dropdown-menu absolute hidden text-gray-700">
      <!-- form edit student -->
      <li
        class="rounded-t bg-gray-200 hover:bg-gray-400 block whitespace-no-wrap"
      >
        <div class="flex justify-center">
          <slot name="edit"></slot>
        </div>
      </li>
      <!-- footer form edit student -->
      <!-- footer form edit student -->
      <li class="">
        <a
          class="bg-gray-200 hover:bg-gray-400 block whitespace-no-wrap"
          href="#"
          ><slot name="delete"></slot
        ></a>
      </li>
      <li class="">
        <a
          class="rounded-b bg-gray-200 hover:bg-gray-400 block whitespace-no-wrap"
          href="#"
          ><slot name="add"></slot>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
