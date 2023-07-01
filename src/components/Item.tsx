import {
  Box,
  Card,
  CardBody,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartItem from '../entities/CartItem';
import useCartStore from '../store/shop';
import IncreaseDecreaseItem from './IncreaseDecreaseItem';

interface Props {
  item: CartItem;
}

const Item = ({ item }: Props) => {
  const removeItem = useCartStore((s) => s.removeItem);
  return (
    <>
      <Card overflow='hidden' variant='outline' mb={3}>
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
              <IncreaseDecreaseItem productId={item.id} />
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
    </>
  );
};

export default Item;
