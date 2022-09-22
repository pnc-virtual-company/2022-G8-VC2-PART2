<template>
    
    <div class="group inline-block">
        <button
          class="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-50"
        >
          <p class="m-3 flex ">
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
            <span>Settings</span>
          </p>
          <span>
            <svg
              class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li class="rounded-sm px-3 text-white-500 py-1"> <slot name="setting"></slot></li>
          <li class="rounded-sm px-3 py-1"> <slot name="changeSetting"></slot> </li>
          <li class="rounded-sm px-3 py-1"><slot name="ressetPassword"></slot></li>
          <li class="rounded-sm px-3 py-1"><slot name="signOut"></slot></li>
        </ul>
      </div>
</template>

<script setup>

</script>

<style  scoped>
li:hover{
  border-left: solid 2px white;
  transition: 0.5s;
  background: rgba(246, 246, 246, 0.251);
}
</style>