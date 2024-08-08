import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export const UserBarBtn = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

  return (
    <Box>
        <Button colorScheme="teal" onClick={handleLogout}>
            Logout
        </Button>
    </Box>
  );
};
