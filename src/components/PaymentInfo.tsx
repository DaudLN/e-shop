import {
  Avatar,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import useCartStore from '../store/shop';
import formatCurrency from '../utils/formatCurrency';
import CartPriceSummary from './CartPriceSummary';
import PaymentCardSkeleton from './PaymentCardSkeleton';
import PaymentForm from './PaymentForm';

const PaymentInfo = () => {
  const items = useCartStore((s) => s.items);
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = 4;
  const total = totalPrice + shipping;
  return (
    <Card minH={300} bg='blue.500' textColor={'white'}>
      <CardBody>
        <HStack>
          <Text fontSize='2xl'>Card Details</Text>
          <Spacer />
          <Avatar name='Daud Namayala' />
        </HStack>
        <Text fontSize='sm' mb={3}>
          Card type
        </Text>
        <PaymentCardSkeleton />
        <PaymentForm />
        <Flex direction='column' textAlign='start' gap={2} mb={4}>
          <CartPriceSummary
            totalPrice={totalPrice}
            shipping={shipping}
            total={total}
          />
        </Flex>
        <Button
          w='100%'
          background='blue.300'
          _hover={{ background: 'blue.300' }}
        >
          <HStack justify={'space-between'}>
            <Text>{formatCurrency(total)}</Text>
            <Text as='span'>Checkout</Text>
          </HStack>
        </Button>
      </CardBody>
    </Card>
  );
};

export default PaymentInfo;
