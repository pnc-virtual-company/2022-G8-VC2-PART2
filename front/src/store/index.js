import { defineStore } from 'pinia'
import axios from 'axios'

export const studentstore = defineStore('student', {
  state: () => ({ 
    users:[],
    isTrue:false,
    isShow:true,
    
  }),
  async getStudent(){
       await axios.get("http://127.0.0.1:8000/api/student").then(res=>{
        console.log(res)
      })
  },

     onCreate(){
      this.isTrue= true;
      this.isShow = false;
      this.getStudent()
    },
  
 
})
