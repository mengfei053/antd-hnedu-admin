import React from 'react'
import { connect } from 'dva'
import styles from './GroupIntro.less'

import MainLayout from '../../../components/Layout/MainLayout'

function GroupIntro({ location }){
  return (
    <MainLayout location={location}>
      <h2>集团介绍</h2>
    </MainLayout>
  )
}

export default connect()(GroupIntro)
