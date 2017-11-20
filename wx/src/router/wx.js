import config from '../config';

import express from 'express'

import _ from 'lodash';
import moment from 'moment';
moment.locale('zh-cn');

const router = express.Router()

const map = {
  'code2openid.get': async (req, res, next) => {
    return res.send('错误的用户名或密码')
  },
}

_.forEach(map, (o, k)=>{
  const [ path, method = 'use' ] = k.split('.')
  router[method](`/${path}`, async (req, res, next) => {
    try{
      await o(req, res, next)
    }catch(e){
      next(e)
    }
  })
})

module.exports = router
