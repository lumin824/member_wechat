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

    if(!code){
      return res.sendStatus(404);
    }

    let { body } = await httpGet(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${AppID}&secret=${AppSecret}&code=${code}&grant_type=authorization_code`)

    let wx_nickname;
    let { errcode: wx_errno, openid: wx_openid, access_token } = JSON.parse(body);
    if(wx_errno){
      return res.sendStatus(404);
    }
    return res.redirect(`/register?wx_openid=${wx_openid}`)
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
