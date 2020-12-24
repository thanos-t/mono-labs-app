import { useSelector } from 'react-redux';

export const usersSelector = () => useSelector(state => state.users);
