// // loaders/categoryLoader.ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache(),
});

export const categoryLoader = async () => {
    const query = gql`
        query {
            categories {
                name
            }
        }
    `;

    try {
        const result = await client.query({ query });
        return result.data.categories;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch categories', { status: 500 });
    }
};
