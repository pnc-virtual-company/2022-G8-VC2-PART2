import { defineStore } from "pinia";
import axios from "@/axios-http";
import router from "@/router";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
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
    token: null,
    tokenId: null,
    newPassword: null,
    confirmPassword: null,
    email_Id: null,
    digitnumber: null,
    isCoordinator: false,
    isTrue: false,
    isDigit: false,
    digit_id: null,
    isNotMath:false,
    notExist:false,
  }),
  getters: {},
  actions: {
    // clear Email and password
    // when finish login
    clearText() {
      this.password = "";
      this.email = "";
    },
    async getUserData() {
      const data = await axios.get(
        "/user/" + sessionStorage.getItem("coordintor_id")
      );
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
      await axios
        .get("user/" + sessionStorage.getItem("student_id"))
        .then((res) => {
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
    checkMail() {
      toast.error("Your Email Incorrect !", {
        position: POSITION.TOP_CENTER,
        timeout: 2000,
      });
    },
    checkPassword() {
      toast.error("Your Password Incorrect !", {
        position: POSITION.TOP_CENTER,
        timeout: 2000,
      });
    },
    checkLoginSuccessul() {
      toast.success("successful !", {
        position: POSITION.TOP_CENTER,
        timeout: 2000,
      });
    },
    async login() {
      if (this.email != "" && this.password != "") {
        let loginInfo = { email: this.email, password: this.password };
        await axios.post("/login", loginInfo).then((res) => {
          // student
          // login to coordinator
          if (res.data.sms == "Invalid Email") {
            this.checkMail();
          }
          if (res.data.sms == "Invalid Password") {
            this.checkPassword();
          }
          if (res.data.role == 3) {
            if (res.data.sms == "coordinatorViewVue") {
              this.token = res.data["coordinator-token"];
              this.tokenId = res.data.data.id;
              sessionStorage.setItem("coordintor_id", this.tokenId);
              sessionStorage.setItem("coordintor_token", this.token);
              axios.post("/sendTokenToDatabase", {
                role: 3,
                token_id: this.token,
                token: this.tokenId,
              });
              this.clearText();
              this.checkLoginSuccessul();
              router.push({ name: "managestudent", path: "/managestudent" });
            }
          }
          // Login to Teacher
          else if (res.data.role == 2) {
            if (res.data.sms == "teacherViewVue") {
              this.token = res.data["teacher-token"];
              this.tokenId = res.data.data.id;
              sessionStorage.setItem("teacher_id", this.tokenId);
              sessionStorage.setItem("teacher_token", this.token);
              axios.post("/sendTokenToDatabase", {
                role: 2,
                token_id: this.token,
                token: this.tokenId,
              });
              this.clearText();
              this.checkLoginSuccessul();
              router.push({
                name: "teacherManageStudent",
                path: "/teacherManageStudent",
              });
            }
          }
          /*
          // Login to Student
          */
          if (res.data.role == 1) {
            if (res.data.sms == "studentViewVue") {
              this.token = res.data["student-token"];
              this.tokenId = res.data.data.id;
              sessionStorage.setItem("student_id", this.tokenId);
              sessionStorage.setItem("student_token", this.token);
              axios.post("/sendTokenToDatabase", {
                role: 1,
                token_id: this.tokenId,
                token: this.token,
              });
              this.clearText();
              this.getStudentToken();
              router.push("/ManageStudentProfile");
              this.checkLoginSuccessul();
            }
          }
        });
      }
    },
    getDigit() {
      axios.get("digit").then((res) => {
        if (res.data[0] == null) {
          this.isDigit = true;
        } else if (res.data[0] != null) {
          this.digit_id = res.data[0].id;
          this.isDigit = false;
        }
      });
    },
    // get email to compare to reset password
    async getEmail() {
      this.getDigit();
      const data = await axios.get("user");
      for (let value of data.data) {
        if (value.email == this.email) {
          this.email_Id = value.id;
          if (this.newPassword == this.confirmPassword) {
            toast.success("digit number had send !", {
              position: POSITION.TOP_CENTER,
              timeout: 2000,
            });
            axios.post("/forgetPassword", { email: this.email }).then((res) => {
              if (this.isDigit == true) {
                axios.post("digit", { digitNumber: res.data.digit });
              } else {
                axios.put("digit/" + this.digit_id, {
                  digitNumber: res.data.digit,
                });
              }
              this.getUserData();
            });
          }else{
            this.isNotMath=true
          }
        }else{
          this.notExist=true
        }
      }
    },
    // reset Password
    forgetPassword() {
      if (this.newPassword != null && this.confirmPassword != null) {
        axios.get("digit").then((res) => {
          if (res.data[0].digitNumber == this.digitnumber) {
            toast.success("resset successful !", {
              position: POSITION.TOP_CENTER,
              timeout: 2000,
            });
            if (this.newPassword == this.confirmPassword) {
              axios.put("/newPassword/" + this.email_Id, {
                password: this.newPassword,
              });
              router.push("/");
              this.newPassword = "";
              this.confirmPassword = "";
              this.digit = "";
            }
          }
        });
      }
    },
    // resset password coordinator
    ressetPassword() {
      this.isTrue = false;
      if (
        (this.newPassword != null && this.confirmPassword != null) ||
        this.oldPassword != null
      ) {
        if (this.newPassword == this.confirmPassword) {
          axios
            .post(
              "/resetPaswordCoordinator/" +
                sessionStorage.getItem("coordintor_id"),
              { password: this.oldPassword, new_password: this.newPassword }
            )
            .then((response) => {
              if (response.data.sms == "Password updated!") {
                axios.put(
                  "/resetPaswordCoordinator/" +
                    sessionStorage.getItem("coordintor_id"),
                  {
                    password: this.newPassword,
                  }
                );
                this.clearText();
                this.getUserData();
                toast.success("resset is successful !", {
                  position: POSITION.TOP_CENTER,
                  timeout: 1000,
                });
              }
            });
        }
      }
    },
    onCancel() {
      this.isTrue = false;
    },
    onResset() {
      this.isTrue = true;
    },
    onEditCoordinator() {
      this.isCoordinator = true;
    },
    onCancelCoordinator() {
      this.isCoordinator = false;
    },
    // update information of coordinator
    onUpdateProfile() {
      let coordinator = {};
      coordinator.first_name = this.first_name;
      coordinator.last_name = this.last_name;
      coordinator.gender = this.gender;
      coordinator.phone = this.phone;
      coordinator.email = this.email;
      axios
        .put(
          "update-coordinator/" + sessionStorage.getItem("coordintor_id"),
          coordinator
        )
        .then(() => {
          this.isCoordinator = false;
          this.getUserData();
        });
    },
  },
});
