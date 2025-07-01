import { createBrowserRouter } from 'react-router';
import AppLayout from './layouts/AppLayout';
import ProductDetails from './components/pdp/ProductDetails';
import Home from './components/home/Home';
import { categoryLoader } from './loaders/categoryLoader';

const router = createBrowserRouter([
    {
        Component: AppLayout,
        loader: categoryLoader,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/products/:productId',
                Component: ProductDetails,
            },
        ],
    },
]);

export default router;
