import CommonConfig from '../../../common/config'

import express from 'express'

import _ from 'lodash';
import moment from 'moment';
moment.locale('zh-cn');

const router = express.Router()

const map = {
  'code2openid.get': async (req, res, next) => {
    let { code } = req.query;
    let { AppID, AppSecret } = CommonConfig.WX

    return res.send(`${code}, ${AppID},${AppSecret}`)
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
