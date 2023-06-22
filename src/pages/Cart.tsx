import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PaymentInfo from '../components/PaymentInfo';
import useCartStore from '../store/shop';
const Cart = () => {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
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
          {items.map((item, i) => (
            <Card key={i} overflow='hidden' variant='outline' mb={3}>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={item.image}
                alt={item.title}
                boxSize='65px'
              />
              <Stack>
                <CardBody>
                  <HStack justifyContent='space-between'>
                    <Box>
                      <Link to={`/products/${item.id}`}>
                        <Text fontSize='md' noOfLines={1}>
                          {item.title}
                        </Text>
                      </Link>
                    </Box>
                    <Text>{item.quantity}</Text>
                    <VStack spacing={0}>
                      <ChevronUpIcon
                        cursor={'pointer'}
                        onClick={() => increaseQuantity(item.id)}
                      />
                      <ChevronDownIcon
                        cursor={'pointer'}
                        onClick={() => decreaseQuantity(item.id)}
                      />
                    </VStack>
                    <Box>
                      <IconButton
                        icon={<FaTrashAlt />}
                        aria-label='Delete'
                        onClick={() => removeItem(item.id)}
                        variant='ghost'
                        colorScheme='red'
                      />
                    </Box>
                  </HStack>
                </CardBody>
              </Stack>
            </Card>
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
