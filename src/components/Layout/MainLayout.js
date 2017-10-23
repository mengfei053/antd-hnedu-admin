import React from 'react'
import styles from './MainLayout.less'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

function MainLayout({children , location}) {
  return (
    <Layout>
      <Header className="header" style={{height:'92px',lineHeight:1,padding:0}}>
        <div className={styles.logo}></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ height: '92px',textAlign:'center' }}
        >
          <Menu.Item key="1">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>内容</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>栏目</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>维护</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>用户</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>拓展</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>数据</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>模板</span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>资源</span>
          </Menu.Item>
          <Menu.Item key="10">
            <Icon type="home" style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
            <span style={{lineHeight:1,marginBottom:'23px'}}>配置</span>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <div className="" style={{backgroundColor:'#1787df',textAlign:'center',lineHeight:'38px',color:'#7ec2f3'}}>2017年10月17日  星期二</div>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />集团介绍</span>}>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />产品服务</span>}>
              <Menu.Item key="5">资源</Menu.Item>
              <Menu.Item key="6">管理</Menu.Item>
              <Menu.Item key="7">校园介绍</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />解决方案</span>}>

            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout;
