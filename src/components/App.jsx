import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/operations/operations';
import { SharedLayout } from '../pages/SharedLayout';
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { TransactionHistoryPage } from '../pages/TransactionHistoryPage';
import { MainTransactionPage } from '../pages/MainTransactionPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="transactions" element={<TransactionHistoryPage />} />
            <Route path="main" element={<MainTransactionPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="auth" element={<AuthPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );    
};
