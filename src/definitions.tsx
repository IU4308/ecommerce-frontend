export type CategoryType = {
    name: string;
};

export type Price = {
    amount: number;
    currencyLabel: string;
    currencySymbol: string;
};

export type HomeProduct = {
    id: string;
    name: string;
    category: string;
    inStock: boolean;
    price: Price;
    gallery: string[];
};

export type AttributeType = {
    name: string;
    type: 'text' | 'swatch';
    items: AttributeItemType[];
};

export type AttributeItemType = {
    value: string;
    itemId: string;
    displayValue: string;
};
