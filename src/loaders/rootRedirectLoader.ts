// src/loaders/rootRedirectLoader.ts
import { redirect } from 'react-router';
import { fetchCategories } from '../utils/fetchCategories';

export const rootRedirectLoader = async () => {
    const categories = await fetchCategories();

    if (!categories.length) {
        throw new Response('No categories available', { status: 404 });
    }

    return redirect(`/${categories[0].name}`);
};
