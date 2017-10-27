import React from 'react';
import styles from './Header.less';
import {Layout, Menu, Icon, Avatar, Badge, Button} from 'antd'
const {Header} = Layout
import pathToRegexp from 'path-to-regexp'


function Head({app, loading, location}) {
  let selectKey = 1;

  function getHeaderMenu(app) {
    if (app.menus) {
      //选中设置
      for (let item of app.menus.data) {
        if (item.route == location.pathname) {
          selectKey = item.id
        }
      }


      const MenuItems = app.menus.data.map(function (item, index, arr) {
        return (
          <Menu.Item key={index + 1}>
            <a href={item.route}>
              <Icon type={item.icon}
                    style={{marginRight: 0, fontSize: '24px', marginTop: '25px', marginBottom: '8px'}}/>
              <span style={{lineHeight: 1, marginBottom: '16px'}}>{item.name}</span>
            </a>
          </Menu.Item>
        )
      })
      return MenuItems
    }

  }

  const headerMenu = getHeaderMenu(app);

  return (
    <Header className="header">
      <div className={styles.logo}></div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[`${selectKey}`]}
        defaultSelectedKeys={['1']}
      >
        {headerMenu}
      </Menu>
      <div className={styles.user}>
        <div>
          <Avatar className={styles.useravatar} size="large" icon="user"/>
          <a href="#" className={styles.username}>您好，admin</a>
        </div>
        <Badge count={5}>
          <Button type="primary" icon="bell" className={styles.headerbutton}></Button>
        </Badge>
        <Button type="primary" icon="poweroff" className={styles.headerbutton}></Button>
      </div>
    </Header>
  );
}

export default Head;
