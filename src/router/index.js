import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {

    pat: '/',
    name:'HomePage',
    component:Home

  },
  {
    path: '/favorite', name:'FavoritePage', component: () => import('@/views/Favorite.vue')
  },
  {
    path: '/purchases', name:'PurchasesPage', component: () => import('@/views/Purchases.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
export default router