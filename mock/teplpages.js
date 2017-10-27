/**
 * Created by MHF on 2017/10/25.
 */
const Mock = require('mockjs')
const config = require('../init.config');

const teplpages = {
  sidebar:[
    {
      id:1,
      name:'集团介绍',
      route:'/dashboard/introduce',
      icon:'home',
      children:null,
    },
    {
      id:2,
      name:'产品服务',
      route:'/dashboard/product',
      icon:'inbox',
      children:[
        {
          id:22,
          name:'资源',
          route:'/dashboard/product/zy',
          icon:'home',
          children:null,
        },{
          id:23,
          name:'管理',
          route:'/dashboard/product/gl',
          icon:'home',
          children:null,
        },{
          id:24,
          name:'校园介绍',
          route:'/dashboard/product/xyjs',
          icon:'home',
          children:null,
        },

      ],
    },{
      id:3,
      name:'解决方案',
      route:'/dashboard/solution',
      icon:'appstore-o',
      children:null,
    },{
      id:4,
      name:'新闻动态',
      route:'/dashboard/news',
      icon:'paper-clip',
      children:null,
    },
    {
      id:5,
      name:'成功案例',
      route:'/dashboard/case',
      icon:'user',
      children:null,
    },
    {
      id:6,
      name:'联系我们',
      route:'/dashboard/contactus',
      icon:'share-alt',
      children:null,
    },
  ]
}
module.exports = {
  [`GET ${config.apiprefix}/teplpages`](req,res){
    res.json(teplpages)
  }
}
