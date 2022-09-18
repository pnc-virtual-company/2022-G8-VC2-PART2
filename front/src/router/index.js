import { createRouter, createWebHistory } from 'vue-router'
import ManageStudent from '@/views/Cordinator/ManageStudent/ManageStudent.vue'
import ManageTeacher from '@/views/Cordinator/ManageTeacher/ManageTeacher.vue'
import ProfileCoordinator from "@/components/Cordinator/ProfileCoordinator.vue"
const routes = [{
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

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router