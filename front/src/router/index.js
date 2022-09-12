import { createRouter, createWebHistory } from 'vue-router'
import Cordinator from '@/views/Cordinator/CordinatorView.vue'
import ManageStudent from '@/views/Cordinator/ManageStudent.vue'
import ManageTeacher from '@/views/Cordinator/ManageTeacher.vue'
import StudentFollowUp from '@/views/Cordinator/StudentFollowUp.vue'
const routes = [
  {
    path: '/',
    name: 'card',
    component: Cordinator
  },
  {
    path: '/managestudent',
    name: 'managestudent',
    component: ManageStudent
  }
  ,
  {
    path: '/manageteacher',
    name: 'manageteacher',
    component: ManageTeacher
  },
  {
    path: '/studentFollowUp',
    name: 'studentFollowUp',
    component: StudentFollowUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
