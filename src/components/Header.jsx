import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { Logo } from './Logo';

export const Header = () => {
  const user = useSelector(selectUser);
  if(!user || !user.name) {
    return <div>Loading...</div>;
  }

  const { name } = user;

  return (
    <Flex as="header" justify="space-between" align="center" padding="1.5rem" bg="teal.500" color="white">
      <Link to="/">
        <Heading size="lg">Expense Tracker</Heading>
      </Link>
      {name && <Box>{name}</Box>}
    </Flex>
  );
};
