import React from 'react';
import styles from './Sidebar.less';
import {Layout, Menu, Icon} from 'antd'
const {Sider} = Layout
const { SubMenu } = Menu


function Sidebar({sidebar}) {
  function getSidebar(sidebar) {
    if (sidebar) {
      const MenuItems = sidebar.map(function (item, index, arr) {
        if(!item.children){
          return (
            <Menu.Item key={item.id}>
              <Icon type={item.icon}/>
              <span>{item.name}</span>
            </Menu.Item>
          )
        }else{
          const itemChilds = item.children.map(function (childitem,index,arr) {
            return (
              <Menu.Item key={childitem.id}>{childitem.name}</Menu.Item>
            )
          });
          return (
            <SubMenu key={`sub${item.id}`} title={<span><Icon type={item.icon}/>{item.name}</span>}>
              {itemChilds}
            </SubMenu>
          )
        }
      });

      return MenuItems;
    }
  }
  const sidebarMenus = getSidebar(sidebar);
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
        {sidebarMenus}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
