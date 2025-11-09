import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

  const {user} = useContext(AuthContext)
  if(!user) {
    return <Navigate to='/login' />
  }
  return children
};

export default PrivateRoutes;