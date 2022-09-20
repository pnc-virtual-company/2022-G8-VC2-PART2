<template>
  <!-- dd -->
  <div
    class="
      m-auto
      relative
      bg-gray-100
      p-5
      shadow-md
      w-11/12
      sm:rounded-lg
      mt-3
      h-screen
      overflow-y-scroll
    "
  >
    <!-- profile teacher -->
    <div class="hidden">
      {{ storeData.studentDetail(this.$route.params.id) }}
    </div>
    <!-- // view Student detail -->
    <!-- Back button -->
    <button class="bg-transparent text-white-700 font-semibold  py-2 px-4 border hover:border-blue-500  ">
    <router-link class="flex" to="/managestudent">
      <svg
        class="h-8 w-8 text-blue-500 hover:text-red-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
      </svg>
       </router-link>
    </button>
    <!-- End back button -->
    <div class="container mx-auto md:flex md:justify-center">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 m-3">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-2 border-black-600 rounded-lg">
            <div
              v-if="storeData.profile_img != null"
              class="image overflow-hidden"
            >
              <img
                class="h-auto w-full mx-auto"
                :src="
                  'http://127.0.0.1:8000/storage/images/' +
                  storeData.profile_img
                "
                alt=""
              />
            </div>
            <div v-else class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="../../../assets/male_logo.jpg"
                alt=""
              />
            </div>
            <h1
              class="
                text-gray-900
                font-bold
                text-xl
                leading-8
                flex
                justify-center
              "
            >
              {{ storeData.first_name }} {{ storeData.last_name }}
            </h1>
          </div>
        </div>
        <!-- End of profile card -->

        <!-- Right Side -->
        <div class="w-full md:w-9/12 m-2 border-2 border-black-600 rounded-lg">
          <div class="bg-white rounded-sm p-5 py-10">
            <div
              class="
                flex
                items-center
                space-x-2
                font-semibold
                text-gray-900
                leading-8
              "
            >
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
            <div class="text-gray-700">
              <div class="text-sm flex justify-around">
                <div class="flex">
                  <!-- First Name -->
                  <div class="flex">
                    <div class="px-2 py-2 font-semibold">
                      <h4>First Name</h4>
                      <h4>Gender</h4>
                      <h4>Class</h4>
                      <h4>Province</h4>
                    </div>
                    <div class="px-2 py-2">
                      <p>{{ storeData.first_name }}</p>
                      <p>{{ storeData.gender }}</p>
                      <p>{{ storeData.class }}</p>
                      <p>{{ storeData.province }}</p>
                    </div>
                  </div>
                  <!-- ddd -->
                  <div class="flex">
                    <div class="px-2 py-2 font-semibold">
                      <h3>Last Name</h3>
                      <h4>Email</h4>
                      <h4>Phone</h4>
                      <h4>NGO</h4>
                    </div>
                    <div class="px-2 py-2">
                      <p>{{ storeData.last_name }}</p>
                      <p>{{ storeData.email }}</p>
                      <p>{{ storeData.phone }}</p>
                      <p>{{ storeData.ngo }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leav Comment box -->
    <label for="chat" class="sr-only">Leav comment here ....</label>
    <div class="flex items-center py-2 bg-gray-50 rounded-lg dark:bg-gray-700">
      <textarea
        id="chat"
        rows="1"
        class="
          resize-none
          block
          mx-0
          p-2.5
          w-full
          text-sm text-gray-900
          bg-white
          rounded-lg
          border border-gray-300
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-800
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        placeholder="Your message..."
        v-model="storeData.leaveComment"
      ></textarea>
    </div>

    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          bg-gray-200
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th class="py-3 px-6">Date & Time</th>
          <th class="py-3 px-6 border border-slate-300">
            Technical
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
          <th class="py-3 px-6 border border-slate-300">
            English
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
          <th class="py-3 px-2 border border-slate-300">
            PL
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
          <th class="py-3 px-3 border border-slate-300">
            Other
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
        </tr>
      </thead>
      <tbody v-for="comment in storeData.comments" :key="comment">
        <tr
          v-if="comment.user.role != 1"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="py-3 px-2 text-center border border-slate-300">
            <p>
              {{ comment.created_at }}
            </p>
          </td>

          <td class="py-3 px-6 text-justify border border-slate-300">
            <p
              v-if="
                comment.user.teachers != null &&
                (comment.user.teachers.position == 'WEB Trainer' ||
                  comment.user.teachers.position == 'SNA Trainer')
              "
            >
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>

          <td class="py-3 px-6 text-justify border border-slate-300">
            <p
              v-if="
                comment.user.teachers != null &&
                comment.user.teachers.position == 'English Trainer'
              "
            >
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>

          <td class="py-4 px-5 text-justify border border-slate-300">
            <p
              v-if="
                comment.user.teachers != null &&
                comment.user.teachers.position == 'PL Trainer'
              "
            >
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>
          <td class="py-3 px-2 text-justify border border-slate-300">
            <p
              v-if="
                (comment.user.teachers != null &&
                  comment.user.teachers.position == 'Social Affair') ||
                comment.user.role == 3
              "
            >
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement";
import { onMounted } from "vue";
const storeData = studentstore();
onMounted(() => {
  storeData.getComment();

});
</script> 











