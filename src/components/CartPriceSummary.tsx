import { Box, HStack, Text } from '@chakra-ui/react';
import formatCurrency from '../utils/formatCurrency';

interface Props {
  totalPrice: number;
  shipping: number;
  total: number;
}

export default function CartPriceSummary({
  total,
  totalPrice,
  shipping,
}: Props) {
  return (
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
  );
}
