import { useQuery } from '@tanstack/react-query';
import productService from '../services/productService';
import products from '../data/products';
import Product from '../entity/Product';

const useProducts = () =>
  useQuery<Product[], Error>({
    queryFn: productService.getAllProducts,
    queryKey: ['products'],
    staleTime: 1000 * 60 * 60 * 24,
    initialData: products,
  });

export default useProducts;
