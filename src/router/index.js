import Vue from 'vue'
import Router from 'vue-router'
import Fornecedor from '@/components/Fornecedor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fornecedor',
      name: 'Fornecedor',
      component: Fornecedor
    }
  ]
})
