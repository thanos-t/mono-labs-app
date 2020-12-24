import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

const UsersListHeader = () => {
  return (
    <div>
      <div className={styles.headerInfo}>
        <div className={styles.headerInfoLeft}>
          <FontAwesomeIcon icon='users' style={{ width: 32, height: 32 }} />
          <p>Users</p>
        </div>
        <div className={styles.headerInfoRight}>
          <p>{'X'} selected</p>
          <FontAwesomeIcon icon='question-circle' style={{ width: 20, height: 20 }} />
        </div>
      </div>
      <div className={styles.headerCategories}>
        <div className={styles.type}>
          <input type='checkbox' />
          TYPE
        </div>
        <div className={styles.name}>NAME</div>
        <div className={styles.email}>EMAIL</div>
        <div className={styles.tel}>TELEPHONE</div>
        <div className={styles.status}>STATUS</div>
      </div>
    </div>
  );
};

export default UsersListHeader;
