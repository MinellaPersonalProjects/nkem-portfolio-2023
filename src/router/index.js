// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/Resume.vue'),
      },
      // {
      //   path: '/experience',
      //   name: 'Experience',
      //   // route level code-splitting
      //   // this generates a separate chunk (Home-[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import('@/views/ExpView.vue'),
      // },
      // {
      //   path: '/projects',
      //   name: 'Project',
      //   // route level code-splitting
      //   // this generates a separate chunk (Home-[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import('@/views/ProjectView.vue'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
