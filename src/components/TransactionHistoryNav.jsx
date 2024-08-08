import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

export const TransactionHistoryNav = () => {
  return (
    <Box>
        <Button as={Link} to="/transaction" variant="link colorScheme='teal">
            Transaction History
        </Button>
    </Box>
  );
};
