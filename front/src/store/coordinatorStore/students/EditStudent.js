import { defineStore } from "pinia";
import axios from "../../../axios-http";
export const useStudentStore = defineStore("user", {
  state: () => ({
    isTrue: false,
    first_name: '',
    last_name: '',
    gender: '',
    batch: '',
    class: '',
    ngo: '',
    province: '',
    phone: '',
    email: '',
    studentId: '',
    student_id:null,
    isDrop:false
  }),
  getters:{
    getData(state){
      return state.user
    }
  },
  actions: {
    async fetchStudent() {
      try {
        const data = await axios.get("/user/"+this.student_id);
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
    async onEditStudent() {
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
      try {
      axios.put("/user/" + this.student_id, object);
        this.isTrue=false
        this.isEdit=true
        this.fetchStudent()

      } catch (error) {
        alert(error)
      }
    },
    onCreate(id) {
      this.isTrue = true;
      this.student_id=id
      this.fetchStudent()
    },
    onCancel(){
      this.isTrue=false
    },
    isOpenDrop(){
      this.isDrop=!this.isDrop
    }
  },
});
