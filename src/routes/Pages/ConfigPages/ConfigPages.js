import React from 'react';
import { connect } from 'dva';
import styles from './ConfigPages.css';

function ConfigPages() {
  return (
    <div className={styles.normal}>
      Route Component: Pages/ConfigPages/ConfigPages
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ConfigPages);
