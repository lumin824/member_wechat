import Vue from 'vue'
import Router from 'vue-router'
/*import  Header from '../components/header/header.vue'
import  MyInfo from '../components/common/myInfo.vue'
import  MemberNav from '../components/common/memberNav.vue'
import  UserIndex from '../components/common/userindex.vue'
import  RegisterIndex from '../components/common/index.vue'
import  RegisterSuccess from '../components/common/success.vue'
import  RegisterData from '../components/common/data.vue'*/
const member = r => require.ensure([], () => r(require('../pages/member/member')), 'member')
const userInfo = r => require.ensure([], () => r(require('../pages/userInfo/userInfo')), 'userInfo')
const changePhone = r => require.ensure([], () => r(require('../pages/changPhone/changePhone')), 'changePhone')
const changeSuccess = r => require.ensure([], () => r(require('../pages/success/success')), 'changeSuccess')
const registerInfo = r => require.ensure([], () => r(require('../pages/userBasicInfo/userBasicInfo')), 'registerInfo')
const registerSucc = r => require.ensure([], () => r(require('../pages/registerSuccess/success.vue')), 'registerSucc')
const register = r => require.ensure([], () => r(require('../pages/register/register.vue')), 'register')
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


/*    {
      path: '/',
      name: 'Hello',
      component: Hello
    }*/
/*    {
      path:'/',
      components:{Header,MyInfo},
    },
    {
      path:'/userInfo',
      component:UserIndex,
    }*/




  ]
})
