import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PaymentInfo from '../components/PaymentInfo';
import useCartStore from '../store/shop';
import Item from '../components/Item';
const Cart = () => {
  const items = useCartStore((s) => s.items);
  if (items.length > 0)
    return (
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={10}
        justify={'center'}
        mx={{ md: '100px' }}
      >
        <Box
          overflowY={'scroll'}
          h={{ md: '80vh' }}
          w={{ base: '100%', md: '80%' }}
        >
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
        <Box borderRadius={10}>
          <PaymentInfo />
        </Box>
      </Flex>
    );
  return (
    <Box textAlign='center'>
      <Text fontSize='2xl'>No items in cart</Text>
      <Button variant='link' mt={4} leftIcon={<ChevronLeftIcon boxSize={6} />}>
        <Link to='/'>Back to Home</Link>
      </Button>
    </Box>
  );
};

export default Cart;
