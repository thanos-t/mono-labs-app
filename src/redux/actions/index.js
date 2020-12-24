import { axiosInstance } from '../../api/baseApi';
import { FETCH_USERS, UPDATE_USER_STATUS } from '../actionTypes';

export const fetchUsers = () => {
  return async dispatch => {
    const response = await axiosInstance.get('/users');

    dispatch({ type: FETCH_USERS, payload: response.data });
  };
};

// TODO: need to memoize this
export const updateUserStatus = (user, newStatus) => {
  return async dispatch => {
    const response = await axiosInstance.put(`users/${user.id}`, {
      name: user.name,
      email: user.email,
      phone: user.phone,
      active: newStatus,
      type: user.type,
    });

    dispatch({ type: UPDATE_USER_STATUS, payload: response.data });
  };
};
