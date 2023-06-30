import { useQuery } from '@tanstack/react-query';
import productService from '../services/productService';
import Product from '../entity/Product';

const useProduct = (id: string) =>
  useQuery<Product, Error>({
    queryFn: () => productService.getProduct(id),
    queryKey: ['products', id],
  });

export default useProduct;
