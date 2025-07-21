// src/store/useCategoryStore.ts
import { create } from 'zustand';

type Category = {
    name: string;
};

type CategoryStore = {
    categories: Category[];
    setCategories: (categories: Category[]) => void;
    hasFetched: boolean;
    setHasFetched: (fetched: boolean) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
    categories: [],
    hasFetched: false,
    setCategories: (categories) => set({ categories }),
    setHasFetched: (fetched) => set({ hasFetched: fetched }),
}));
