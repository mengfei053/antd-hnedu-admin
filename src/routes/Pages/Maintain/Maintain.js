import React from 'react';
import { connect } from 'dva';
import styles from './Maintain.css';
import PageLayout from '../PageLayout/PageLayout'

function Maintain(loading,maintain) {
  const { sidebar } = maintain
  console.log(maintain);
  const PageLayoutProps = {
    sidebar
  }
  return (
    <PageLayout {...PageLayoutProps}>
      <h2>Maintain</h2>
    </PageLayout>
  );
}



export default connect(({maintain,loading})=>({maintain,loading}))(Maintain)
