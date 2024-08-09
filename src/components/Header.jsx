import React from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';
import { TransactionHistoryNav } from './TransactionHistoryNav';
import { UserBarBtn } from './UserBarBtn';
import { BurgerMenuBtn } from './BurgerMenuBtn';

export const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" p="4">
      <Logo />
      <Box display={{ base: 'none', md: 'flex' }}>
        <TransactionHistoryNav />
        <UserBarBtn />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <BurgerMenuBtn />
      </Box>
    </Box>
  );
};
