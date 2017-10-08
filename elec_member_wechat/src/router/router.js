import Vue from 'vue'
import Router from 'vue-router'
const member = r => require.ensure([], () => r(require('../pages/member/member')), 'member')
const userInfo = r => require.ensure([], () => r(require('../pages/userInfo/userInfo')), 'userInfo')
const changePhone = r => require.ensure([], () => r(require('../pages/changPhone/changePhone')), 'changePhone')
const changeSuccess = r => require.ensure([], () => r(require('../pages/success/success')), 'changeSuccess')
const registerInfo = r => require.ensure([], () => r(require('../pages/userBasicInfo/userBasicInfo')), 'registerInfo')
const registerSucc = r => require.ensure([], () => r(require('../pages/registerSuccess/success.vue')), 'registerSucc')
const register = r => require.ensure([], () => r(require('../pages/register/register.vue')), 'register')
const squareInfo = r => require.ensure([], () => r(require('../pages/squareInfo/squareInfo')), 'squareInfo')
const getPosition = r => require.ensure([], () => r(require('../pages/position/position')), 'getPosition')
const sellers = r => require.ensure([], () => r(require('../pages/sellers/sellers')), 'sellers')
Vue.use(Router)

export default new Router({
  mode:'history',//更改模式，默认为hash
  routes: [
    //地址为空时跳转member页面
    {
      path: '',
      redirect: '/member'
    },
    {
      path: '/member',
      component: member,
    },
    {
      path: '/userInfo',
      component: userInfo,
    /*  children:[
        {
          path:'/userInfo/changePhone',
          component:changePhone,
        }
      ]*/
    },
     {
      path: '/changePhone',
      component:changePhone,
     },
    {
      path: '/changeSuccess',
      component:changeSuccess,
    },
    {
       //注册
      path: '/register',
      component:register,
    },
    {
      //注册资料填写
      path: '/registerInfo',
      component:registerInfo,
    },
    {
      //注册成功
      path:'/registerSucc',
      component:registerSucc
    },
    {
      //商场简介
      path:'/squareInfo',
      component:squareInfo,
    },
    {
      //入驻商户(列表)
      path:'/sellers',
      component:sellers,
    },



  ]
})
