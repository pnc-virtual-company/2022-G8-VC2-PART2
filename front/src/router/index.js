import { createRouter, createWebHistory } from "vue-router";
// -------------------------Coordinator Route-------------------------------
import CoordinatorViewVue from "@/views/Cordinator/CoordinatorView.vue";
import ProfileCoordinator from "@/components/Cordinator/ProfileCoordinator.vue";
import ManageCoordinator from "@/views/Cordinator/ManageCoordinator/ManageCoordinator.vue";
import ManageStudent from "@/views/Cordinator/ManageStudent/ManageStudent.vue";
import StudentDetail from "@/components/Cordinator/StudentList/StudentDetail.vue";
import StudentFollowupDetail from "@/components/Cordinator/StudentList/StudentFollowupDetail.vue";
import ManageTeacher from "@/views/Cordinator/ManageTeacher/ManageTeacher.vue";
import StudentFollowup from '@/views/Cordinator/StudentFollowup/StudentFollowupView.vue'
import FollowupHistory from '@/views/Cordinator/FollowupHistory/FollowupHistoryView.vue'
import CoordinatorDetail from "@/components/Cordinator/CoordinatorList/CoordinatorDetail.vue";
// --------------------------------------------------------------------------
// --------------------------Teacher Route-------------------------//
import TeacherViewVue from "@/views/Teacher/TeacherView.vue";
import ManageStudentVue from "@/views/Teacher/ManageStudent/ManageStudentView.vue";
import FollowupStudent from '@/views/Teacher/ManageStudent/StudentFollowupView.vue'
import ProfileTeacher from "@/components/Cordinator/TeacherList/ProfileTeacher.vue";
import ManageTeacherProfile from "@/components/Teacher/TeacherProfile.vue";
import DisplayListTeacher from "@/components/Teacher/DisplayListTeacher.vue";
import TeacherDetail from "@/components/Teacher/TeacherDetail.vue";
import RessetPasswordTeacherVue from "@/components/Teacher/RessetPasswordTeacher.vue";
// -------------------------Student Route------------------------------------
import StudentViewVue from "@/views/Student/StudentView.vue";
import ManageStudentProfile from "@/components/Teacher/ManageStudentProfile.vue";
// -------------------------Authentication--------------------------------------------
import LoginAuthenticationVue from "@/components/authentication/LoginAuthentication.vue";
import ForgetPasswordVue from "@/components/authentication/ForgetPassword.vue";
import ResetCoordinatorPasswordVue from "@/components/Cordinator/CoordinatorList/ResetCoordinatorPassword.vue";
import EditCoordinatorVue from "@/components/Cordinator/CoordinatorList/EditCoordinator.vue";
import RessetPasswordStudent from "@/components/Cordinator/StudentList/RessetPasswordStudent.vue"

