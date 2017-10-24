const Mock = require('mockjs')
const config = require('../init.config');

const menus = [
  {
    id:1,
    name:'首页',
    route:'/',
    icon:'home'
  },
  {
    id:2,
    name:'内容',
    route:'/content',
    icon:'inbox'
  },{
    id:3,
    name:'栏目',
    route:'/column',
    icon:'appstore-o'
  },{
    id:4,
    name:'维护',
    route:'/maintain',
    icon:'paper-clip'
  },
  {
    id:5,
    name:'用户',
    route:'/users',
    icon:'user'
  },
  {
    id:6,
    name:'拓展',
    route:'/continuation',
    icon:'share-alt'
  },
  {
    id:7,
    name:'数据',
    route:'/databases',
    icon:'bar-chart'
  },
  {
    id:8,
    name:'模板',
    route:'/template',
    icon:'credit-card'
  },
  {
    id:9,
    name:'资源',
    route:'/users',
    icon:'rocket'
  },
  {
    id:10,
    name:'配置',
    route:'/setup',
    icon:'setting'
  },
]

module.exports = {
  [`GET ${config.apiprefix}/menus`](req,res){
    res.status(200).json(menus)
  }
}
