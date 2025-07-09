import { ApolloError } from '@apollo/client';
import { client } from '../apollo';
import type { LoaderFunctionArgs } from 'react-router';
import { GET_PRODUCT } from '../graphql/queries/getProduct';

export const productDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
    const { productId } = params;

    try {
        const result = await client.query({
            query: GET_PRODUCT,
            variables: { id: productId },
            fetchPolicy: 'network-only',
        });

        return result.data.product;
    } catch (error) {
        if (error instanceof ApolloError) {
            const notFoundError = error.graphQLErrors.find((e) =>
                e.message.toLowerCase().includes('not found')
            );
            if (notFoundError) {
                throw new Response(notFoundError.message, { status: 404 });
            }
        }

        console.error(error);
        throw new Response('Failed to fetch product', { status: 500 });
    }
};
