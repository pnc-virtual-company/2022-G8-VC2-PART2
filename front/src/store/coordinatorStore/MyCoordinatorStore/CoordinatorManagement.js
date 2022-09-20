import { defineStore } from "pinia";
import axios from "@/axios-http";
import { useToast,POSITION  } from "vue-toastification";

const toast = useToast();
export const coordinatorstore = defineStore("coordinator", {
  state: () => ({
    coordinators: [],    
    profile_img:'',
    previewImage:null,
    isCreate:false,
    isDropdown:false,
    first_name:'',
    last_name:'',
    email:'',
    phone:null,
    gender:'male',
    coordinatorId:null,
    isDelete:false
  }),
  
  getters: {
  },
  actions: {
    /**
     * @todo get all data of coordinator
     */
    getCoordinators() {
      axios.get("coordinator").then((res)=>{
        this.coordinators = res.data
      });
    },
    
    /**
     * @todo show form for create new coordinator
     */
    onCreate() {
      this.isCreate = true;
    },

    /**
     * @todo show dropdown user action
     */
    isOpen(id) {
      this.isDropdown = !this.isDropdown
      this.coordinatorId = id
    },
    
    /**
     * @todo cancel on user action edit and delete
     */
     onCancel() {
      this.clearForm()
      this.isCreate = false
    },

    /**
     * @todo create new coordinator
     */ 
    createCoordinator(){
      let coordinator = new FormData();
          coordinator.append("profile_img", this.profile_img);
          coordinator.append("first_name", this.first_name);
          coordinator.append("last_name", this.last_name);
          coordinator.append("email", this.email);
          coordinator.append("gender", this.gender);
          coordinator.append("phone", this.phone);
          coordinator.append("password", 123456789);
          coordinator.append("role", 3)
          axios.post(process.env.VUE_APP_API_URL + 'user', coordinator).then(() => {
            this.isCreate = false
            this.clearForm()
            this.getCoordinators()
            toast.success("Create coordinator successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
          })
    },

    /**
     * @todo to delete teacher by id
     * @return all data of teacher after delete
     */
    deleteCoordinator() {
            axios.delete(process.env.VUE_APP_API_URL + 'user/' + this.coordinatorId).then(() => {
              toast.success("Delete coordinator successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
              this.getCoordinators()
            });
          this.isDelete = false
    },
    
    /**
     * @todo store preview user profile image
     */
     uploadImage(e){
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },

    /**
     * @todo clear form input
     */
    clearForm(){
      this.profile_img = ''
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.phone = null
      this.previewImage = null
    },

    /**
      * @todo  create student detail
     */
    coordinatorDetail(id){
      axios.get("user/"+id).then((res) =>{
        console.log(res.data);
        this.first_name=res.data.first_name;
        this.last_name=res.data.last_name;
        this.gender=res.data.gender;
        this.email=res.data.email;
        this.phone = res.data.phone;
        this.profile_img = res.data.profile_img;
        this.getCoordinators()
      });
    },
  },
});


