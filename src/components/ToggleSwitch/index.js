import React from 'react';

const ToggleSwitch = ({ checked, changeUserStatus }) => {
  return <input type='checkbox' onChange={event => changeUserStatus(event.target.checked)} checked={checked} />;
};

export default ToggleSwitch;
