import React from 'react'
import { connect } from 'dva'
import styles from './ProductServer.less'

import MainLayout from '../../../components/Layout/MainLayout'

function ProductServer({ location }){
  return (
    <MainLayout location={location}>
      <h2>产品服务 {location.pathname} </h2>
    </MainLayout>
  )
}

export default connect()(ProductServer)
