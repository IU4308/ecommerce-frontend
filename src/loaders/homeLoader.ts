import { client } from '../apollo';
import { GET_PRODUCT_LISTING } from '../graphql/queries/getProductListing';

export const productsLoader = async () => {
    try {
        const result = await client.query({ query: GET_PRODUCT_LISTING });
        return result.data.products;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch categories', { status: 500 });
    }
};
