import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/Layout/MainLayout'
import { withRouter } from 'dva/router'

function IndexPage({children,location,loading,app}) {
  const mainLayoutProps = {
    app,
    location,
    loading
  }
  return (
    <MainLayout {...mainLayoutProps}>
      {children}
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default withRouter(connect(({app,loading})=>({app,loading}))(IndexPage))
