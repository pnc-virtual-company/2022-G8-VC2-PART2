import { defineStore } from 'pinia'
import axios from "@/axios-http"

export const studentstore = defineStore('student', {
  state: () => ({ 
    students: [],
    isTrue:false,
    isShow:true,
    previewImage:null,

    profile_img:'',
    first_name:"",
    last_name:"",
    studentNumber:"",
    email:"",
    class:"",
    batch:"",
    gender:"male",
    phone:"",
    ngo:"",
    province:"",
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
    /**
     * @todo create new student
     * @return new data student
     */
    createStudent(){
      let student = new FormData();
      student.append("profile_img", this.profile_img);
      student.append("first_name", this.first_name);
      student.append("last_name", this.last_name);
      student.append("studentNumber",this.studentNumber);
      student.append("email", this.email);
      student.append("class", this.class);
      student.append("batch", this.batch);
      student.append("gender", this.gender);
      student.append("phone", this.phone);
      student.append("ngo", this.ngo);
      student.append("province", this.province);
      student.append("password", 123456789);
      student.append("role", 1);
      // alert(student)
      console.log(this.ngo);
      console.log(this.province);
      axios.post(process.env.VUE_APP_API_URL+'user', student).then(()=>{
        alert('Create new student successfully!')
        this.isTrue= false;
        this.isShow = true;
        this.getStudent()
      })
    },
    /**
     * @todo Upload Image
     * @return show image for preview
     */
    uploadImage(e){
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },
  }
  
 
})
