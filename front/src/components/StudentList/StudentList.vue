<template>
  <div>
    <div class="container text-center w-5/5">
      <div class="w-9/12 m-auto mt-5">
        <h1 class="bg-sky-500 text-white font-bold text-2xl p-5 m-2 rounded-lg">
          Manage Student
        </h1>
      </div>
      <div class="m-auto filter flex justify-around w-9/12 mt-5">
        <input
          type="text"
          class="
            mt-2
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded
            focus:ring-blue-500 focus:border-blue-500
            block
            w-2/5
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Search Name"
        />
        <select
          class="
            mt-2
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded
            focus:ring-blue-500 focus:border-blue-500
            block
            w-2/5
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
        >
          <option selected>Class</option>
          <option value="US">WEB 2022 A</option>
          <option value="CA">WEB 2022 B</option>
          <option value="FR">SNA 2022</option>
        </select>
        <button
          @click="isTrue = 'true'"
          class="
            mt-2
            bg-sky-500
            border border-gray-300
            text-gray-900 text-sm
            rounded
            focus:ring-blue-500 focus:border-blue-500
            block
            w-1/6
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
        >
          Create Student
        </button>
      </div>
      <div class="card m-auto bg-gray-100 mt-5 p-4 rounded w-9/12">
        <div
          class="
            flex
            justify-between
            items-center
            shadow
            p-3
            mb-2
            rounded-lg
            bg-white
          "
        >
          <div class="flex items-center">
            <img
              src="../../assets/male_logo.jpg"
              class="w-10 rounded-full m-auto mt-5"
              alt=""
            />
            <h1 class="ml-2">Kea Nhor</h1>
          </div>
          <div class="">
            <h1>Web 2022 A</h1>
          </div>
          <div class="">
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button
                @click="isOpen"
                class="flex items-center p-2 text-black-100"
              >
                <svg
                  class="w-6 h-6"
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

              <!-- Dropdown menu -->
              <div
                v-show="show"
                class="absolute right-0 py-2 mt-2 rounded-md shadow-xl w-36 bg-gray-100"
              >
                <router-link 
                  to="/"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-black
                    hover:bg-indigo-400 hover:text-indigo-100
                  "
                >
                  Detele
                </router-link>
                <router-link
                  to="/"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-black
                    hover:bg-indigo-400 hover:text-indigo-100
                  "
                >
                  Edit
                </router-link>
                <router-link
                  to="/"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-black
                    hover:bg-indigo-400 hover:text-indigo-100
                  "
                >
                  Add to follow up
                </router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

    <!-- pop up create student -->
    <div v-if="isTrue" class="">
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
        <form class="bg-white text-center p-5 w-2/5 m-auto rounded">
          <div class="">
            <img
              src="../../assets/male_logo.jpg"
              class="w-2/6 rounded-full m-auto"
              alt=""
            />
          </div>
          <div class="flex mt-3">
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
              placeholder="First Name"
            />
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
              placeholder="Last Name"
            />
          </div>
          <div class="flex mt-3">
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
              placeholder="Batch"
            />
            <select
              id="countries"
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
              <option selected>Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div class="flex mt-3">
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
              placeholder="Email"
            />
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
                type="text"
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
                placeholder="Phone Numer"
              />
            </div>
          </div>
          <div class="flex mt-3">
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
              placeholder="NGO"
            />
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
              placeholder="Province"
            />
          </div>
          <button
            @click="isTrue = false"
            class="bg-red-500 p-1.5 text-white mr-1 rounded w-20 mt-10"
          >
            Cancel
          </button>
          <button
            @click="onCreate"
            class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
          >
            Create
          </button>
        </form>
      </div>
    </div>
    <!-- pop up remove student -->
    <div
      v-if="isShow"
      class="w-1/2 border-t-4 border-l-4 border-r-4 border-b-4"
    >
      <div class="flex justify-center">
        <img
          src="../../assets/ques.jpg"
          class="flex justify-Content object-cover h-32 w-32 ..."
        />
      </div>
      <p class="text-center font-bold">Are you sure?</p>
      <div class="flex justify-around mb-4">
        <button
          @click="dialogDelete = false"
          class="
            bg-red-500
            hover:bg-red-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          cancel
        </button>
        <button
        @click="onDeleteStudent"
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);
    return { show, isOpen };
  },
  data() {
    return {
      users: [],
      isTrue: false,
      isShow: false,
      firstName: "",
      lastName: "",
      batch: "",
      gender: "",
      email: "",
      phoneNumber: "",
      ngo: "",
      province: "",
      dialogDelete: false,
      studentid: null,
    };
  },
  methods: {
    onCreate() {
      this.isTrue = true;
      let user = {
        firsname: this.firstName,
        lastname: this.lastName,
        batch: this.batch,
        gender: this.gender,
        email: this.email,
        phonenumber: this.phoneNumber,
        ngo: this.ngo,
        province: this.province,
      };
      if (
        this.firstName != "" &&
        this.lastName != "" &&
        this.batch != "" &&
        this.gender != "" &&
        this.email != "" &&
        this.phoneNumber != "" &&
        this.ngo != "" &&
        this.province != ""
      ) {
        this.users.push(user);
        this.isTrue = true;
        this.isShow = false;
        console.log(this.users);
      }
    },
    // get data students
    getStudent() {
      axios.get("http://127.0.0.1:8000/api/student").then((res) => {
        this.student = res.data;
      });
    },
    // remove students from list
    onDeleteStudent() {
      this.dialogDelete = false;
      axios.delete("/student/" + this.studentid);
    },
  },
  mounted() {
    this.getStudent();
  },
};
</script>
<style>
</style>
