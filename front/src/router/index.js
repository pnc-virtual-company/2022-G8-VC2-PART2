import { createRouter, createWebHistory } from 'vue-router'
import ManageStudent from '@/views/Cordinator/ManageStudent/ManageStudent.vue'
import ManageTeacher from '@/views/Cordinator/ManageTeacher/ManageTeacher.vue'
import StudentDetail from "@/components/Cordinator/StudentList/StudentDetail.vue"
import ProfileCoordinator from "@/components/Cordinator/ProfileCoordinator.vue"
import ProfileTeacher from "@/components/Cordinator/TeacherList/ProfileTeacher.vue"
const routes = [
  {
    path: '/managestudent',
    name: 'managestudent',
    component: ManageStudent,
  }
  ,
  {
    path: '/manageteacher',
    name: 'manageteacher',
    component: ManageTeacher
  },
  {
    path: '/studentdetail/:id',
    name: 'studentdetail',
    component: StudentDetail
  },
  {
    path: '/profilecoordinator',
    name: 'profilecoordinator',
    component: ProfileCoordinator
  },
  {
    path: '/profileTeacher/:id',
    name: 'profileTeacher',
    component: ProfileTeacher
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
