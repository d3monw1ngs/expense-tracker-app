import React, { useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/operations/operations';
import { SharedLayout } from '../pages/SharedLayout';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { MainTransactionPage } from '../pages/MainTransactionPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
            <Route path="transactions/:transactionsType" element={<MainTransactionPage />} />     
        </Route>
      </Routes>
    </>
  );    
};
