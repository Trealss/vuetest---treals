import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/home';
import cart from '../components/cart';
import member from '../components/member';
import search from '../components/search';

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/member',
      component: member
    },
    {
      path: '/search',
      component: search
    }
  ]
})

