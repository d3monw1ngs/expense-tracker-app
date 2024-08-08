import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/selectors/selectors';

export const SharedLayout = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
        {!isAuthenticated }
        <Outlet />
    </div>
  );
};
