import { List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  ratingCount: number;
  ratingRate: number;
  category: string;
  title: ReactNode | ReactNode[];
}

export default function ProductAttributes({
  ratingCount,
  ratingRate,
  category,
  title,
}: Props) {
  return (
    <>
      <Text
        fontSize={{ base: '16px', lg: '18px' }}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}
      >
        {title}
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={10}
      >
        <List spacing={2}>
          <ListItem>Ratings: {ratingCount}</ListItem>
          <ListItem>Rating Avg: {ratingRate}</ListItem>
          <ListItem>Category: {category}</ListItem>
        </List>
      </SimpleGrid>
    </>
  );
}
