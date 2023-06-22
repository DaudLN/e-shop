import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Product from '../entity/Product';
import ItemCount from './ItemCount';
import ProductRate from './ProductRate';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card key={product.id}>
      <CardBody>
        <Image
          src={product.image}
          alt={product.image}
          borderRadius='lg'
          h={80}
          w={'100%'}
          fit={'cover'}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' noOfLines={1}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </Heading>
          <HStack spacing={3} justify={'space-between'}>
            <Box>
              <Text color='blue.600' fontSize='2xl' mb={0}>
                ${product.price}
              </Text>
              <Badge colorScheme='messenger' px={2} borderRadius={5}>
                {product.category}
              </Badge>
            </Box>
            <Box>
              <ProductRate
                rate={product.rating.rate}
                count={product.rating.count}
              />
            </Box>
          </HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter mt={0} justify={'center'}>
        <ItemCount product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
