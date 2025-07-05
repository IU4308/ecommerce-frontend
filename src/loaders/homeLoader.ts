import { gql } from '@apollo/client';
import { client } from '../apollo';

export const productsLoader = async () => {
    const query = gql`
        query {
            products {
                id
                name
                brand
                category
                price {
                    amount
                    currencyLabel
                    currencySymbol
                }
                gallery
                inStock
            }
        }
    `;

    try {
        const result = await client.query({ query });
        return result.data.products;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch categories', { status: 500 });
    }
};
