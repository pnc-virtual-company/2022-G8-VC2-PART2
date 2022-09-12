<template>
  <div class="container text-center w-5/5">
    <div class="w-9/12 m-auto mt-5">
      <h1 class="bg-sky-500 text-white font-bold text-2xl p-5 m-2 rounded-lg">
        Manage Teacher
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
        <option selected>Position</option>
        <option value="US">WEB Trainer</option>
        <option value="CA">SNA Trainer</option>
        <option value="FR">English Trainer</option>
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
        Create Teacher
      </button>
    </div>
    <div class="card m-auto bg-gray-100 mt-5 p-4 rounded w-9/12" >
      <div v-for=" teacher of this.teachers" :key="teacher" 
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
          <h1 class="ml-2">{{teacher.user_id}}</h1>
        </div>
        <div class="">
          <h1>{{teacher.position}}</h1>
        </div>
        <div class="">
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
        </div>
      </div>
    </div>
  </div>

  <!-- pop up create teacher -->
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
            v-model="first_name"
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
            v-model="last_name"
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
            placeholder="Position"
            v-model="position"
          />
          <select
            id="gender"
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
            v-model="email"
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
              v-model="phone_number"
            />
          </div>
        </div>
        <button
          @click="createTeacer"
          class="p-1.5 text-white bg-sky-500 mr-1 rounded w-20 mt-10 ml-5"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script >

import axios from "axios";
export default {
  data() {
    return {
      teachers: [],
      isTrue: false,
      isShow: false,
      first_name: "",
      last_name: "",
      position: "",
      gender: "",
      email: "",
      phone_number: "",
    };
  },
  methods: {
    getTeacher(){
        axios.get('http://127.0.0.1:8000/api/teacher')
        .then((res)=>{
            this.teachers = res.data;
        })
    },
      createTeacer() {
      this.isTrue = true;
      let teacher = {
        first_name: this.first_name,
        last_name: this.last_name,
        position: this.position,
        gender: this.gender,
        email: this.email,
        phone_number: this.phone_number,
      };
      if (
        this.first_name != "" &&
        this.last_name != "" &&
        this.position != "" &&
        this.gender != "" &&
        this.email != "" &&
        this.phone_number != ""
      ) {
        axios.post("http://127.0.0.1:8000/api/teacher", teacher).then(() => {
        //   return this.$router.push(teacher);
          this.teachers.push(teacher)
        });
      }
    },
  },
  computed:{
    
  },
  mounted(){
    this.getTeacher();
  }
};
</script>