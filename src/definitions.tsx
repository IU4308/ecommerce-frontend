export type CategoryType = {
    name: string;
};

export type ProductType = {
    id: string;
    name: string;
    brand: string;
    description: string;
    inStock: boolean;
    gallery: string[];
    attributes: AttributeType[];
    price: PriceType;
};

export type PriceType = {
    amount: number;
    currencyLabel: string;
    currencySymbol: string;
};

export type HomeProduct = {
    id: string;
    name: string;
    category: string;
    inStock: boolean;
    price: PriceType;
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
