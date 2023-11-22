import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'addUser',
      component: () => import('../views/user/AddUser.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },

    {
      path: '/user/list',
      name: 'userList',
      component: () => import('../views/user/UserList.vue')
    },

    {
      path: '/csv',
      name: 'csv',
      component: () => import('../views/user/Csv.vue')
    },
  ]
})

export default router
