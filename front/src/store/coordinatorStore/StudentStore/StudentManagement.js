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
  }),
  getters: {},
  actions: {
    async getStudent() {
      const data = await axios.get("student");
      this.students = data.data;
    },
    onCreate() {
      this.isTrue = true;
    },
    /**
     * @todo create new student
     * @return new data student
     */
    createStudent() {
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
      console.log(this.ngo);
      console.log(this.province);
      console.log(student);
      axios.post(process.env.VUE_APP_API_URL + "user", student).then(() => {
        this.isTrue = false;
        this.getStudent();
      });
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
      this.isEdit = true;
      this.first_name = data.data.first_name;
      this.last_name = data.data.last_name;
      this.email = data.data.email;
      this.studentId = data.data.students.studentNumber;
      this.province = data.data.students.province;
      this.class = data.data.students.class;
      this.batch = data.data.students.batch;
      this.gender = data.data.gender;
      this.phone = data.data.students.phone;
      this.ngo = data.data.students.ngo;
      this.user_id = id
    },
    /**
     * @todo edit student 
     */
    async onEditStudent(){
      let object = {};
      object.id =this.student_id;
      object.first_name = this.first_name;
      object.last_name = this.last_name;
      object.gender = this.gender;
      object.email = this.email;
      object.studentNumber = this.studentId;
      object.batch = this.batch;
      object.class = this.class;
      object.ngo = this.ngo;
      object.province = this.province;
      object.phone = this.phone;
       await axios.put("/user/"+this.user_id,object);
       //alert successful
       toast.success("Update is successfull",{position: POSITION.TOP_CENTER, timeout: 500})
       this.isEdit = false;
       this.getStudent()
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
      this.previewImage = ''
    }
  
  },
});