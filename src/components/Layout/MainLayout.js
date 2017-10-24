import React from 'react'
import styles from './MainLayout.less'
import {Layout, Menu, Breadcrumb, Icon} from 'antd'
import Head  from './Header'
const {SubMenu} = Menu;
const { Content, Sider} = Layout

function MainLayout({children, app, loading}) {
  const HeaderProps = {
    app,
    loading
  }
  return (
    <Layout>
      <Head {...HeaderProps}/>
      <Layout>
        <Sider width={200} style={{background: '#fff'}}>
          <div className=""
               style={{backgroundColor: '#1787df', textAlign: 'center', lineHeight: '38px', color: '#7ec2f3'}}>
            2017年10月17日 星期二
          </div>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
          >
            <SubMenu key="sub1" title={<span><Icon type="user"/>集团介绍</span>}>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop"/>产品服务</span>}>
              <Menu.Item key="5">资源</Menu.Item>
              <Menu.Item key="6">管理</Menu.Item>
              <Menu.Item key="7">校园介绍</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification"/>解决方案</span>}>

            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 600}}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout;
