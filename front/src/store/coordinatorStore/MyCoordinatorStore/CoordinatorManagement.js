import { defineStore } from "pinia";
import axios from "@/axios-http";
export const coordinatorstore = defineStore("coordinator", {
  state: () => ({
    coordinators: [],    
    profile_img:'',
    previewImage:null,
    isCreate:false,
    showCreate:false
  }),
  
  getters: {
  },
  actions: {
    getCoordinators() {
      axios.get("user").then((res)=>{
        this.coordinators = res.data
      });
      // this.coordinators = coordinators.data;
      // console.log(this.coordinators);
    },    
    
    /**
     * @todo store preview user profile image
     */
     uploadImage(e){
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },
  },
});


