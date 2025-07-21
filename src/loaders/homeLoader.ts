import type { LoaderFunctionArgs } from 'react-router';
import { client } from '../apollo';
import { GET_PRODUCT_LISTING } from '../graphql/queries/getProductListing';

export const productsLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const result = await client.query({
            query: GET_PRODUCT_LISTING,
            variables: { category: params!.category },
            fetchPolicy: 'network-only',
        });
        return result.data.products;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch categories', { status: 500 });
    }
};
