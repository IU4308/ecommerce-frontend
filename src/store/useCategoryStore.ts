import { create } from 'zustand';

type CategoryStore = {
    activeCategory: string;
    setActiveCategory: (cat: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
    activeCategory: 'all', // default value
    setActiveCategory: (category) => set({ activeCategory: category }),
}));
