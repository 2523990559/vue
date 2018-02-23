import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Date from '@/view/Date/index'
import Search from '@/view/Search/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: '/',
        name: '日期',
        component: Date,
        meta: {
          activeName: '日期'
        }
      },
      {
        path: '/Search',
        name: '搜索',
        component: Search,
        meta: {
          activeName: '搜索'
        }
      }
    ]
  }]
})
