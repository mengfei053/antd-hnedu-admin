const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name:'后台管理系统测试pull request',
  prefix:'hndeuAdmin',
  footerText:'',
  logo:'/logo.png',
  apiprefix:APIV1,
  api:{
    menus:`${APIV1}/menus`,
    dashboard:`${APIV1}/dashboard`,
    contents:`${APIV1}/contents`,
    column:`${APIV1}/column`,
    configpage:`${APIV1}/configpage`,
    datacenter:`${APIV1}/datacenter`,
    expansion:`${APIV1}/expansion`,
    maintain:`${APIV1}/maintain`,
    resources:`${APIV1}/resources`,
    teplpages:`${APIV1}/teplpages`,
    userpages:`${APIV1}/userpages`,
  }
}
