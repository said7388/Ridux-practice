import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../counter/userSlice';



const User = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default User;