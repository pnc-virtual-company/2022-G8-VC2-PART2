import { defineStore } from "pinia";
import axios from "@/axios-http";
// import { useToast,POSITION  } from "vue-toastification";
// const toast = useToast();
export const studentfollowupstore = defineStore("student", {
    state: () => ({
        followupWithTutor:[], //store all data of student follow up with tutor
        hasTutor:true,
        students: [],
        isAssign: false,
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
        studentIDAssign:null,
        historyFollowupData:[],
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
    /**
     * @todo find if the student in follow up has tutor
     */
    isHasTutor(){
        // this.followupWithTutor.forEach(followupId => {
        //     if(id == followupId){
        //         return false
        //     }
        // });
        return this.hasTutor
    }
  },
    actions: {
        /**
         * @todo get data of students
         */
        getStudent() {
             axios.get("student").then((res)=>{
                 this.students = res.data;
             });
<<<<<<< HEAD
            this.getFollowupWithTutor()
=======
             this.getComment()
        
>>>>>>> 8e9e8db963aa559f764dfbcff69c24704456b00b
        },
        getHistoryData() {
            axios.get("history").then((res) => {
            this.historyFollowupData=res.data.data[0]
            })
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
            axios.post('followup', assignData)
            axios.post('history', assignData)
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
         * @todo get all student in follow up has tutor
         */
        getFollowupWithTutor(){
            axios.get('followup').then((res)=>{
                let myData = []
                for (let studentFollowup of res.data.data) {
                    myData.push(studentFollowup[1].id)
                }
                this.followupWithTutor = myData
            })
        },
<<<<<<< HEAD
        /**
         * 
         */
        checkIfHasTutor(id){
            console.log(id);
            this.followupWithTutor.forEach(followupId => {
                if(id == followupId){
                    this.hasTutor = false
                }
                console.log(followupId);
            });
            // console.log(id + 'where are you');
        }

=======
         /**
         * @todo  create student detail
         */
          studentDetail(id) {
            console.log(id);
            axios.get("student/" + id).then((res) => {
                this.first_name = res.data.user.first_name;
                this.last_name = res.data.user.last_name;
                this.gender = res.data.user.gender;
                this.email = res.data.user.email;
                this.class = res.data.class;
                this.phone = res.data.user.phone;
                this.ngo = res.data.ngo;
                this.province = res.data.province;
                this.profile_img = res.data.user.profile_img;
                this.studentIdOnviewDetail = res.data.user_id
                this.getStudent()
            });
        },
         //Add comment============================================
         addComment() {
            let commentData = new FormData();
            commentData.append('student_id', this.studentIdOnviewDetail)
            commentData.append('commenter_id', sessionStorage.getItem('user_id'), )
            commentData.append('paragraph', this.leaveComment)
            console.log(this.leaveComment + this.studentIdOnviewDetail)
            axios.post(process.env.VUE_APP_API_URL + "comment", commentData).then(() => {
                this.getStudent();
                this.getComment();
                this.leaveComment = ''
            });
        },

        // Get comment============================================
        async getComment() {
            const data = await axios.get("comment");
            this.comments = data.data;
            console.log(this.comments)
        },
        async deleteComment(id) {
            await axios.delete("comment/" + id);
            this.getStudent();
            this.getComment();

        },
        async editComment() {
            this.isEditComment = false
            const data = await axios.put("comment/" + this.id, { paragraph: this.editCommentContent });
            this.getStudent();
            this.getComment();
            console.log(data)

        },
        async editCommentClicked(oldUser_id, parag, id) {
            if (sessionStorage.getItem('user_id') == oldUser_id) {
                this.isEditComment = true
                this.editCommentContent = parag
                this.id = id

            }

        },
        getIdTutor(id){
            this.id=id
             axios.put("user/" +id).then((res)=>{
                 this.profile_img = res.data.profile_img;
                 this.first_name = res.data.first_name;
                 this.last_name = res.data.last_name;
             });
            this.getStudent()
            console.log(id,'add ');
        }

        
>>>>>>> 8e9e8db963aa559f764dfbcff69c24704456b00b
    },
});


