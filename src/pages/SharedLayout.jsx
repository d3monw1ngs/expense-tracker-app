import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const SharedLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  );
};
