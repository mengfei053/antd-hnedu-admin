import React from 'react';
import { connect } from 'dva';
import styles from './TeplPages.css';

function TeplPages() {
  return (
    <div className={styles.normal}>
      Route Component: Pages/TeplPages/TeplPages
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TeplPages);
