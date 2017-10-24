import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/Layout/MainLayout'
import { withRouter } from 'dva/router'

function IndexPage({location,loading,app}) {
  const mainLayoutProps = {
    app,
    loading
  }
  return (
    <MainLayout {...mainLayoutProps}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default withRouter(connect(({app,loading})=>({app,loading}))(IndexPage))
