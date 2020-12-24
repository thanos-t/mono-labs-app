import { FETCH_USERS, UPDATE_USER_STATUS } from '../actionTypes';

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case UPDATE_USER_STATUS:
      return state.map(user => (user.id === action.payload.id ? { ...action.payload } : user));
    default:
      return state;
  }
};
