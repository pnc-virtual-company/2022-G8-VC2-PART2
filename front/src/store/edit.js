import { defineStore } from "pinia";
import axios from "../axios-http";
export const useStudentStore = defineStore("student", {
  state: () => ({
    isTrue: false,
    isShow: false,
    first_name: null,
    last_name: null,
    gender: null,
    batch: null,
    class: null,
    ngo: null,
    province: null,
    phone: null,
    email: null,
    studentId: null,
  }),
  actions: {
    async fetchStudent(id) {
      try {
        const data = await axios.get("/user/" + id);
        this.first_name = data.data.first_name;
        this.last_name = data.data.last_name;
        this.batch = data.data.students.batch;
        this.phone = data.data.students.phone;
        this.ngo = data.data.students.ngo;
        this.province = data.data.students.province;
        this.gender = data.data.gender;
        this.email = data.data.email;
        this.class = data.data.students.class;
        this.studentId = data.data.students.studentNumber;
      } catch (error) {
        // alert(error)
      }
    },
    async onEdit(id) {
      let object = {};
      object.id = id;
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
      try {
      axios.put("/user/" + id, object);
        this.isTrue=false
      } catch (error) {
        // alert(error)
      }
 
    },
    onCreate() {
      this.isTrue = true;
    },
    onCancel(){
      this.isTrue=false
    }
  },
});
