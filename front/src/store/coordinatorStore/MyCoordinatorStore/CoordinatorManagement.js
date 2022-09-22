import { defineStore } from "pinia";
import axios from "@/axios-http";
import { useToast,POSITION  } from "vue-toastification";

const toast = useToast();
export const coordinatorstore = defineStore("coordinator", {
  state: () => ({
    isSelect:'',
    dataDeleteCoordinator:[],
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
    isDelete:false,
    searchData:'',
    //=============Validation variable on create user=============//
    no_firstname:false,
    no_lastname:false,
    no_email:false,
    no_phone:false,
    uniqueEmail:false,

  }),
  
  getters: {
    /**
     * @todo search by name and position
    */  
    filterDataCoordinator() {
      let result = "";
      if (this.searchData !== '') {
          result = this.coordinators.filter(
            (coordinator) => (coordinator.first_name+' '+coordinator.last_name).toLowerCase().includes(this.searchData.toLowerCase())
          );
      }else{
        return this.coordinators;
      }
      return result;
    }
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
      this.clearForm()
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
      /**
     * @todo  unique Email.
     * 
     */
     for(let email of this.coordinators){
      if(email.email===this.email){
         this.uniqueEmail=true
      }
    }
    if(this.uniqueEmail){
      toast.error("this email already created!",{position: POSITION.TOP_CENTER, timeout: 2500})
    }

    if((this.first_name!="" && this.last_name!="" && this.email && this.phone !=null) && !this.uniqueEmail){
      let coordinator = new FormData();
          coordinator.append("profile_img", this.profile_img);
          coordinator.append("first_name", this.first_name);
          coordinator.append("last_name", this.last_name);
          coordinator.append("email", this.email);
          coordinator.append("gender", this.gender);
          coordinator.append("phone", this.phone);
          coordinator.append("password", 123456789);
          coordinator.append("role", 3)
          /**
           * @todo  equest email when created coordinator
           * 
           */
          axios.post('/sendcoordinatormail',{email:this.email,first_name:this.first_name}).then(res=>{
            console.log(res.data);
          })

          axios.post(process.env.VUE_APP_API_URL + 'user', coordinator).then(() => {
            this.isCreate = false
            this.clearForm()
            this.getCoordinators()
            toast.success("Create coordinator successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
          });
      }else{
        if(this.uniqueEmail){
          this.uniqueEmail = false
      }else{
        toast.error("Please enter in field!",{position: POSITION.TOP_CENTER, timeout: 2000})
      }
      if(this.first_name==""){
         this.no_firstname=true;
      }else{
        this.no_firstname=false
      }
      if(this.last_name==""){
        this.no_lastname=true;
      }else{
       this.no_lastname=false
      }
      if(this.email==""){
        this.no_email=true;
      }else{
        this.no_email=false
      }
      if(this.phone==null){
        this.no_phone=true;
      }else{
        this.no_phone=false
      }
    }

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
     * @todo to delete teacher by id
     * @return all data of teacher after delete
     */
    deleteManyCoordinator() {
      if(this.dataDeleteCoordinator.length > 0){
        this.dataDeleteCoordinator.forEach(id => {
          if(id != 'all'){
            axios.delete(process.env.VUE_APP_API_URL + 'user/' + id).then(() => {
              this.getCoordinators()
            });
            this.isDelete = false
          }
        });
        toast.success("Delete coordinator successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
      }
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

    /**
     * @todo select all coordinator
     */
    selectAll(){
      if(this.dataDeleteCoordinator.length > 0){
        this.dataDeleteCoordinator = []
      }else{
        this.coordinators.forEach(coordinator => {
          if(coordinator.id != sessionStorage.getItem('coordintor_id')){
            this.dataDeleteCoordinator.push(coordinator.id)
          }
        });
        this.dataDeleteCoordinator.push('all')
        console.log(this.dataDeleteCoordinator);
      }
    },
  },
});


