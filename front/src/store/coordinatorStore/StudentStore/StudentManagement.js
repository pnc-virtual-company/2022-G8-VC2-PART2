import { defineStore } from "pinia";
import axios from "@/axios-http";
import { useToast, POSITION } from "vue-toastification";
import router from "@/router";
const toast = useToast();
export const studentstore = defineStore("student", {
    state: () => ({
        dataDeleteStudent: [],
        students: [],
        historyFollowupData: [],
        studentHistoryId: null,
        id: null,
        idStudentFollowup: null,
        show: false,
        isAddFollowup: false,
        status: true,
        showDetail: false,
        isTrue: false,
        isEdit: false,
        isDelete:false, //use when user click on delete student will show pop up
        isShow: false,
        deleteStudent: false, //use in delete popup
        deleteStudentId: null, //use in delete btn in student list
        leaveComment: '', //variable to stor input from v-model in comment
        comments: [], //store comments
        isEditComment: false, //show edit comment form
        editCommentContent: '', //get old and new comment content
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
        searchOption: "name",
        dialogDelete: false,
        user_id: null,
        index: null,
        dialog: false,
        isClick: false.valueOf,
        // *******validation create student*******//
        no_firstname: false,
        no_lastname: false,
        no_batch: false,
        no_gender: false,
        no_email: false,
        no_phone: false,
        no_province: false,
        no_class: false,
        no_id: false,
        no_ngo: false,
        uniqueEmail: false,
    }),
    getters: {
        // search name and studentNumber in students-----
        filterByName() {
            let result = "";
            if (!this.searchData) {
                return this.students;
            } else if (this.searchData && this.searchOption == "name") {
                result = this.students.filter((student) =>
                    (student.user.first_name + " " + student.user.last_name)
                    .toLowerCase()
                    .includes(this.searchData.toLowerCase())
                );
            } else if (this.searchData && this.searchOption == "id") {
                result = this.students.filter((student) =>
                    student.studentNumber.includes(this.searchData)
                );
            } else if (this.searchData && this.searchOption == "class") {
                result = this.students.filter((student) =>
                    student.class.toLowerCase().includes(this.searchData.toLowerCase())
                );
            }
            return result;
        },
    },
    actions: {
        async getStudent() {
            const data = await axios.get("student");
            this.students = data.data;
            this.studentDetail();
  
        },
        getHistoryData() {
            this.getStudent() 
            axios.get("history").then((res) => {
            this.historyFollowupData=res.data.data[0]
            })
        },
        /**
         * @todo add student to follow up list
         */
        async addToFollowup() {
                /**
                 * @todo  equest email when created students 
                 */
            axios.post('/sendfollowupstudentmail', { email: this.email, first_name: this.first_name });
            this.addComment();
            axios.get("user/" + this.idStudentFollowup).then((res) => {
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
                student.append("_method", "PUT");
                student.append("status", 1);
                axios.post("user/" + this.idStudentFollowup, student);
                this.onCancel();
                this.getStudent()
            })

        },
        isAddStudentFollowup(id) {
            this.isAddFollowup = true;
            this.idStudentFollowup = id;
            this.studentIdOnviewDetail = id
        },
        onCreate() {
            this.clearForm();
            this.isTrue = true;
        },
        isOpen(id) {
            this.show = !this.show;
            this.id = id;
        },
        isRemoveStudentFollowup(id) {
            this.isAddFollowup = true;
            this.idStudentFollowup = id;
        },
        removeFollowup() {
                /**
                 * @todo  equest email when created students 
                 */
            axios.post('/sendfollowupremovestudentmail', { email: this.email, first_name: this.first_name });
            axios.get("user/" + this.idStudentFollowup).then((res) => {
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
                student.append("_method", "PUT");
                student.append("status", 0);
                axios.post("user/" + this.idStudentFollowup, student);
                this.onCancel();
                this.getStudent()
            })
        },
        /**
         * @todo create new student
         * @return new data student
         */
        createStudent() {
            /**
             * @todo  unique Email.
             * 
             */
            for (let email of this.students) {
                if (email.user.email === this.email) {
                    this.uniqueEmail = true
                }
            }
            if (this.uniqueEmail) {
                toast.error("this email already created!", {
                    position: POSITION.TOP_CENTER,
                    timeout: 2500,
                });
            }

            /**
             * @todo  validation create student.
             * 
             */
            if ((this.first_name != "" && this.last_name != "" && this.batch != "" && this.gender != "" &&
                    this.email != "" && this.phone != "" && this.ngo != "" && this.class != "" && this.studentNumber != "") && !this.uniqueEmail) {
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
                student.append("status", 0);
                /**
                 * @todo  equest email when created students
                 * 
                 */
                axios.post('/sendstudentmail', { email: this.email, first_name: this.first_name })
                axios.post(process.env.VUE_APP_API_URL + "user", student).then(() => {
                    this.isTrue = false;
                    this.getStudent();
                    toast.success("Created successfully!", { position: POSITION.TOP_CENTER, timeout: 1000 })

                })
                if (this.first_name == "") {
                    this.no_firstname = true;
                } else {
                    this.no_firstname = false;
                }
                if (this.last_name == "") {
                    this.no_lastname = true;
                } else {
                    this.no_lastname = false;
                }
                if (this.batch == "") {
                    this.no_batch = true;
                } else {
                    this.no_batch = false;
                }
                if (this.gender == "") {
                    this.no_gender = true;
                } else {
                    this.no_gender = false;
                }
                if (this.email == "") {
                    this.no_email = true;
                } else {
                    this.no_email = false;
                }
                if (this.phone == "") {
                    this.no_phone = true;
                } else {
                    this.no_phone = false;
                }
                if (this.ngo == "") {
                    this.no_ngo = true;
                } else {
                    this.no_ngo = false;
                }
                if (this.province == "") {
                    this.no_province = true;
                } else {
                    this.no_province = false;
                }
                if (this.class == "") {
                    this.no_class = true;
                } else {
                    this.no_class = false;
                }
                if (this.studentNumber == "") {
                    this.no_id = true;
                } else {
                    this.no_id = false;
                }
            }
        },
        showPopup(index) {
            this.dialog = true;
            this.index = index;
        },
        async onDeleteStudent(id) {
            axios.post('/deletestudent', { email: this.email, first_name: this.first_name })
            await axios.delete("user/" + id).then(() => {
                this.isShow = false;
                this.getStudent();
            });
        },
        /**
         * @todo  
         */
        async onDeleteManyStudent() {
            if (this.dataDeleteStudent.length > 0) {
                this.dataDeleteStudent.forEach(id => {
                    axios.delete("user/" + id).then(() => {
                        this.getStudent();
                    });
                });
            }
        },
        /**
         * @todo get all list of student
         */
        selectAll(){
          if(this.dataDeleteStudent.length > 0){
            this.dataDeleteStudent = []
          }else{
            for (let student of this.students) {
              this.dataDeleteStudent.push(student.user.id)
            }
            this.dataDeleteStudent.push('all')
          }
        },
        /**
         * @todo to delete teacher by id
         * @return all data of teacher after delete
         */
        deleteManyStudents() {
          if(this.dataDeleteStudent.length > 0){
            this.dataDeleteStudent.forEach(id => {
              if(id != 'all'){
                axios.delete(process.env.VUE_APP_API_URL + 'user/' + id).then(() => {
                  this.getStudent()
                });
                this.isDelete = false
              }
            });
            toast.success("Delete coordinator successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
          }
        },
        /**
         * @todo cancel on any user action
         */
        onCancel() {
            this.clearForm();
            (this.isAddFollowup = false), (this.isShow = false);
            this.isTrue = false;
            this.isEdit = false;
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

        /**
         * @todo get student by id
         */
        async getDAta(id) {
            const data = await axios.get("/user/" + id);
            console.log(data.data);
            this.isEdit = true;
            this.first_name = data.data.first_name;
            this.last_name = data.data.last_name;
            this.email = data.data.email;
            this.gender = data.data.gender;
            this.user_profile = data.data.profile_img;
            this.studentNumber = data.data.students.studentNumber;
            this.province = data.data.students.province;
            this.class = data.data.students.class;
            this.batch = data.data.students.batch;
            this.phone = data.data.phone;
            this.ngo = data.data.students.ngo;
            this.user_id = id;
        },
        /**
         * @todo edit student
         */
        async onEditStudent() {
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
            student.append("_method", "PUT");
            await axios.post("/user/" + this.user_id, student);
            //alert successful
            toast.success("Update is successfull", {
                position: POSITION.TOP_CENTER,
                timeout: 2000,
            });
            this.isEdit = false;
            this.clearForm();
            this.getStudent();
        },
        uploadImage(e) {
            this.profile_img = e.target.files[0];
            this.previewImage = URL.createObjectURL(this.profile_img);
        },
        /**
         * @todo clea form create student
         */
        clearForm() {
            this.first_name = "";
            this.last_name = "";
            this.email = "";
            this.batch = "";
            this.phone = "";
            this.ngo = "";
            this.province = "";
            this.class = "";
            this.studentNumber = "";
            this.profile_img = "";
            this.previewImage = null;
            this.no_firstname = false;
            this.no_lastname = false;
            this.no_batch = false;
            this.no_gender = false;
            this.no_email = false;
            this.no_phone = false;
            this.no_province = false;
            this.no_class = false;
            this.no_id = false;
            this.no_ngo = false;
            this.uniqueEmail = false;
        },
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

        // get Data of student to put on Student Profile of Folder Teacher
        async getStudentToken() {
            await axios
                .get("user/" + sessionStorage.getItem("user_id"))
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
        async changeProfileImageStudent(event) {
            this.onUploadImageStudent(event.target.files[0]);
            this.getStudent();
            this.getStudentToken();
        },
        // uplaod image
        onUploadImageStudent(profile_img) {
            const profileImage = new FormData();
            profileImage.append("profile_img", profile_img);
            profileImage.append("_method", "PUT");
            axios
                .post(
                    "/updateStudentImage/" + sessionStorage.getItem("user_id"),
                    profileImage
                )
                .then((response) => {
                    console.log(response);
                    this.getStudent();
                    this.getStudentToken();
                });
        },
        onDownloadAllStudentAsPDF() {
            axios.get("getAllStudentToPDF").then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement("a");
                fileLink.href = fileURL;
                fileLink.setAttribute("download", "myPDF.pdf");
                document.body.appendChild(fileLink);
                fileLink.click();
                console.log(response.data);
            });
        },
        signOutStudent() {
            this.getStudent();
            sessionStorage.removeItem("user_id");
            sessionStorage.removeItem("student_token");
            router.push("/");
        },
  },
});
