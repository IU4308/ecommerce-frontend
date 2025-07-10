import { createBrowserRouter, redirect } from 'react-router';
import AppLayout from './layouts/AppLayout';
import ProductDetails from './components/pdp/ProductDetails';
import Home from './components/home/Home';
import { categoryLoader } from './loaders/categoryLoader';
import { productsLoader } from './loaders/homeLoader';
import { productDetailsLoader } from './loaders/productDetailsLoader';
import { addToCartAction } from './actions/addToCartAction';
import { placeOrderAction } from './actions/placeOrderActions';
import NotFound from './components/NotFound';
import { createElement } from 'react';

const router = createBrowserRouter([
    {
        Component: AppLayout,
        loader: categoryLoader,
        action: placeOrderAction,
        children: [
            {
                index: true,
                loader: () => redirect('/all'),
            },
            {
                path: '/:category',
                Component: Home,
                loader: productsLoader,
                action: addToCartAction,
                errorElement: createElement(NotFound),
            },

            {
                path: '/products/:productId',
                Component: ProductDetails,
                loader: productDetailsLoader,
                errorElement: createElement(NotFound),
            },
            {
                path: '*',
                Component: NotFound,
            },
        ],
    },
]);

export default router;
