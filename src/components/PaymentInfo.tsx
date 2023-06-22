import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Input,
  InputGroup,
  SkeletonCircle,
  Spacer,
  Text,
} from '@chakra-ui/react';
import useCartStore from '../store/shop';
import formatCurrency from '../utils/formatCurrency';

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
        <Flex mb={4} gap={3} justify={'space-between'}>
          <SkeletonCircle borderRadius={5} boxSize={'50px'} />
          <SkeletonCircle borderRadius={5} boxSize={'50px'} />
          <SkeletonCircle borderRadius={5} boxSize={'50px'} />
          <SkeletonCircle borderRadius={5} boxSize={'50px'} />
        </Flex>
        <form>
          <InputGroup mb={3}>
            <Input
              type='text'
              variant='filled'
              bg='blue.300'
              placeholder='Name'
            />
          </InputGroup>

          <Input
            type='text'
            mb={3}
            variant='filled'
            bg='blue.300'
            placeholder='Name'
          />
          <HStack mb={3}>
            <Input
              type='text'
              variant='filled'
              bg='blue.300'
              placeholder='Name'
            />
            <Input
              type='text'
              variant='filled'
              bg='blue.300'
              placeholder='Name'
            />
          </HStack>
        </form>

        <Flex direction='column' textAlign='start' gap={2} mb={4}>
          <Box>
            <HStack justify={'space-between'}>
              <Text>Subtotal</Text>
              <Text as='span'>{formatCurrency(totalPrice)}</Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text>Shipping</Text>
              <Text as='span'>{formatCurrency(shipping)}</Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text>Total (Tax incl.)</Text>
              <Text as='span'>{formatCurrency(total)}</Text>
            </HStack>
          </Box>
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
