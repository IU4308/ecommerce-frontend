import { createBrowserRouter } from 'react-router';
import AppLayout from './layouts/AppLayout';
import ProductDetails from './components/pdp/ProductDetails';
import Home from './components/home/Home';
import { categoryLoader } from './loaders/categoryLoader';
import { productsLoader } from './loaders/homeLoader';
import { productDetailsLoader } from './loaders/productDetailsLoader';
import { addToCartAction } from './actions/addToCartAction';
import { placeOrderAction } from './actions/placeOrderActions';

const router = createBrowserRouter([
    {
        Component: AppLayout,
        loader: categoryLoader,
        action: placeOrderAction,
        children: [
            {
                index: true,
                Component: Home,
                loader: productsLoader,
                action: addToCartAction,
            },
            {
                path: '/products/:productId',
                Component: ProductDetails,
                loader: productDetailsLoader,
            },
        ],
    },
]);

export default router;
