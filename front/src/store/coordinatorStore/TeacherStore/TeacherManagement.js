
import { defineStore } from 'pinia'
import axios from "@/axios-http"
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
    position: "",
    phone: null,
    created_at:null,
    searchLabel: null,
    search: null,
    user_id: null,
    dataEdit: {}
  }),
  getters: {
    //
     /* search by name and position */
    //  
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
            (student) => student.user.first_name == this.search
          );
        }
        return result;
      }
    },
    // -----------------------------
  },
  actions: {
    async getTeacher() {
      const data = await axios.get('teacher')
      this.teachers = data.data
      // this.getData()
    },
    onCreate() {
      this.isTrue = true;
      this.isShow = false;
      console.log('clicked on onCreate Button')
    },
    onCancel() {
      this.isTrue = false
      this.isEditOpen = false
    },
    /**
     * @todo to open edit or delete dropdown
     */
    isOpen(id) {
      this.show = true
      this.id = id
      console.log('isOpen id = ' + id)
    },
    /**
     * @todo create new teacher
     * @return new data teacher
     */
    createTeacher() {
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
        console.log(this.profile_img);
        alert('Create new teacher successfully!')
        this.isTrue = false
        this.previewImage = null
        this.profile_img = ''
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.phone = null
        this.position = ''
        this.gender = ''
        this.getTeacher()
      })
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
          alert('Delete Successfully on id : ' + id)
        });
      })
    },
    /**
     * @todo get data user for edit
     */
    getTeacherData(id) {
      axios.get(process.env.VUE_APP_API_URL + 'teacher/' + id).then((res) => {
        this.dataEdit = res.data
        console.log(res.data);
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
      console.log(teacher);
      axios.post('updateteacher/' + id, teacher).then(() => {
        console.log('update success');
        this.isTrue = false
        this.profile_img = ''
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.phone = null
        this.position = ''
        this.previewImage = null
        this.isEditOpen = false
        this.show = false
        this.getTeacher()
        this.onCancel()
      })
    },

    /**
     * @todo Upload Image
     * @return show image for preview
     */
    uploadImage(e) {
      alert('hello world')
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },
    async getData(id){
        const data = await axios.get('teacher/'+id)
        // check only role 2 that represent to teacher
        if(data.data.user.role==2){
          this.profile_img = data.data.user.profile_img
          this.first_name = data.data.user.first_name
          this.last_name = data.data.user.last_name
          this.email = data.data.user.email
          this.position = data.data.position
          this.created_at = data.data.created_at
        }
    }
  }
});
