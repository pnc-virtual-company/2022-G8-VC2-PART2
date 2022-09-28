<template>
  <div class="container mx-auto p-5 md:flex md:justify-center">
    <div class="w-full">
      <div class="ml-2 flex font-semibold">
        <span class="p-2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <span class="p-2">Account</span>
      </div>
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div
          class="w-full md:w-3/12 m-4 m-4 rounded-lg shadow-md border-2 border-black-600"
        >
          <!-- Profile Card -->
          <div class="bg-white p-3">
            <div
              v-if="storeData.profile_img != null"
              class="image overflow-hidden"
            >
              <img
                :src="
                  'http://127.0.0.1:8000/storage/images/' +
                  storeData.profile_img
                "
                class="m-auto image--cover"
                alt=""
              />
              <div class="flex justify-center">
                <label for="profile_img">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/camera-512.png"
                    alt=""
                    width="30"
                    height="30"
                  />
                </label>
                <input
                  type="file"
                  hidden="true"
                  id="profile_img"
                  @change="storeData.changeProfileImageStudent"
                />
              </div>
            </div>
            <div v-else class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="../../assets/male_logo.jpg"
                alt=""
              />
            </div>
            <h1
              class="text-gray-900 font-bold text-xl mt-6 leading-8 flex justify-center"
            >
              {{ storeData.first_name }} {{ storeData.last_name }}
            </h1>
          </div>
        </div>
        <!-- End of profile card -->

        <!-- Right Side -->
        <div
          class="w-full md:w-9/12 m-4 border-2 shadow-md border-black-600 rounded-lg"
        >
          <div class="bg-white rounded-sm p-5">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
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
                <div>
                  <!-- First Name -->
                  <div class="flex">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">
                      {{ storeData.first_name }}
                    </div>
                  </div>
                  <!-- Gender  -->
                  <div class="flex">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">
                      {{ storeData.gender }}
                    </div>
                  </div>
                  <!-- Class  -->
                  <div class="flex">
                    <div class="px-4 py-2 font-semibold">Class</div>
                    <div class="px-4 py-2">
                      {{ storeData.class }}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- Province -->
                    <div class="px-4 py-2 font-semibold">Province</div>
                    <div class="px-4 py-2">
                      {{ storeData.province }}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex">
                    <!-- Last Name -->
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">
                      {{ storeData.last_name }}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- Email  -->
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">
                      {{ storeData.email }}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- Phone  -->
                    <div class="px-4 py-2 font-semibold">Phone</div>
                    <div class="px-4 py-2">
                      {{ storeData.phone }}
                    </div>
                  </div>
                  <div class="flex">
                    <!-- NGO -->
                    <div class="px-4 py-2 font-semibold">NGO</div>
                    <div class="px-4 py-2">
                      {{ storeData.ngo }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th class="py-3 px-6">Date & Time</th>
        <th class="py-3 px-6 border border-slate-300">Technical</th>
        <th class="py-3 px-6 border border-slate-300">English</th>
        <th class="py-3 px-2 border border-slate-300">PL</th>
        <th class="py-3 px-3 border border-slate-300">Other</th>
      </tr>
    </thead>
    <tbody v-for="comment in storeData.commentById" :key="comment">
      <tr
       
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <td class="py-3 px-2 text-center border border-slate-300">
          <p>
            {{ comment.created_at }}
          </p>
        </td>

        <td class="py-3 px-6 text-justify border border-slate-300">
          <div
            class="flex flex-row"
            v-if="
            comment.user.teachers != null &&
            (comment.user.teachers.position == 'WEB Trainer'  ||
              comment.user.teachers.position == 'SNA Trainer')"
          >
            <p>
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
          </div>
          <p v-else class="text-center">N/A</p>
        </td>

        <td class="py-3 px-6 text-justify border border-slate-300">
          <div
            class="flex flex-row"
            v-if="
              comment.user.teachers != null &&
              comment.user.teachers.position == 'English Trainer'
            "
          >
            <p>
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
          </div>
          <p v-else class="text-center">N/A</p>
        </td>

        <td class="py-4 px-5 text-justify border border-slate-300">
          <div
            class="flex flex-row"
            v-if="
              comment.user.teachers != null &&
              comment.user.teachers.position == 'PL Trainer'
            "
          >
            <p>
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
          </div>
          <p v-else class="text-center">N/A</p>
        </td>
        <td class="py-3 px-2 text-justify border border-slate-300">
          <div
            v-if="
            (comment.user.teachers != null &&
              comment.user.teachers.position == 'Social Affair') ||
            comment.user.role == 3"
            class="flex flex-row"
          >
            <p>
              <b>
                {{ comment.user.first_name + " " + comment.user.last_name }}:
              </b>
              {{ comment.paragraph }}
            </p>
          </div>
          <p v-else class="text-center">N/A</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { studentstore } from "@/store/coordinatorStore/StudentStore/StudentManagement";
import { onMounted } from "vue";
const storeData = studentstore();

onMounted(() => {
  storeData.getStudentToken();
});
</script>
<style scoped>
.image--cover {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  object-position: center;
}
</style>
