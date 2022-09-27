import { defineStore } from "pinia";
import axios from "@/axios-http";
// import { useToast,POSITION  } from "vue-toastification";
// const toast = useToast();
export const studentfollowupstore = defineStore("student", {
    state: () => ({
        students: [],
        isAssign:false,
        teachersData:[],
        tutorId:null,
        id:null,
        idStudentFollowup:null,
        isAddFollowup:false,
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
        status: true,
        dialogDelete: false,
        user_id: null,
        index: null,
        dialog: false,
        searchByName:"",
        showDetail: false,
        studentIDAssign:null
    }),
    getters:{
      // search name and studentNumber in teacher task 
      filterByName() {
        let result = "";
        if (!this.searchByName  ) {
          return this.students;
        } else if (this.searchByName) {
          result = this.students.filter((student) =>
          (student.user.first_name+student.user.last_name).toLowerCase().includes(this.searchByName.toLowerCase()) || (student.studentNumber).includes(this.searchByName))
        } 
        return result;
      },
  },
    actions: {
        /**
         * @todo get data of students
         */
        getStudent() {
             axios.get("student").then((res)=>{
                 this.students = res.data;
                 console.log(this.students)
             });
        },
        // showPopup(index) {
        //     this.dialog = true;
        //     this.index = index;
        // },
        isOpenDetail(){
        },
        onCancel() {
            this.isAssign=false,
            this.teachersData=[],
            this.tutorId=null,
            this.id=null,
            this.idStudentFollowup=null,

            this.isAddFollowup = false,
            this.id=null,
            this.idStudentFollowup=null,
            this.isAddFollowup=false,
            this.isTrue= false,
            this.isEdit= false,
            this.isShow= true,
            this.previewImage= null,
            this.user_profile= null,
            this.profile_img= "",
            this.first_name= "",
            this.last_name= "",
            this.studentNumber= "",
            this.email= "",
            this.class= "",
            this.batch= "",
            this.gender= "male",
            this.phone= "",
            this.ngo= "",
            this.province= "",
            this.status= true,
            this.dialogDelete= false,
            this.user_id= null,
            this.index= null,
            this.dialog= false
        },
        /**
         * @todo add student to follow up list
         */
        async addToFollowup() {
            this.isAddFollowup = true
            axios.get("user/"+this.idStudentFollowup).then((res)=>{
                let student = new FormData();
                student.append("first_name", res.data.first_name);
                student.append("last_name", res.data.last_name);
                student.append("studentNumber", res.data.students.studentNumber);
                student.append("email", res.data.email);
                student.append("class", res.data.students.class);
                student.append("batch", res.data.students.batch);
                student.append("gender", res.data.gender);
                student.append("phone", res.data.phone);
                student.append("ngo", res.data.students.ngo);
                student.append("province", res.data.students.province);
                student.append("_method", 'PUT');
                student.append("status", 1);
                console.log(student);
                axios.post("user/"+this.idStudentFollowup,student);
                alert('add to follow up student successfully')
                this.onCancel(); 
            })
        },
        isAddStudentFollowup(id){
            this.isAddFollowup = true
            this.idStudentFollowup = id
        },


        //========================                            =====================
        //                         All with student follow up
        //========================                            =====================
        
        /**
         * @todo store Id student assign
         */
        storeIdStudentAssign(id){
            this.studentIDAssign = id
            this.isAssign = true
            console.log(id);
        },
        /**
         * @todo assign tutor for student follow up
         */
        assignTutor(){
            let assignData = {}
            assignData['tutor_id'] = this.tutorId
            assignData['student_id'] = this.studentIDAssign
            console.log(assignData);
            axios.post('followup', assignData).then((res)=>{
                console.log(res.data);
            })
            this.onCancel()
        },
        /**
         * @todo get all data of teacher
         */
        getTeachers(id){
            axios.get('teacher').then((res)=>{
                this.teachersData = res.data
                console.log(res.data);
            })
            this.storeIdStudentAssign(id)
        },
        /**
         * @todo get student follow up with tutor
         */
        getFollowupwithTutor(){
            axios.get('followup').then((res)=>{
                // this.teachersData = res.data
                console.log(res.data);
            })
        }
    },
});


