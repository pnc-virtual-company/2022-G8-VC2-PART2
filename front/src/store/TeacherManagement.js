
import { defineStore } from 'pinia'
import axios from "@/axios-http"

export const teacherstore = defineStore('teacher', {
  state: () => ({ 
    teachers: [],
    id:null,
    show:false,
    isTrue:false,
    isShow:true,
    previewImage:null,
    profile_img:'',
    first_name:"",
    last_name:"",
    email:"",
    gender:"male",
    position:"",
    phone:"",
  }),
  getters: {},
  actions:{
    async getTeacher(){
        const data = await axios.get('teacher') 
        this.teachers = data.data
    },
    onCreate(){
    this.isTrue= true;
    this.isShow = false;
    console.log('clicked on onCreate Button')
    },
    onCancel(){
      this.isTrue=false
    },
    /**
     * @todo create new teacher
     * @return new data teacher
     */
    createTeacher(){
      let teacher = new FormData();
      teacher.append("profile_img", this.profile_img);
      teacher.append("first_name", this.first_name);
      teacher.append("last_name", this.last_name);
      teacher.append("email", this.email);
      teacher.append("gender", this.gender);
      teacher.append("phone", this.phone);
      teacher.append("position", this.position)
      teacher.append("password", 123456789);
      teacher.append("role",2)
      axios.post(process.env.VUE_APP_API_URL+'user', teacher).then(()=>{
        alert('Create new teacher successfully!')
        this.isShow = true;
        this.show = true;
        this.getTeacher()
      })
    },
    // /**
    //  * @todo to delete teacher by id
    //  * @return all data of teacher after delete
    //  */
    deleteTeacher(id) {
      axios.get(process.env.VUE_APP_API_URL+'teacher/' + id).then((res)=>{
        const userId = res.data.user['id']
        axios.delete(process.env.VUE_APP_API_URL+'user/' + userId).then(()=>{
        this.getTeacher()
      });
      })
    },
    /**
     * @todo Upload Image
     * @return show image for preview
     */
    uploadImage(e){
      this.profile_img = e.target.files[0]
      this.previewImage = URL.createObjectURL(this.profile_img)
    },
  }
});
