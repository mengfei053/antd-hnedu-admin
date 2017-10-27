import React from 'react'
import styles from './MainLayout.less'
import {Layout, Menu, Icon} from 'antd'
import Head  from './Header'


function MainLayout({children, app, loading,location}) {
  const HeaderProps = {
    app,
    location,
    loading
  }
  const SiderbarProps = {
    app,
    location,
    loading
  }

  return (
    <Layout>
      <Head {...HeaderProps}/>
      {children}
    </Layout>
  )
}

export default MainLayout;
