import { Box, Icon, Text } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import useCartStore from '../store/shop';

const InCart = () => {
  const items = useCartStore((s) => s.items);

  return (
    <Box pos={'relative'}>
      <Icon as={FiShoppingCart} boxSize={25} />
      <Text
        position='absolute'
        top='-9px'
        right='-10px'
        borderRadius='full'
        bg='red.500'
        color='white'
        fontSize='xs'
        px={1}
      >
        {items.length}
      </Text>
    </Box>
  );
};

export default InCart;
