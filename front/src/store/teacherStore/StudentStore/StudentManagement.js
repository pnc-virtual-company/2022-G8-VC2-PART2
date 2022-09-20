import { defineStore } from "pinia";
import axios from "@/axios-http";
<<<<<<< HEAD

export const studentstore = defineStore("student",{
    state: () =>({
        students :[],
        first_name:"",
        last_name:"",
        studentNumber:"",
        searchByName:"",
        isTrue:false,


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
      }
    },
    actions:{
      // -------get data from student------
      async getStudent() {
        const data = await axios.get("student");
        this.students = data.data;
        this.studentDetail()
      },
    },
    // ------cancel button------

    
    




})
=======
// import { useToast,POSITION  } from "vue-toastification";

// const toast = useToast();
export const studentfollowupstore = defineStore("student", {
    state: () => ({
        students: [],
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
    }),
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
        }
        /**
           * @todo  create student detail
           */
        // studentDetail(id) {
        //     axios.get("student/" + id).then((res) => {
        //         this.first_name = res.data.user.first_name;
        //         this.last_name = res.data.user.last_name;
        //         this.gender = res.data.user.gender;
        //         this.email = res.data.user.email;
        //         this.class = res.data.class;
        //         this.phone = res.data.user.phone;
        //         this.ngo = res.data.ngo;
        //         this.province = res.data.province;
        //         this.profile_img = res.data.user.profile_img;
        //         this.getStudent()
        //     });
        // },
    },

});


>>>>>>> e0112a9c9569ef68bc76f2936238e371d1244bc5
