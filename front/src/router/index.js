import { createRouter, createWebHistory } from 'vue-router'
import ManageStudent from '@/views/Cordinator/ManageStudent/ManageStudent.vue'
import ManageTeacher from '@/views/Cordinator/ManageTeacher/ManageTeacher.vue'
import StudentDetail from "@/components/Cordinator/StudentList/StudentDetail.vue"
import ProfileCoordinator from "@/components/Cordinator/ProfileCoordinator.vue"
import ProfileTeacher from "@/components/Cordinator/TeacherList/ProfileTeacher.vue"
import TeacherViewVue from '@/views/Teacher/TeacherView.vue'
import CoordinatorViewVue from '@/views/Cordinator/CoordinatorView.vue'
import StudentViewVue from '@/views/Student/StudentView.vue'
import LoginAuthenticationVue from '@/components/authentication/LoginAuthentication.vue'

const routes = [
  {
    path:'/',
    name:'login',
    component:LoginAuthenticationVue,
  },
  {
    path: '/teacherViewVue',
    name: 'teacherViewVue',
    component: TeacherViewVue,
    children:[
      {
        path: '/teacherManageStusent',
        name: 'teacherManageStusent',
        component: ManageStudent
      }
      ,
    ]
  },
  {
    path: '/studentViewVue',
    name: 'studentViewVue',
    component: StudentViewVue,
    children:[
      
    ]
  },
  {
    path: '/coordinatorViewVue',
    name: 'coordinatorViewVue',
    component: CoordinatorViewVue,
    children:[
      {
        path: '/managestudent',
        name: 'managestudent',
        component: ManageStudent
      },
      {
        path: '/manageteacher',
        name: 'manageteacher',
        component: ManageTeacher
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
      {
        path: '/studentdetail/:id',
        name: 'studentdetail',
        component: StudentDetail
      }
      ,
    ]
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
