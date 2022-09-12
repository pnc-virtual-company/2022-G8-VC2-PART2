
import { defineStore } from 'pinia'
import axios from "../axios-http"
export const useStudentStore = defineStore("student", {
    state: () => ({
        students: [],
        isTrue: false,
        isShow:false,
        first_name:null,
        last_name:null,
        gender:null,
        batch:null,
        ngo:null,
        province:null,
        phone:null,
        email:null,
    }),
    actions: {
      async fetchStudent(id) {
        try {
          const data = await axios.get('/student/'+id)
            this.students = data.data
            this.first_name =this.students.user.first_name
            this.last_name=this.students.user.last_name
            this.batch=this.students.batch
            this.phone=this.students.phone
            this.ngo=this.students.ngo
            this.province=this.students.province
            this.gender=this.students.user.gender
            this.email=this.students.user.email
          }
          catch (error) {
            alert(error)
        }
      },
      async onEdit(id,data) {
        console.log(id);
        console.log(data);
        try {
           await axios.put('/user/'+id,data)
          }
          catch (error) {
            alert(error)
        }
      },
      onCreate() {
         this.isTrue = true;
      },
    
    },
})