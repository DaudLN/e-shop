import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={'10px'} borderRadius={5} m={'10px'} textAlign={'center'}>
        <Heading as='h1'>Ooops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error has occurred'}
        </Text>
        <Button
          variant='link'
          mt={4}
          leftIcon={<ChevronLeftIcon boxSize={6} />}
        >
          <Link to='/'>Back to Home</Link>
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
