// src/loaders/categoryLoader.ts
import { fetchCategories } from '../utils/fetchCategories';

export const categoryLoader = async () => {
    return await fetchCategories();
};
