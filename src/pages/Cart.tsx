import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
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
        w={"full"}
      >
        <VStack>
          <Text>You have {items.length} items in the cart</Text>
        <Box
          overflowY={'scroll'}
          h={{ md: '80vh' }}
        >
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
        </VStack>
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
