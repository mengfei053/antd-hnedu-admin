import React from 'react';
import { connect } from 'dva';
import styles from './Resources.css';

function Resources() {
  return (
    <div className={styles.normal}>
      Route Component: Pages/Resources/Resources
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Resources);
