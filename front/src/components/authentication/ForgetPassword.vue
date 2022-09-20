<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
      >
        <div class="flex justify-between">
          <h2
            class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Change Password
          </h2>
          <router-link to="/">
            <span
              ><svg
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
                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                />
              </svg>
            </span>
          </router-link>
        </div>
        <form
          @submit.prevent="forgetStore.getEmail"
          class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
          action="#"
        >
          <div>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
              required=""
              v-model="forgetStore.email"
            />
          </div>
          <div v-if="forgetStore.notExist" class="flex text-red-500">
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
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              />
            </svg>
            <span>Email not exist</span>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="new password"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              v-model="forgetStore.newPassword"
            />
          </div>
          <div>
            <input
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              placeholder="confirm password"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              v-model="forgetStore.confirmPassword"
            />
          </div>
          <div v-if="forgetStore.isNotMath" class="flex text-red-500">
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
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              />
            </svg>

            <span class="">Password Not Match !</span>
          </div>
          <div class="flex">
            <div>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="4 digit code "
                class="digit-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="forgetStore.digitnumber"
              />
            </div>

            <button
              class="ml-5 w-50 text-white bg-sky-500 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              get code
            </button>
          </div>
        </form>
        <button
          @click="forgetStore.forgetPassword"
          class="w-full mt-4 text-white bg-sky-500 outline-none focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600"
        >
          Reset passwod
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { userStore } from "@/store/coordinatorStore/coordinator/coordinator";
const forgetStore = userStore();
</script>

<style lang="scss" scoped></style>
