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
import Product from '../entities/Product';
import formatCurrency from '../utils/formatCurrency';
import ItemCount from './ItemCount';
import ProductRate from './ProductRate';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const styles = {
    transition: 'transform 0.15s ease-in-out',
    ':hover': {
      transform: 'scale(1.03)',
    },
  };
  return (
    <Card key={product.id} as='article' sx={styles}>
      <CardBody>
        <Image
          src={product.image}
          alt={product.title}
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
                {formatCurrency(product.price)}
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
