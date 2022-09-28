<template>
  <div>
    <!-- Dropdown toggle button -->
    <button
      @click.prevent="isOpen()"
      class="flex items-center p-2 text-black-100"
    >
      <svg
        class="w-6 h-6 mt-4"
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
        ></path>
      </svg>
    </button>

    <div
      v-show="show"
      class="absolute right-0 py-2 mt-2 rounded-md shadow-xl w-40 bg-white"
    >
      <div
        class="flex justify-center px-4 py-2 text-sm text-black hover:bg-indigo-400 hover:text-indigo-100"
      >
        <slot name="edit"></slot>
      </div>
      <div
        class="flex justify-center px-4 py-2 text-sm text-black hover:bg-indigo-400 hover:text-indigo-100 cursor-pointer"
      >
        <slot name="delete"></slot>
      </div>
      <div
        class="flex justify-center px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
      >
        <slot name="add"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);
    return { show, isOpen };
  },
};
</script>
