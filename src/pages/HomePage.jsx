import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box textAlign="center" mt="10">
      <Heading>Manage Your Finances Masterfully!</Heading>
      <Text mt="4">ExpenseTracker effortlessly empowers you to take control of your finances! 
        With intuitive features, it simplifies the process of tracking and managing expenses, 
        allowing for a stress-free mastery over your financial world.</Text>
      <Box mt="6">
        <Link to="/register">Sign Up</Link> | <Link to="/login">Sign In</Link>
      </Box>
    </Box>
  );
};

export default HomePage;
