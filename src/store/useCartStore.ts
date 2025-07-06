import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AttributeType, PriceType } from '../definitions';

export type CartItemType = {
    id: string;
    name: string;
    brand: string;
    category: string;
    description: string;
    inStock: boolean;
    gallery: string[];
    attributes: AttributeType[];
    price: PriceType;
    selectedAttributes: Record<string, string>;
    quantity: number;
};

type CartStore = {
    items: CartItemType[];
    addItem: (item: Omit<CartItemType, 'quantity'>) => void;
    updateAttributes: (
        itemId: string,
        oldAttributes: Record<string, string>,
        newAttributes: Record<string, string>
    ) => void;

    incrementItem: (
        id: string,
        selectedAttributes: Record<string, string>
    ) => void;
    decrementItem: (
        id: string,
        selectedAttributes: Record<string, string>
    ) => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addItem: (newItem) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (item) =>
                            item.id === newItem.id &&
                            JSON.stringify(item.selectedAttributes) ===
                                JSON.stringify(newItem.selectedAttributes)
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item === existingItem
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }

                    return {
                        items: [...state.items, { ...newItem, quantity: 1 }],
                    };
                }),
            updateAttributes: (
                itemId: string,
                oldAttributes: Record<string, string>,
                newAttributes: Record<string, string>
            ) =>
                set((state) => {
                    return {
                        items: state.items.map((item) => {
                            const isMatch =
                                item.id === itemId &&
                                JSON.stringify(item.selectedAttributes) ===
                                    JSON.stringify(oldAttributes);
                            if (isMatch) {
                                return {
                                    ...item,
                                    selectedAttributes: newAttributes,
                                };
                            }
                            return item;
                        }),
                    };
                }),

            incrementItem: (
                id: string,
                selectedAttributes: Record<string, string>
            ) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id &&
                        JSON.stringify(item.selectedAttributes) ===
                            JSON.stringify(selectedAttributes)
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),

            decrementItem: (
                id: string,
                selectedAttributes: Record<string, string>
            ) =>
                set((state) => {
                    const items = state.items
                        .map((item) => {
                            if (
                                item.id === id &&
                                JSON.stringify(item.selectedAttributes) ===
                                    JSON.stringify(selectedAttributes)
                            ) {
                                if (item.quantity === 1) return null; // remove item
                                return { ...item, quantity: item.quantity - 1 };
                            }
                            return item;
                        })
                        .filter(Boolean) as CartItemType[];

                    return { items };
                }),
        }),
        {
            name: 'cart-storage',
        }
    )
);
