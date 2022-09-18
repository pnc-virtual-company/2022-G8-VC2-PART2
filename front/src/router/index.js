import { createRouter, createWebHistory } from "vue-router";
// -------------------------Coordinator Route-------------------------------
import CoordinatorViewVue from "@/views/Cordinator/CoordinatorView.vue";
import ProfileCoordinator from "@/components/Cordinator/ProfileCoordinator.vue";
import ManageStudent from "@/views/Cordinator/ManageStudent/ManageStudent.vue";
import ManageTeacher from "@/views/Cordinator/ManageTeacher/ManageTeacher.vue";
import StudentDetail from "@/components/Cordinator/StudentList/StudentDetail.vue";
// --------------------------------------------------------------------------
// --------------------------Teacher Route-------------------------//
import TeacherViewVue from "@/views/Teacher/TeacherView.vue";
import ManageStudentVue from "@/views/Teacher/ManageStudent/ManageStudentView.vue"
import ProfileTeacher from "@/components/Cordinator/TeacherList/ProfileTeacher.vue";
import ManageTeacherProfile from "@/components/Teacher/TeacherProfile.vue"
// -------------------------Student Route------------------------------------
import StudentViewVue from "@/views/Student/StudentView.vue";
import ManageStudentProfile from "@/components/Teacher/ManageStudentProfile.vue"
// -------------------------login--------------------------------------------
import LoginAuthenticationVue from "@/components/authentication/LoginAuthentication.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginAuthenticationVue,
  },
  // teacher route 
  {
    path: "/teacherViewVue",
    name: "teacherViewVue",
    component: TeacherViewVue,
    children: [
      {
        path: "/manageTeacherProfile",
        name: "manageTeacherProfile",
        component: ManageTeacherProfile,
      },
      {
        path: "/teacherManageStudent",
        name: "teacherManageStudent",
        component: ManageStudentVue,
      },
      {
        path: "/teacherViewStudentDetail/:id",
        name: "teacherViewStudentDetail",
        component: StudentDetail,
      },
      
    
    ],
  },
  // student route
  {
    path: "/studentViewVue",
    name: "studentViewVue",
    component: StudentViewVue,
    children: [
      {
        path: "/ManageStudentProfile",
        name: "ManageStudentProfile",
        component: ManageStudentProfile,
      },
    ],
  },
  // coordinator route
  {
    path: "/coordinatorViewVue",
    name: "coordinatorViewVue",
    component: CoordinatorViewVue,
    children: [
      {
        path: "/managestudent",
        name: "managestudent",
        component: ManageStudent,
      },
      {
        path: "/manageteacher",
        name: "manageteacher",
        component: ManageTeacher,
      },
      {
        path: "/profilecoordinator",
        name: "profilecoordinator",
        component: ProfileCoordinator,
      },
      {
        path: "/profileTeacher/:id",
        name: "profileTeacher",
        component: ProfileTeacher,
      },
      {
        path: "/studentdetail/:id",
        name: "studentdetail",
        component: StudentDetail,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
