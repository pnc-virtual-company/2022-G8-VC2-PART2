<template>
 
      <div
        class="p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
      >

          <h2
            class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Reset Password
          </h2>
 
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Old Password</label
          >
          <slot name="oldPassword"></slot>
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >New Password</label
          >
          <slot name="newPassword"></slot>
        </div>
        <div>
          <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Confirm password</label
          >
          <slot name="confirmedPassword"></slot>
        </div>
        <div class="flex">
          
         <slot name="cencel"></slot>
        <slot name="submit"></slot>
        </div>
      </div>
  

</template>

<script setup>
</script>

<style lang="scss" scoped></style>
