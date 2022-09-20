import { defineStore } from "pinia";
import axios from "@/axios-http";

export const studentstore = defineStore("student",{
    state: () =>({
        students :[],
        first_name:"",
        last_name:"",
        studentNumber:"",
        searchByName:"",
        isTrue:false,


    }),
    getters:{
    // search name and studentNumber in teacher task 
      filterByName() {
        let result = "";
        if (!this.searchByName  ) {
          return this.students;
        } else if (this.searchByName) {
          result = this.students.filter((student) =>
          (student.user.first_name+student.user.last_name).toLowerCase().includes(this.searchByName.toLowerCase()) || (student.studentNumber).includes(this.searchByName))
        } 
          return result;
      }
    },
    actions:{
      // -------get data from student------
      async getStudent() {
        const data = await axios.get("student");
        this.students = data.data;
        this.studentDetail()
      },
    },
    // ------cancel button------

    
    




})