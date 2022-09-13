
import { defineStore } from 'pinia'
import axios from "../axios-http"
export const useTeacherStore = defineStore("teacher", {
    state: () => ({
        teachers: [],
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
      async fetchTeacher(id) {
        try {
          const data = await axios.get('/teacher/'+id)
            this.teachers = data.data
            this.first_name =this.teachers.user.first_name
            this.last_name=this.teachers.user.last_name
            this.batch=this.teachers.batch
            this.phone=this.teachers.phone
            this.ngo=this.teachers.ngo
            this.province=this.teachers.province
            this.gender=this.teachers.user.gender
            this.email=this.teachers.user.email
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