<template>
  <!--  show form pop up to  create teacher   -->
  <div v-if="teacherStore.isTrue" class="z-10">
    <div
      class="
        mt-[-12]
        fixed
        w-full
        h-full
        inset-0
        flex
        items-center
        justify-center
        bg-gray-700 bg-opacity-50
      "
    >
      <form
        @submit.prevent="teacherStore.createTeacher()"
        class="bg-white text-center p-5 w-2/5 m-auto rounded"
      >
        <!-- ==================== User on action cancel ==================== -->
        <div class="flex justify-end">
          <span @click="teacherStore.onCancel" class="text-red">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

        <!-- ==================== User profile image ======================= -->
        <div class="w-28 h-28 rounded-full m-auto cursor-pointer">
          <label
            for="image"
            class="w-28 h-28 rounded-full m-auto cursor-pointer"
          >
            <img
              v-if="teacherStore.previewImage != null"
              :src="teacherStore.previewImage"
              alt=""
              class="w-28 h-28 rounded-full m-auto"
            />
            <img
              v-if="teacherStore.previewImage == null"
              src="@/assets/male_logo.jpg"
              class="w-28 h-28 rounded-full m-auto"
              alt=""
            />
          </label>
          <input
            type="file"
            @change="teacherStore.uploadImage"
            hidden
            id="image"
            class="w-28 h-28 rounded-full m-auto"
          />
        </div>

        <!-- ==================== Form input user Info ===================== -->
        <div class="flex mt-3">
          <!-- User first name -->
          <input
            type="text"
            class="
              m-1
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
            placeholder="First Name"
            v-model="teacherStore.first_name"
          />
          <!-- User last name -->
          <input
            type="text"
            class="
              m-1
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
            placeholder="Last Name"
            v-model="teacherStore.last_name"
          />
        </div>
        <div class="flex mt-3">
          <select
            v-model="teacherStore.position"
            class="
              m-1
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required

          >
            <option value="WEB Trainer">WEB Trainer</option>
            <option value="SNA Trainer">SNA Trainer</option>
            <option value="English Trainer">English Trainer</option>
            <option value="PL Trainer">PL Trainer</option>
            <option value="Social Affair">Social Affair</option>
            <option value="Other">Other</option>
          </select>
          <select
            id="gender"
            v-model="teacherStore.gender"
            class="
              m-1
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
          >
            <option selected value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="flex mt-3">
          <!-- User email -->
          <input
            type="text"
            class="
              m-1
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
            placeholder="Email"
            v-model="teacherStore.email"
          />
          <!-- User phone number -->
          <div class="flex w-full m-1">
            <span
              class="
                inline-flex
                items-center
                px-2
                text-sm text-gray-900
                rounded-l
                border
                bg-sky-500
              "
              >+855</span
            >
            <input
              type="number"
              class="
                bg-gray-50
                border border-gray-300
                rounded-r
                text-gray-900 text-sm
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            required
              placeholder="Phone Numer"
              v-model="teacherStore.phone"
            />
          </div>
        </div>
        <!-- User click on create -->
        <button
          class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { teacherstore } from "@/store/coordinatorStore/TeacherStore/TeacherManagement";
export default {
  data() {
    return {
      teacherStore: teacherstore(),
      id: null,
    };
  },
  mounted() {
    this.teacherStore.getTeacher();
  },
};
</script>
