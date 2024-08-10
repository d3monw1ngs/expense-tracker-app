import React from 'react';
import AuthForm from '../components/authForm';

const RegisterPage = () => {
  const handleRegister = (data) => {
    // Handle registration logic here
    console.log('Register:', data);
  };

  return <AuthForm onSubmit={handleRegister} />;
};

export default RegisterPage;
