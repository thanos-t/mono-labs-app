import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { updateUserStatus } from '../../../redux/actions';
import ToggleSwitch from '../../ToggleSwitch';

const UsersListEntry = ({ user }) => {
  const [userStatus, setUserStatus] = useState(user.active);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUserStatus(user, userStatus));
  }, [userStatus]);

  return (
    <div className={styles.userEntry}>
      <div className={styles.type}>
        <input type='checkbox' />
        {user.type}
      </div>
      <div className={styles.name}>{user.name}</div>
      <div className={styles.email}>{user.email}</div>
      <div className={styles.tel}>{user.phone}</div>
      <div className={styles.status}>
        <ToggleSwitch checked={userStatus} changeUserStatus={setUserStatus} />
      </div>
    </div>
  );
};

export default UsersListEntry;
