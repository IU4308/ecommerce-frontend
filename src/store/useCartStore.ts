import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItemType } from '../definitions';

type CartStore = {
    items: CartItemType[];
    cartIsOpen: boolean;
    addItem: (item: Omit<CartItemType, 'quantity'>) => void;
    incrementItem: (
        id: string,
        selectedAttributes: Record<string, string>
    ) => void;
    decrementItem: (
        id: string,
        selectedAttributes: Record<string, string>
    ) => void;
    clearCart: () => void;

    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            cartIsOpen: false,
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
            clearCart: () => set({ items: [] }),
            openCart: () => set({ cartIsOpen: true }),
            closeCart: () => set({ cartIsOpen: false }),
            toggleCart: () =>
                set((state) => ({ cartIsOpen: !state.cartIsOpen })),
        }),
        {
            name: 'cart-storage',
        }
    )
);
