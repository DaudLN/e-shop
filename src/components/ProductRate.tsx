import { StarIcon } from '@chakra-ui/icons';
import { HStack, VStack, Text } from '@chakra-ui/react';
import { FaThumbsUp } from 'react-icons/fa';

interface Props {
  rate: number;
  count: number;
}

export default function ProductRate({ rate, count }: Props) {
  return (
    <VStack alignItems={'self-end'}>
      <HStack mb={0}>
        <FaThumbsUp />
        <Text>{count}</Text>
      </HStack>
      <HStack>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon key={i} color={i < rate ? 'teal.500' : 'gray.300'} />
          ))}
      </HStack>
    </VStack>
  );
}
