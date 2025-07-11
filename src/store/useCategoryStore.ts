import { create } from 'zustand';

type CategoryStore = {
    activeCategory: string | undefined;
    setActiveCategory: (cat: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
    activeCategory: undefined,
    setActiveCategory: (category) => set({ activeCategory: category }),
}));
