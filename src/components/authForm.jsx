import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

const AuthForm = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm();

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input {...register('email')} type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input {...register('password')} type="password" />
      </FormControl>
      <Button mt="4" type="submit" colorScheme="teal">
        Submit
      </Button>
    </Box>
  );
};

export default AuthForm;
