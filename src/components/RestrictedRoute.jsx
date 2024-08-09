import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/selectors';

export const RestrictedRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
