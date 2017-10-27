import React from 'react'
import styles from './PageLayout.less'
import {Layout, Breadcrumb} from 'antd'
import Sidebar from '../../Siderbar/Sidebar'
const { Content} = Layout

function PageLayout({children,sidebar}) {
  const SidebarProps = {
    sidebar
  }
  return (
    <Layout>
      <Sidebar {...SidebarProps}/>
      <Layout style={{padding: '0 24px 0 224px'}}>
        <div className="toptip">
          <Breadcrumb>
            <Breadcrumb.Item>当前位置</Breadcrumb.Item>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>欢迎页</Breadcrumb.Item>
          </Breadcrumb>
          <div className="logintime">
            您上次登录时间是：2017-10-17
          </div>
          <div className="showram">
            已用内存:<span className="showramD">1027.12MB</span>&nbsp;&nbsp;
            剩余内存:<span className="showramD">最大内存: 3641MB</span>&nbsp;&nbsp;
            最大内存:<span className="showramD">3641MB</span>
          </div>
          <div className="gofront">
            <span>河南现代教育科技集团</span>
            <span><a href="">查看首页</a></span>
          </div>
        </div>
        <Content style={{ margin: '0 -24px'}}>
          { children }
        </Content>
      </Layout>
    </Layout>
  )
}

export default PageLayout;
