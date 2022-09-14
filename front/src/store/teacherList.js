import { defineStore } from "pinia";
// import axios from "axios";
export const teacherList = defineStore( {
  id: "counter",
  state: () => ({
    count: 0,
    teachers: [],
  }),
  getters: {
    getTeacher: (state) => state.teachers,
  },
  actions: {
    getTeacher() {
    //   axios.get("http://127.0.0.1:8000/api/student").then((res) => {
    //     this.teachers = res.data;
        console.log('hello world');
    //   });
    },
  },
});
