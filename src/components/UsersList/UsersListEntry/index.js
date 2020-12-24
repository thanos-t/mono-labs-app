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
      <div className={[styles.userCategory, styles.type].join(' ')}>
        <input type='checkbox' />
        {user.type}
      </div>
      <div className={[styles.userCategory, styles.name].join(' ')}>{user.name}</div>
      <div className={[styles.userCategory, styles.email].join(' ')}>{user.email}</div>
      <div className={[styles.userCategory, styles.tel].join(' ')}>{user.phone}</div>
      <div className={[styles.status].join(' ')}>
        <ToggleSwitch checked={userStatus} changeUserStatus={setUserStatus} />
      </div>
    </div>
  );
};

export default UsersListEntry;
