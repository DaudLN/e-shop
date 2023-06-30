import { Flex, SkeletonCircle } from '@chakra-ui/react';

export default function PaymentCardSkeleton() {
  return (
    <Flex mb={4} gap={3} justify={'space-between'}>
      {Array(5)
        .fill('')
        .map((_, i) => (
          <SkeletonCircle borderRadius={5} key={i} boxSize={'50px'} />
        ))}
    </Flex>
  );
}
