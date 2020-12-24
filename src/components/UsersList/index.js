import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../../redux/actions';
import { usersSelector } from '../../redux/selectors';
import UsersListHeader from './UsersListHeader';
import UsersListEntry from './UsersListEntry';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = usersSelector();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <UsersListHeader />
      {users.map(user => (
        <UsersListEntry user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
