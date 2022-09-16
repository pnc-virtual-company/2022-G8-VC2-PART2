import { defineStore } from "pinia";
import axios from "@/axios-http";
export const userStore = defineStore("user", {
  state: () => ({
    profile_img: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "male",

  }),
  getters: {},
  actions: {
        async getUserData(){
            const data =await axios.get('/user/19')
                this.profile_img = data.data.profile_img
                this.first_name = data.data.first_name
                this.last_name = data.data.last_name
                this.email = data.data.email
                this.gender = data.data.gender

        },
    },
});
