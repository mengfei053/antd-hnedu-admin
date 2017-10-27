import React from 'react';
import { connect } from 'dva';
import styles from './DataCenter.css';

function DataCenter() {
  return (
    <div className={styles.normal}>
      Route Component: Pages/DataCenter/DataCenter
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DataCenter);
