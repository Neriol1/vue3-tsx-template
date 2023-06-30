import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router/auto'

const router = createRouter({
  history: createWebHashHistory(),
  extendRoutes: (routes: RouteRecordRaw[]) => [
    ...routes,
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

export default router
