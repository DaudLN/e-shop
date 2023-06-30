import { HStack, List, ListItem, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitch from './ColorModeSwitch';
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
      <List display='flex' dir='row'>
        <ListItem fontSize='xl' mx={4}>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/cart'>
            <InCart />
          </Link>
        </ListItem>
      </List>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
