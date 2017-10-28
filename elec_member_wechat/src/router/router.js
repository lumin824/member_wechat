import Vue from 'vue'
import Router from 'vue-router'
const member = r => require.ensure([], () => r(require('../pages/member/member')), 'member')
const userInfo = r => require.ensure([], () => r(require('../pages/userInfo/userInfo')), 'userInfo')
const changePhone = r => require.ensure([], () => r(require('../pages/changPhone/changePhone')), 'changePhone')
const changeSuccess = r => require.ensure([], () => r(require('../pages/success/success')), 'changeSuccess')
const registerInfo = r => require.ensure([], () => r(require('../pages/userBasicInfo/userBasicInfo')), 'registerInfo')
const registerSucc = r => require.ensure([], () => r(require('../pages/registerSuccess/success')), 'registerSucc')
const staRegSuccess =  r => require.ensure([], () => r(require('../pages/staRegSuccess/success')), 'staRegSuccess')
const register = r => require.ensure([], () => r(require('../pages/register/register')), 'register')
const staffRegister = r => require.ensure([], () => r(require('../pages/staffRegister/staffRegister')), 'staffRegister')
const squareInfo = r => require.ensure([], () => r(require('../pages/squareInfo/squareInfo')), 'squareInfo')
const getPosition = r => require.ensure([], () => r(require('../pages/position/position')), 'getPosition')
const sellers = r => require.ensure([], () => r(require('../pages/sellers/sellers')), 'sellers')
const sell = r => require.ensure([], () => r(require('../pages/sell/sell')), 'sell')
const ticketsUpload = r => require.ensure([], () => r(require('../pages/ticketsUpload/ticketsUpload')), 'sell')
const memberLevel = r => require.ensure([], () => r(require('../pages/memberLevel/memberLevel')), 'memberLevel')
const voucher = r => require.ensure([], () => r(require('../pages/voucher/voucher')), 'voucher')
const voucherDetail = r => require.ensure([], () => r(require('../pages/voucherDetail/voucherDetail')), 'voucherDetail')
const memVoucher = r => require.ensure([], () => r(require('../pages/memVoucher/memVoucher')), 'memVoucher')
const activities = r => require.ensure([], () => r(require('../pages/activities/activities')), 'activities')
const activeDetail = r => require.ensure([], () => r(require('../pages/activeDetail/activeDetail')), 'activeDetail')
const memActivities = r => require.ensure([], () => r(require('../pages/memActivities/memActivities')), 'memActivities')
const memVouDetail = r => require.ensure([], () => r(require('../pages/memVouDetail/memVouDetail')), 'memVouDetail')
const login = r => require.ensure([], () => r(require('../pages/login/login')), '/login')
const test = r => require.ensure([], () => r(require('../pages/test/test')), 'test')
const car = r => require.ensure([], () => r(require('../pages/car/car')), 'car')
const carDetail = r => require.ensure([], () => r(require('../pages/car/carDetail')), 'carDetail')
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
      //核销人员注册
      path:'/staffRegister',
      component:staffRegister,
    },
    {
      //注册成功
      path:'/staRegSuccess',
      component:staRegSuccess,
    },

    {
       //会员注册
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
      //定位
     path:'/getPosition',
     /*:longitude/:latitude*/
     component:getPosition,
    },
    {
      //入驻商户(列表)
      path:'/sellers',
      component:sellers,
    },
    {
      path:'/sell',
      component:sell,
    },
    {
      //小票上传
      path:'/ticketsUpload',
      component:ticketsUpload,
    },
    {
      //我的等级
      path:'/memberLevel',
      component:memberLevel,
    },
     //优惠券
    {
      path:'/voucher',
      component:voucher
    },
    //优惠券(会员)
    {
      path:'/memVoucher',
      component:memVoucher
    },
    //券详情
    {
      path:'/voucherDetail',
      component:voucherDetail
    },
    //最新活动
    {
      path:'/activities',
      component:activities
    },
    //我的活动
    {
      path:'/memActivities',
      component:memActivities
    },
    //活动详情
    {
      path:'/activeDetail',
      component:activeDetail
    },
    //活动详情
    {
      path:'/memVouDetail',
      component:memVouDetail
    },
    //登陆接口
    {
      path:'/login',
      component:login
    },
    {
      //测试
      path:'/test',
      component:test,
    },
    {
      //停车缴费
      path:'/car',
      component:car
    },
    {
      //停车缴费
      path:'/carDetail',
      component:carDetail
    }
  ]
})
