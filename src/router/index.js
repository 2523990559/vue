import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Date from '@/view/Date/index'
import Search from '@/view/Search/index'
import Login from '@/view/Login/index'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
        path: '/Date',
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
      },
      {
        path: '/',
        name: '登录测试页面',
        component: Login,
        meta: {
          activeName: '登录测试页面'
        }
      },
    ]
  }]
})
