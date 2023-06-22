import { HStack, Spacer, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import { Link } from 'react-router-dom';
import InCart from './InCart';

const Navbar = () => {
  return (
    <HStack
      padding='20px'
      as='nav'
      boxShadow={'xl'}
      mb={3}
      flexDirection={'row'}
      alignItems={'center'}
      spacing={3}
    >
      <Link to='/'>
        <Text fontSize='xl'>Home</Text>
      </Link>
      <Link to='/cart'>
        <InCart />
      </Link>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
