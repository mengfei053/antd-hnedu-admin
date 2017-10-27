import React from 'react';
import { connect } from 'dva';
import styles from './UserPages.css';

function UserPages() {
  return (
    <div className={styles.normal}>
      Route Component: Pages/UserPages/UserPages
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserPages);
