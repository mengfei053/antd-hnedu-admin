import React from 'react';
import styles from './Menu.less';


function Menu(app,loading) {
  return (
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
  );
}

export default Menu;
