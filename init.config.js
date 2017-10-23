const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name:'后台管理系统',
  prefix:'hndeuAdmin',
  footerText:'',
  logo:'/logo.png',
  apiprefix:APIV1,
  api:{
    menus:`${APIV1}/menus`
  }
}
