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
    dialogDelete: false,
    userid: null,
    index:null,
    dialog: false,

  }),
  getters: {},
  actions:{
    async getStudent(){
        const data = await axios.get('student') 
        this.students = data.data
    },
    onCreate(){
    this.isTrue= true;
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
      console.log(this.ngo);
      console.log(this.province);
      console.log(student);
      axios.post(process.env.VUE_APP_API_URL+'user', student).then(()=>{
        this.isTrue= false;
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

    showPopup(index){
      this.dialog = true;
      this.index = index;

    },
    async onDeleteStudent(id){
         await axios.delete('user/'+id).then(()=>{
           this.getStudent()
          console.log('delete successfully');
         })
  
    }
  }
});
