import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import HomePage from './pages/Home';
import Layout from './pages/Layout';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'cart/',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
