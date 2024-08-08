import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import logoImage from '../../assets/Icon.jpg';

export const Logo = () => {
  return (
   <Box>
        <Image src={logoImage} alt="Expense Tracker Logo" boxSize="50px" />
   </Box>
  );
};