// Route
const routes = [
  /*----------------------------Authentication------------------- */
  {
    path: "/",
    name: "login",
    component: LoginAuthenticationVue,
  },
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: ForgetPasswordVue,
  },
  /*teacher route*/
  {
    path: "/teacherViewVue",
    name: "teacherViewVue",
    component: TeacherViewVue,
    children: [
      {
        path: "/manageTeacherProfile",
        name: "manageTeacherProfile",
        component: ManageTeacherProfile,
        meta: {
          isTeacher: true,
        },
      },
      {
        path: "/teacherManageStudent",
        name: "teacherManageStudent",
        component: ManageStudentVue,
        meta: {
          isTeacher: true,
        },
      },
      {
        path: "/followupStudent",
        name: "followupStudent",
        component: FollowupStudent,
        meta: {
          isTeacher: true,
        },
      },
      {
        path: "/teacherViewStudentDetail/:id",
        name: "teacherViewStudentDetail",
        component: StudentDetail,
        meta: {
          isTeacher: true,
        },
      },
      {
        path: "/displaylistteacher",
        name: "displaylistteacher",
        component: DisplayListTeacher,
        meta: {
          isTeacher: true,
        },
      },
      {
        path: "/teacherdetail/:id",
        name: "teacherdetail",
        component: TeacherDetail,
        meta: {
          isTeacher: true,
        },
      },
      {
        path: "/ressetPasswordTeacherVue",
        name: "ressetPasswordTeacherVue",
        component: RessetPasswordTeacherVue,
        meta: {
          isTeacher: true,
        },
      },
    ],
    meta: {
      isTeacher: true,
    },
  },
  /* student route*/
  {
    path: "/studentViewVue",
    name: "studentViewVue",
    component: StudentViewVue,
    children: [
      {
        path: "/ManageStudentProfile",
        name: "ManageStudentProfile",
        component: ManageStudentProfile,
        meta: {
          isStudent: true,
        },
      },
      {
        path: "/ressetPasswordStudent",
        name: "ressetPasswordStudent",
        component: RessetPasswordStudent,
        meta: {
          isStudent: true,
        },
      },
    ],
    meta: {
      isStudent: true,
    },
  },
  /* coordinator route*/
  {
    path: "/coordinatorViewVue",
    name: "coordinatorViewVue",
    component: CoordinatorViewVue,
    children: [
      {
        path: "/resetCoordinatorPasswordVue",
        name: "resetCoordinatorPasswordVue",
        component: ResetCoordinatorPasswordVue,
      },
      {
        path: "/editCoordinatorVue",
        name: "editCoordinatorVue",
        component: EditCoordinatorVue,
      },
      {
        path: "/managecoordinator",
        name: "managecoordinator",
        component: ManageCoordinator,
      },
      {
        path: "/managestudent",
        name: "managestudent",
        component: ManageStudent,
        meta: {
          isCoordinator: true,
        },
      },
      {
        path: "/manageteacher",
        name: "manageteacher",
        component: ManageTeacher,
        meta: { isCoordinator: true },
      },
      {
        path: "/studentfollowup",
        name: "studentfollowup",
        component: StudentFollowup,
        meta: { isCoordinator: true },
      },
      {
        path: "/followuphistory",
        name: "followuphistory",
        component: FollowupHistory,
        meta: { isCoordinator: true },
      },
      {
        path: "/profilecoordinator",
        name: "profilecoordinator",
        component: ProfileCoordinator,
        meta: { isCoordinator: true },
      },
      {
        path: "/profileTeacher/:id",
        name: "profileTeacher",
        component: ProfileTeacher,
        meta: { isCoordinator: true },
      },
      {
        path: "/studentdetail/:id",
        name: "studentdetail",
        component: StudentDetail,
        meta: { isCoordinator: true },
      },
      {
        path: "/coordinatordetail/:id",
        name: "coordinatordetail",
        component: CoordinatorDetail,
        meta: { isCoordinator: true },
      },
      {
        path: "/StudentFollowupDetail/:id",
        name: "StudentFollowupDetail",
        component: StudentFollowupDetail,
        meta: { isCoordinator: true },
      },
    ],
    meta: { isCoordinator: true },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
/*---------------------------
//manage route of coordinator
----------------------------*/
router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem("coordinator_token")) {
    if (!to.meta.isCoordinator) {
      next();
    } else {
      next("/");
    }
  }

  if (sessionStorage.getItem("coordinator_token")) {
    if (to.meta.isCoordinator) {
      next();
    } else {
      next("/managestudent");
    }
  }
  //
  next();
});
/*----------------------
//manage route of student
-------------------------*/
router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem("student_token")) {
    if (!to.meta.isStudent) {
      next();
    } else {
      next("/");
    }
  }
  if (sessionStorage.getItem("student_token")) {
    if (to.meta.isStudent) {
      next();
    } else {
      next("/ManageStudentProfile");
    }
  }
  next();
});
/*-----------------------
// manage route of teacher
-------------------------*/
router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem("teacher_token")) {
    if (!to.meta.isTeacher) {
      next();
    } else {
      next("/");
    }
  }
  if (sessionStorage.getItem("teacher_token")) {
    if (to.meta.isTeacher) {
      next();
    } else {
      next("/teacherManageStudent");
    }
  }
  next();
});

export default router;
