import { createRouter, createWebHistory } from 'vue-router'
import ManageStudent from '@/views/Cordinator/ManageStudent/ManageStudent.vue'
import ManageTeacher from '@/views/Cordinator/ManageTeacher/ManageTeacher.vue'
import StudentDetail from "@/components/Cordinator/StudentList/StudentDetail.vue"
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
    path: '/studentdetail',
    name: 'studentdetail',
    component: StudentDetail
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
