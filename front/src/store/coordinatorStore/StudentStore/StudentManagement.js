import { defineStore } from "pinia";
import axios from "@/axios-http";
import { useToast,POSITION  } from "vue-toastification";

const toast = useToast();
export const studentstore = defineStore("student", {
  state: () => ({
    students: [],
    isTrue: false,
    isEdit: false,
    isShow: true,
    previewImage: null,
    user_profile: null,
    profile_img: "",
    first_name: "",
    last_name: "",
    studentNumber: "",
    email: "",
    class: "",
    batch: "",
    gender: "male",
    phone: "",
    ngo: "",
    province: "",
    dialogDelete: false,
    user_id: null,
    index: null,
    dialog: false,
    isClick:false.valueOf,
    // *******validation create student*******//
    no_firstname:false,
    no_lastname:false,
    no_batch:false,
    no_gender:false,
    no_email:false,
    no_phone:false,
    no_province:false,
    no_class:false,
    no_id:false,
    no_ngo:false,
    uniqueEmail:false,
  }),
  
  getters: {
    // search name and studentNumber in students-----
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
  actions: {
    async getStudent() {
      const data = await axios.get("student");
      this.students = data.data;
      this.studentDetail()
    },
    onCreate() {
      this.isTrue = true;
      
    },
    /**
     * @todo create new student
     * @return new data student
     */
    createStudent() {

    /**
     * @todo  unique Email.
     * 
     */
      for(let email of this.students){
        if(email.user.email===this.email){
           this.uniqueEmail=true
        }
      }
      if(this.uniqueEmail){
        toast.error("this email already created!",{position: POSITION.TOP_CENTER, timeout: 2500})
      }
      
      /**
     * @todo  validation create student.
     * 
     */
      if((this.first_name!="" && this.last_name!="" && this.batch!="" && this.gender!="" &&
          this.email!="" &&  this.phone!="" && this.ngo!="" && this.class!="" && this.id!="") && !this.uniqueEmail
      ){
        let student = new FormData();
        student.append("profile_img", this.profile_img);
        student.append("first_name", this.first_name);
        student.append("last_name", this.last_name);
        student.append("studentNumber", this.studentNumber);
        student.append("email", this.email);
        student.append("class", this.class);
        student.append("batch", this.batch);
        student.append("gender", this.gender);
        student.append("phone", this.phone);
        student.append("ngo", this.ngo);
        student.append("province", this.province);
        student.append("password", 123456789);
        student.append("role", 1);
        axios.post(process.env.VUE_APP_API_URL + "user", student).then(() => {
          this.isTrue = false;
          this.getStudent();
          toast.success("Created successfully!",{position: POSITION.TOP_CENTER, timeout: 1000})
        });
      }else {
        if(this.uniqueEmail){
          this.uniqueEmail = false
        }else{
          toast.error("Please enter in field!",{position: POSITION.TOP_CENTER, timeout: 2000})
        }
        if(this.first_name==""){
          this.no_firstname=true
        }else{
          this.no_firstname=false
        }
        if(this.last_name==""){
          this.no_lastname=true
        }else{
          this.no_lastname=false
        }
        if(this.batch==""){
          this.no_batch=true
        }else{
          this.no_batch=false
        }
        if(this.gender==""){
          this.no_gender=true
        }else{
          this.no_gender=false
        }
        if(this.email==""){
          this.no_email=true
        }else{
          this.no_email=false
        }
        if(this.phone==""){
          this.no_phone=true
        }else{
          this.no_phone=false
        }
        if(this.ngo==""){
          this.no_ngo=true
        }else{
          this.no_ngo=false
        }
        if(this.province==""){
          this.no_province=true
        }else{
          this.no_province=false
        }
        if(this.class==""){
          this.no_class=true
        }else{
          this.no_class=false
        }
        if(this.studentNumber==""){
          this.no_id=true
        }else{
          this.no_id=false
        }
        
      }
    },
    showPopup(index) {
      this.dialog = true;
      this.index = index;
    },
    async onDeleteStudent(id) {
      await axios.delete("user/" + id).then(() => {
        this.getStudent();
        console.log("delete successfully");
      });
    },
    onCancel() {
      this.isTrue = false;
      this.isEdit = false;
    },

    /**
     * @todo get student by id
     */
    async getDAta(id) {
      const data = await axios.get("/user/" + id);
      console.log(data.data);
      this.isEdit = true;
      this.first_name = data.data.first_name;
      this.last_name = data.data.last_name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.user_profile = data.data.profile_img
      this.studentId = data.data.students.studentNumber;
      this.province = data.data.students.province;
      this.class = data.data.students.class;
      this.batch = data.data.students.batch;
      this.phone = data.data.students.phone;
      this.ngo = data.data.students.ngo;
      this.user_id = id;
      
    },
    /**
     * @todo edit student 
     */
    async onEditStudent(){

      let student = new FormData();
      student.append("profile_img", this.profile_img);
      student.append("first_name", this.first_name);
      student.append("last_name", this.last_name);
      student.append("studentNumber", this.studentNumber);
      student.append("email", this.email);
      student.append("class", this.class);
      student.append("batch", this.batch);
      student.append("gender", this.gender);
      student.append("phone", this.phone);
      student.append("ngo", this.ngo);
      student.append("province", this.province);
      student.append("_method", 'PUT');
       await axios.post("/user/"+this.user_id,student);
       //alert successful
       toast.success("Update is successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
       this.isEdit = false;
       this.getStudent();
    },

    uploadImage(e){
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },
    /**
     * @todo clea form create student
     */
    clearForm(){
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.batch = ''
      this.phone = ''
      this.ngo = ''
      this.province = ''
      this.class = ''
      this.studentNumber = ''
      this.profile_img = ''
      this.previewImage = null
    },
    /**
       * @todo  create student detail
       */
      studentDetail(id){
      axios.get("student/"+id).then((res) =>{
          this.first_name=res.data.user.first_name;
          this.last_name=res.data.user.last_name;
          this.gender=res.data.user.gender;
          this.email=res.data.user.email;
          this.class=res.data.class;
          this.phone = res.data.phone;
          this.ngo=res.data.ngo;
          this.province = res.data.province;
          this.profile_img = res.data.user.profile_img;
        });
      },
      
  },
});


