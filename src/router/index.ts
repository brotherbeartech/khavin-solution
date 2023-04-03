import { createRouter, createWebHistory } from 'vue-router'
import CompanyComponent from '../components/company/Company-page.vue';
import HomeComponent from '../components/home/home.vue';
import KangNGPageComponent from '../components/products/kangng.page.vue';
import EveAssistantComponent from '../components/products/assistant-eve.page.vue';


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
      path: '/kangng',
      name: 'kangng',
      component: KangNGPageComponent
    },
    {
      path: '/evy',
      name: 'assistantEve',
      component: EveAssistantComponent
    }
  ]
})

export default router
