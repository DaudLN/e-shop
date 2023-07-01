import Product from '../entities/Product';
import FakestoreAPI from './api-client';
const productService = new FakestoreAPI<Product>('/products');

export default productService;
