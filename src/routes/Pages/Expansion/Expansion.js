import React from 'react';
import { connect } from 'dva';
import styles from './Expansion.css';

function Expansion() {
  return (
    <div className={styles.normal}>
      Route Component: Pages/Expansion/Expansion
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Expansion);
