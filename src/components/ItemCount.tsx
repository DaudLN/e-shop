import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Text } from '@chakra-ui/react';
import Product from '../entity/Product';
import useCartStore from '../store/shop';

interface Props {
  product: Product;
}

const ItemCount = ({ product }: Props) => {
  const items = useCartStore((s) => s.items);
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const addItem = useCartStore((s) => s.addItem);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const item = items.find((item) => item.id === product.id);
  if (item)
    return (
      <HStack justifySelf='center'  align='center' justify='center'>
        <IconButton
          aria-label='Increase'
          icon={<ChevronUpIcon />}
          onClick={() => increaseQuantity(item.id)}
        />
        <Text>{item.quantity} Items in carts</Text>
        <IconButton
          aria-label='Decrease'
          icon={<ChevronDownIcon />}
          onClick={() => decreaseQuantity(item.id)}
        />
      </HStack>
    );
  return (
    <Button
      variant='outline'
      colorScheme='blue'
      h={50}
      fontSize={20}
      onClick={() =>
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
    >
      Add to cart
    </Button>
  );
};

export default ItemCount;
