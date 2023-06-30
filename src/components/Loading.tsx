import { Box, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box textAlign='center' mt='30vh'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray'
        color='blue.300'
        size='xl'
      />
    </Box>
  );
};

export default Loading;
