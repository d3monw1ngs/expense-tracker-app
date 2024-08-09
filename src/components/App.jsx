import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/operations/operations';
import { SharedLayout } from '../pages/SharedLayout';
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { TransactionHistoryPage } from '../pages/TransactionHistoryPage';
import { MainTransactionPage } from '../pages/MainTransactionPage';
import { Header } from './Header';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

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
            <Header />
                <Route 
                  path='/login' 
                  element={
                    <RestrictedRoute element={AuthPage} redirectTo="/" />} />
                <Route path='/history' element={TransactionHistoryPage} />
                <Route path='/transactions' element={MainTransactionPage} />       
        </Route>
      </Routes>
    </>
  );    
};
