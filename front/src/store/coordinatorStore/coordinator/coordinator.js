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
    isNotMath: false,
    notExist: false,
  }),
  // {headers:{ Authorization: `Bearer ${sessionStorage.getItem('user_token')}`}}
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
        "/user/" + sessionStorage.getItem("user_id"),
      );
      // console.log({headers:{ Authorization: `Bearer ${sessionStorage.getItem('user_token')}`}});
      this.profile_img = data.data.profile_img;
      this.first_name = data.data.first_name;
      this.last_name = data.data.last_name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.phone = data.data.phone;
      this.created_at = data.data.created_at;
    },
    // show and hide password
    hideShowPassword() {
      this.showPassword = !this.showPassword;
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
    signOutCoordinator(){
      this.getUserData()
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('coordinator_token');
      axios.post("/sign-out")
      router.push("/");
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
              sessionStorage.setItem("user_id", this.tokenId);
              sessionStorage.setItem("coordinator_token", this.token);
              sessionStorage.setItem("user_token", this.token);
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
              sessionStorage.setItem("user_id", this.tokenId);
              sessionStorage.setItem("teacher_token", this.token);
              sessionStorage.setItem("user_token", this.token);
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
              sessionStorage.setItem("user_id", this.tokenId);
              sessionStorage.setItem("student_token", this.token);
              sessionStorage.setItem("user_token", this.token);
              this.clearText();
              this.getUserData();
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
          } else {
            this.isNotMath = true;
          }
        } else if (this.email != value.email) {
          this.notExist = false;
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
   
    // resset password coordinator Teacher and Student
    clear(){
      this.newPassword='';
      this.oldPassword='';
      this.confirmPassword='';
    },
    changePassword() {
      this.isTrue = false;
      if (
        (this.newPassword != null && this.confirmPassword != null) ||
        this.oldPassword != null
      ) {
        if (this.newPassword == this.confirmPassword) {
          axios
            .post(
              "/compareRessetPassword/" + sessionStorage.getItem("user_id"),
              { password: this.oldPassword, new_password: this.newPassword },{headers:{ Authorization: `Bearer ${sessionStorage.getItem('user_token')}`}}
            )
            .then((response) => {
              if (response.data.sms == "Password updated!") {
                axios.put(
                  "/ressetPassword/" + sessionStorage.getItem("user_id"),
                  {
                    password: this.newPassword,
                  },{headers:{ Authorization: `Bearer ${sessionStorage.getItem('user_token')}`}}
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
          "update-coordinator/" + sessionStorage.getItem("user_id"),
          coordinator
        )
        .then(() => {
          toast.success("successful !", {
            position: POSITION.TOP_CENTER,
            timeout: 2000,
          });
          this.getUserData();
        });
    },
    async changeProfile(event) {
      this.onUpload(event.target.files[0]);
    },
    // uplaod image
    onUpload(profile_img) {
      const profileImage = new FormData();
      profileImage.append("profile_img", profile_img);
      profileImage.append("_method", "PUT");
      axios
        .post(
          "/changeProfileImage/" + sessionStorage.getItem("user_id"),
          profileImage
        )
        .then(() => {

          this.getUserData();
        });
    },
  },
});
