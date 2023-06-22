import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import ItemCount from '../components/ItemCount';
import Loading from '../components/Loading';

export default function ProductDetail() {
  const { id } = useParams();
  if (!id) throw new Error('Something went wrong');
  const { data: product, isLoading, error } = useProduct(id);
  if (isLoading) return <Loading />;
  if (!product || error) throw new Error('Something went wrong');
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={product.title}
            src={product.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {product.title}
            </Heading>
            <Text fontWeight={300} fontSize={'2xl'}>
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={<StackDivider />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>{product.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Ratings: {product.rating.count}</ListItem>
                  <ListItem>Rating Avg: {product.rating.rate}</ListItem>
                  <ListItem>Category: {product.category}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <ItemCount product={product} />
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
