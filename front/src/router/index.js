import { createRouter, createWebHistory } from 'vue-router'
import Cordinator from '@/views/Cordinator/CoordinatorView.vue'
import ManageStudent from '@/views/Cordinator/ManageStudent/ManageStudent.vue'
import ManageTeacher from '@/views/Cordinator/ManageTeacher/ManageTeacher.vue'
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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
