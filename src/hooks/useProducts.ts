import { useQuery } from '@tanstack/react-query';
import productService from '../services/productService';
import Product from '../entity/Product';

const useProducts = () =>
  useQuery<Product[], Error>({
    queryFn: productService.getAllProducts,
    queryKey: ['products'],
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useProducts;
