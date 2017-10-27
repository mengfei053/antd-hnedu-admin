import React from 'react';
import styles from './Sidebar.less';
import {Layout, Menu, Icon} from 'antd'
const {Sider} = Layout
const { SubMenu } = Menu
import pathToRegexp from 'path-to-regexp'


function Sidebar({app, loading, location}) {
  console.log(app);
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
    <Sider width={200} className={styles.siderbar} >
      <div className={styles.siderbartime}>
        2017年10月17日 星期二
      </div>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ borderRight: 0}}
      >
        <Menu.Item>
          <Icon type="exception"/>
          <span>集团介绍</span>
        </Menu.Item>
        <SubMenu key="sub2" title={<span><Icon type="layout"/>产品服务</span>}>
          <Menu.Item key="5">资源</Menu.Item>
          <Menu.Item key="6">管理</Menu.Item>
          <Menu.Item key="7">校园介绍</Menu.Item>
        </SubMenu>
        <Menu.Item>
          <Icon type="api"/>
          <span>解决方案</span>
        </Menu.Item>
        <Menu.Item>
          <Icon type="solution"/>
          <span>新闻动态</span>
        </Menu.Item>
        <Menu.Item>
          <Icon type="pushpin-o"/>
          <span>成功案例</span>
        </Menu.Item>
        <Menu.Item>
          <Icon type="phone"/>
          <span>联系我们</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
