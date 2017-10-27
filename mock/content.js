/**
 * Created by MHF on 2017/10/25.
 */
const Mock = require('mockjs')
const config = require('../init.config');

const contents = {
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
  ],
  tableData : [{
    key: '1',
    id:'1',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '2',
    id:'2',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '3',
    id:'3',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '4',
    id:'4',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '5',
    id:'5',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '6',
    id:'6',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '7',
    id:'7',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '8',
    id:'8',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '9',
    id:'9',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '10',
    id:'10',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '11',
    id:'11',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '12',
    id:'12',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '13',
    id:'13',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '14',
    id:'14',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '15',
    id:'15',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '16',
    id:'16',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '17',
    id:'17',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '18',
    id:'18',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },{
    key: '19',
    id:'19',
    title: '[校园建设] 校园智能管控系统',
    level: 3,
    type:'产品服务',
    publisher:'admin',
    clickcount:0,
    publishtime:'2017-09-26',
    state:'已终审',
    staticpage:'需要生成',
  },]
}
module.exports = {
  [`GET ${config.apiprefix}/contents`](req,res){
    res.json(contents)
  }
}
