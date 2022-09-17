import { defineStore } from "pinia";
import axios from "@/axios-http";
import router from "@/router";
export const userStore = defineStore("user", {
  state: () => ({
    profile_img: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    created_at:null,
    showPassword:false,
    password:null,
    coordinatorId:null,
    coordinatorToken:null,

  }),
  getters: {
  
  },
  actions: {
        async getUserData(){
            const data =await axios.get('/user/'+this.coordinatorId,this.coordinatorToken)
                this.profile_img = data.data.profile_img
                this.first_name = data.data.first_name
                this.last_name = data.data.last_name
                this.email = data.data.email
                this.gender = data.data.gender
                this.created_at = data.data.created_at
        },
        // show and hide password 
        hideShowPassword(){
          this.showPassword=!this.showPassword
        },
        // login front end
        async login(){
          if(this.email!='' && this.password!=''){
            let loginInfo = {email:this.email,password:this.password};
            await axios.post("/login",loginInfo).then((res)=>{
              // student
              if(res.data.role == 3){
                if(res.data.sms=='coordinatorViewVue'){
                  this.coordinatorId=res.data.id
                  this.coordinatorToken=res.data.token
                  router.push({ name: 'managestudent',path:'/managestudent' }); 
                }
              }
              // teacher
              else if(res.data.role == 2){
                if(res.data.sms=='teacherViewVue'){
                  router.push({ name: 'teacherViewVue',path:'/teacherViewVue' }); 
                }
              }
              // coordinator 
              else if(res.data.role == 1){
                if(res.data.sms=='studentViewVue'){
                  router.push({ name: 'studentViewVue',path:'/studentViewVue' }); 
                }
              }
            })
          }
        }
    },
});
