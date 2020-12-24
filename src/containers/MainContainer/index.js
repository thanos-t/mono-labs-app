import React from 'react';

import styles from './styles.module.scss';
import UsersList from '../../components/UsersList';

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  );
};

export default MainContainer;
