import { defineStore } from 'pinia'
import axios from "@/axios-http"
import { useToast,POSITION  } from "vue-toastification";
import router from "@/router";
const toast = useToast();
export const teacherstore = defineStore('teacher', {
  state: () => ({
    teachers: [],
    isEditOpen: false,
    id: null,
    show: false,
    isTrue: false,
    isShow: true,
    isEdit: false,
    previewImage: null,
    user_profile: null,
    profile_img: '',
    first_name: "",
    last_name: "",
    email: "",
    gender: "male",
    position: null,
    phone: null,
    created_at:null,
    searchLabel: 'name',
    search: null,
    user_id: null,
    dataEdit: {},
    displayTeachers:[],
    adminId:sessionStorage.getItem("user_id"),

    // ===============teacher validation==============
    no_firstname:false,
    no_lastname:false,
    no_position:false,
    no_email:false,
    no_phone:false,
    uniqueEmail:false,
  }),
  getters: {
    /**
     * @todo search by name and position
    */  
     searchDataTeacher() {
      let result = "";
      if (!this.search || this.searchLabel == "all") {
        return this.teachers;
      } else if (this.searchLabel) {
        //search by position 
        if (this.searchLabel == "position") {
          result = this.teachers.filter(({ position }) =>
            position.toLowerCase().includes(this.search.toLowerCase())
          );
        } 
        // search by name
        else if (this.searchLabel == "name") {
          result = this.teachers.filter(
            (student) => (student.user.first_name+' '+student.user.last_name).toLowerCase().includes(this.search.toLowerCase())
          );
        }
        return result;
      }
    },
    

    

  },
  actions: {
    /**
     * @todo get all data of teachers
     */
    async getTeacher() {
      const data = await axios.get('teacher')
      this.teachers = data.data
      this.getDatTeacherToPRofile()
      this.getData()

    },
    /**
     * @todo show form create teacher
     */
    onCreate() {
      this.isTrue = true;
      this.isShow = false;
      console.log('clicked on onCreate Button')
    },

    /**
     * @todo cancel on user action edit and delete
     */
    onCancel() {
      this.clearForm()
      this.isTrue = false
      this.isEditOpen = false
      this.show = false
    },
    /**
     * @todo to open edit or delete dropdown
     */
    isOpen(id) {
      this.show = !this.show
      this.id = id
      console.log('isOpen id = ' + id)
    },

    /**
     * @todo create new teacher
     * @return new data teacher
     */
    createTeacher() {
    /**
     * @todo  unique Email.
     * 
     */
     for(let email of this.teachers){
      if(email.user.email===this.email){
         this.uniqueEmail=true
      }
    }
    if(this.uniqueEmail){
      toast.error("this email already created!",{position: POSITION.TOP_CENTER, timeout: 2500})
    }

    /**
     * @todo  validation create student.
     * 
     */
      if((this.first_name!="" && this.last_name!="" && this.email && this.position!=null && this.phone !=null) && !this.uniqueEmail){
          let teacher = new FormData();
          teacher.append("profile_img", this.profile_img);
          teacher.append("first_name", this.first_name);
          teacher.append("last_name", this.last_name);
          teacher.append("email", this.email);
          teacher.append("gender", this.gender);
          teacher.append("phone", this.phone);
          teacher.append("position", this.position)
          teacher.append("password", 123456789);
          teacher.append("role", 2)
          axios.post(process.env.VUE_APP_API_URL + 'user', teacher).then(() => {
            this.isTrue = false
            this.clearForm()
            this.getTeacher()
            toast.success("Create teacher successfull",{position: POSITION.TOP_CENTER, timeout: 2500})
          })
      }else{
        if(this.uniqueEmail){
          this.uniqueEmail = false
        }else{
          toast.error("Please enter in field!",{position: POSITION.TOP_CENTER, timeout: 2000})
        }
        if(this.first_name==""){
           this.no_firstname=true;
        }else{
          this.no_firstname=false
        }
        if(this.last_name==""){
          this.no_lastname=true;
        }else{
         this.no_lastname=false
        }
        if(this.email==""){
          this.no_email=true;
        }else{
          this.no_email=false
        }
        if(this.position==null){
          this.no_position=true;
        }else{
          this.no_position=false
        }
        if(this.phone==null){
          this.no_phone=true;
        }else{
          this.no_phone=false
        }
      }
    },

    /**
     * @todo to delete teacher by id
     * @return all data of teacher after delete
     */
    deleteTeacher(id) {
      axios.get(process.env.VUE_APP_API_URL + 'teacher/' + id).then((res) => {
        const userId = res.data.user['id']
        axios.delete(process.env.VUE_APP_API_URL + 'user/' + userId).then(() => {
          this.getTeacher()
        });
      })
      this.show = false
    },
    /**
     * @todo get data user for edit
     */
    getTeacherData(id) {
      axios.get(process.env.VUE_APP_API_URL + 'teacher/' + id).then((res) => {
        this.dataEdit = res.data
        this.first_name = this.dataEdit.user.first_name;
        this.last_name = this.dataEdit.user.last_name;
        this.email = this.dataEdit.user.email;
        this.position = this.dataEdit.position;
        this.gender = this.dataEdit.user.gender;
        this.phone = this.dataEdit.phone;
        this.user_profile = this.dataEdit.user.profile_img
      })
    },
    /**
     * @todo to open form to edit teacher 
     * @return form of teacher's data
     */
    openEdit(id) {
      this.isEditOpen = true;
      this.getTeacherData(id)
    },

    /**
     * @todo update teacher
     */
    updateTeacher(id) {
      let teacher = new FormData();
      teacher.append("profile_img", this.profile_img);
      teacher.append("first_name", this.first_name);
      teacher.append("last_name", this.last_name);
      teacher.append("email", this.email);
      teacher.append("gender", this.gender);
      teacher.append("phone", this.phone);
      teacher.append("_method", 'PUT');
      teacher.append("position", this.position)
      teacher.append("role", 2)
      axios.post('updateteacher/' + id, teacher).then(() => {
        this.isTrue = false
        this.isEditOpen = false
        this.show = false
        this.clearForm()
        this.getTeacher()
        this.onCancel()
        toast.success("Update teacher successfull",{position: POSITION.TOP_CENTER, timeout: 2000})
      })
    },
    /**
     * @todo Upload Image
     * @return show image for preview
     */
    uploadImage(e) {
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },
    /**
     * 
     * @todo get data from teacher 
     */
    async getData(id){
        const data = await axios.get('teacher/'+id)
        if(data.data.user.role==2){
          this.profile_img = data.data.user.profile_img
          this.first_name = data.data.user.first_name
          this.last_name = data.data.user.last_name
          this.email = data.data.user.email
          this.position = data.data.position
          this.created_at = data.data.created_at
        }
    },
    /** 
    // get this data to TeacherProfile in Folder Teacher to get only one data
    */
    async getDatTeacherToPRofile(){
        const data = await axios.get('user/'+sessionStorage.getItem('user_id'))
        if(data.data.role==2){
          this.profile_img = data.data.profile_img
          this.first_name = data.data.first_name
          this.last_name = data.data.last_name
          this.email = data.data.email
          this.position = data.data.teachers.position
          this.created_at = data.data.created_at
        }
    },
    async changeProfileTeacherImage(event) {
      this.onUploadTeacherImage(event.target.files[0]);
      this.getTeacher();
    },
    // uplaod image
    onUploadTeacherImage(profile_img) {
      const profileImage = new FormData();
      profileImage.append("profile_img", profile_img);
      profileImage.append("_method", "PUT");
      axios.post("/updateTeacherImage/" + sessionStorage.getItem("user_id"), profileImage)
          this.getTeacher();
    },
    /**
     * @todo clear form input
     */
    clearForm(){
      this.profile_img = ''
      this.first_name = ''
      this.last_name = ''
      this.email = ''
      this.position = ''
      this.phone = null
      this.previewImage = null
    },

    /**
     * @todo Display all teacher list
     * @return see other teachers
     */
    async displayTeachersList(){
      const data = await axios.get('teacher')
      this.displayTeachers=data.data
    },
    signOut(){
      this.getTeacher()
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('teacher_token');
      router.push("/");
},
  }
});
