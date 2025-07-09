import { client } from '../apollo';
import { GET_CATEGORIES } from '../graphql/queries/getCategories';

export const categoryLoader = async () => {
    try {
        const result = await client.query({ query: GET_CATEGORIES });
        return result.data.categories;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch categories', { status: 500 });
    }
};
