import React from 'react';
import AuthForm from '../components/authForm';

const LoginPage = () => {
  const handleLogin = (data) => {
    // Handle login logic here
    console.log('Login:', data);
  };

  return <AuthForm onSubmit={handleLogin} />;
};

export default LoginPage;
