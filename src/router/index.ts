import { createRouter, createWebHistory } from 'vue-router'
import CompanyComponent from '../components/company/Company-page.vue';
import HomeComponent from '../components/home/home.vue';
import ProductComponent from '../components/products/products-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyComponent
    },
    {
      path: '/products',
      name: 'products',
      component: ProductComponent
    }
  ]
})

export default router
