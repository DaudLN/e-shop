import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import Loading from './Loading';

const ProductsGrid = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) return <Loading />;
  return (
    <SimpleGrid gap={5} minChildWidth={300} m={5} as='main'>
      {data?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
