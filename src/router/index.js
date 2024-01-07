import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddUsersView from '../views/AddUsersView.vue'
import UpdateUsersView from '../views/UpdateUsersView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addnewuser',
      name: 'addnewuser',
      component: AddUsersView
    },
    {
      path: '/updateuser/:id?',
      name: 'updateuser',
      component: UpdateUsersView
    }
  ]
})

export default router
