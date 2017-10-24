import React from 'react';
import styles from './Header.less';
import Link from 'dva/router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Sider } = Layout


function Head({app,loading}) {
  function getHeaderMenu(app) {
    console.log(loading);
    if(app.menus){
      const MenuItems = app.menus.data.map(function (item,index,arr) {
        return (
          <Menu.Item key={index+1} >
            <a href={item.route}>
              <Icon type={item.icon} style={{marginRight:0,fontSize:'24px',marginTop:'25px',marginBottom:'8px'}}/>
              <span style={{lineHeight:1,marginBottom:'16px'}}>{item.name}</span>
            </a>
          </Menu.Item>
        )
      })
      return MenuItems
    }

  }
  const headerMenu = getHeaderMenu(app);

  return (
    <Header className="header" style={{height:'92px',lineHeight:1,padding:0,borderBottom:'2px solid #09488a'}}>
      <div className={styles.logo}></div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={['1']}
        defaultSelectedKeys={['1']}
        style={{ height: '92px',textAlign:'center',borderBottom:'2px solid #09488a' }}
      >
        {headerMenu}
      </Menu>
    </Header>
  );
}

export default Head;
