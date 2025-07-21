import { client } from '../apollo';
import { GET_CATEGORIES } from '../graphql/queries/getCategories';
import { useCategoryStore } from '../store/useCategoryStore';

export const fetchCategories = async () => {
    const { categories, hasFetched, setCategories, setHasFetched } =
        useCategoryStore.getState();

    if (hasFetched) return categories;

    try {
        const result = await client.query({ query: GET_CATEGORIES });
        const fetched = result.data.categories;

        setCategories(fetched);
        setHasFetched(true);

        return fetched;
    } catch (error) {
        console.error(error);
        throw new Response('Failed to fetch categories', { status: 500 });
    }
};
