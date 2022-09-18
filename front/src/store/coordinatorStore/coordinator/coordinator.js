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
    province: "",
    class: "",
    ngo: "",
    phone: "",
    created_at: null,
    showPassword: false,
    password: null,
    token:null,
    tokenId:null,
    getStudentId:sessionStorage.getItem('student_id'),
    getTeacherId:sessionStorage.getItem('teacher_id'),
    getCoordinatorId:sessionStorage.getItem('coordintor_id'),
  }),
  getters: {},
  actions: {
    // clear Email and password 
    // when finish login
    clearText(){
      this.password=''
      this.email=''
    },
    async getUserData() {
      const data = await axios.get("/user/" + sessionStorage.getItem('coordintor_id'));
      this.profile_img = data.data.profile_img;
      this.first_name = data.data.first_name;
      this.last_name = data.data.last_name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.created_at = data.data.created_at;
    },
    // show and hide password
    hideShowPassword() {
      this.showPassword = !this.showPassword;
    },
    // get Data of student to put on Student Profile of Folder Teacher 
    async getStudentToken() {
      await axios.get("user/"+sessionStorage.getItem('student_id')).then((res) => {
        if (res.data.id == res.data.students["user_id"]) {
          this.profile_img = res.data.profile_img;
          this.first_name = res.data.first_name;
          this.last_name = res.data.last_name;
          this.gender = res.data.gender;
          this.email = res.data.email;
          this.phone = res.data.students.phone;
          this.province = res.data.students.province;
          this.class = res.data.students.class;
          this.batch = res.data.students.batch;
          this.ngo = res.data.students.ngo;
        }
      });
    },
    /*login to user and student or teacher
      stoer token on database
      +Put id of student ,coordinator or teacher to sessionStorage
    */
    async login() {
      if (this.email != "" && this.password != "") {
        let loginInfo = { email: this.email, password: this.password };
        await axios.post("/login", loginInfo).then((res) => {
          // student
          // login to coordinator
          if (res.data.role == 3) {
            if (res.data.sms == "coordinatorViewVue") {
              this.token = res.data["coordinator-token"];
              this.tokenId = res.data.data.id;
              sessionStorage.setItem('coordintor_id',this.tokenId)
                axios.post("/sendTokenToDatabase", {
                  role: 3,
                  token_id: this.token,
                  token: this.tokenId,
                });
                this.clearText()
              router.push({ name: "managestudent", path: "/managestudent" });
            }
          }
          // Login to Teacher
          else if (res.data.role == 2) {
            if (res.data.sms == "teacherViewVue") {
              this.token = res.data["teacher-token"];
              this.tokenId = res.data.data.id;
              sessionStorage.setItem('teacher_id',this.tokenId)
                axios.post("/sendTokenToDatabase", {
                  role: 2,
                  token_id: this.token,
                  token: this.tokenId,
                });
                this.clearText()
              router.push({ name: "teacherManageStudent", path: "/teacherManageStudent" });
            }
          }
          /*
          // Login to Student
          
          */
          if (res.data.role == 1) {
            if (res.data.sms == "studentViewVue") {
              this.token = res.data["student-token"];
              this.tokenId = res.data.data.id;
              sessionStorage.setItem('student_id',this.tokenId)
                axios.post("/sendTokenToDatabase", {
                  role: 1,
                  token_id: this.tokenId,
                  token: this.token,
                });
                this.clearText()
                this.getStudentToken();
              router.push("/ManageStudentProfile");
             
            }
          }
        });
      }
    },
  },
});
