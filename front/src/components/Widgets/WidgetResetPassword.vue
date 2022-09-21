<template>
  <div class="shadow p-8">
    <div class="">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Old Password</label
      >
      <slot name="oldPassword"></slot>
    </div>

    <div class="w-96">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >New Password</label
      >
      <slot name="newPassword"></slot>
    </div>
    <div class="w-96">
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

<script setup></script>

<style lang="scss" scoped></style>
