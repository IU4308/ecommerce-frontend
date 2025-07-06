import { gql } from '@apollo/client';
import { client } from '../apollo';
import type { LoaderFunctionArgs } from 'react-router';

const query = gql`
    query GetProduct($id: ID!) {
        product(id: $id) {
            id
            name
            description
            price {
                amount
                currencySymbol
            }
            inStock
            gallery
            attributes {
                name
                type
                items {
                    itemId
                    value
                    displayValue
                }
            }
        }
    }
`;

export const productDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
    const { productId } = params;
    try {
        const result = await client.query({
            query,
            variables: { id: productId },
            fetchPolicy: 'network-only',
        });
        return result.data.product;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch product', { status: 500 });
    }
};
