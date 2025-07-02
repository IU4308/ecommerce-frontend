import { createBrowserRouter } from 'react-router';
import AppLayout from './layouts/AppLayout';
import ProductDetails from './components/pdp/ProductDetails';
import Home from './components/home/Home';
import { categoryLoader } from './loaders/categoryLoader';
import { productsLoader } from './loaders/homeLoader';

const router = createBrowserRouter([
    {
        Component: AppLayout,
        loader: categoryLoader,
        children: [
            {
                index: true,
                Component: Home,
                loader: productsLoader,
            },
            {
                path: '/products/:productId',
                Component: ProductDetails,
            },
        ],
    },
]);

export default router;
