import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/tabbar/home';
import cart from '../components/tabbar/cart';
import member from '../components/tabbar/member';
import search from '../components/tabbar/search';
import newsCom from '../components/newsCom/newesCom';
import newsInfo from '../components/newsCom/newsInfo';

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
    },
    {
      path: '/home/newsCom',
      component: newsCom
    },
    {
      path: '/home/newsCom/newsInfo/:id',
      component: newsInfo
    }
  ]
})

