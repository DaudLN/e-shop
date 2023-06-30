import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { VStack } from '@chakra-ui/react';
import useCartStore from '../store/shop';

interface Props {
  productId: number;
}

export default function IncreaseDecreaseItem({ productId }: Props) {
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  return (
    <VStack spacing={0}>
      <ChevronUpIcon
        cursor={'pointer'}
        onClick={() => increaseQuantity(productId)}
      />
      <ChevronDownIcon
        cursor={'pointer'}
        onClick={() => decreaseQuantity(productId)}
      />
    </VStack>
  );
}
