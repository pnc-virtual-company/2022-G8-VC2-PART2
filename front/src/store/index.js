import { defineStore } from 'pinia'
import axios from "@/axios-http"

export const studentstore = defineStore('student', {
  state: () => ({ 
    students: [],
    isTrue:false,
    isShow:true

  }),

  actions:{
    async getStudent(){
        const data = await axios.get('student') 
        this.students = data.data
    },
    onCreate(){
    this.isTrue= true;
    this.isShow = false;
  },
  }
  
 
})
