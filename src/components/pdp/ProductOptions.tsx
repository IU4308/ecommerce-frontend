import { useLoaderData } from 'react-router';
import parse from 'html-react-parser';
import AttributeList from '../shared/AttributeList';
import Price from '../shared/Price';
import { useState } from 'react';
import type { ProductType } from '../../definitions';
import { useCartStore } from '../../store/useCartStore';

export default function ProductOptions() {
    const product = useLoaderData() as ProductType;
    const {
        id,
        name,
        brand,
        category,
        description,
        inStock,
        gallery,
        price,
        attributes,
    } = product;

    const [selectedAttributes, setSelectedAttributes] = useState<
        Record<string, string>
    >({});
    const addItem = useCartStore((state) => state.addItem);
    const openCart = useCartStore((state) => state.openCart);

    const handleSelectAttribute = (attrName: string, itemId: string) => {
        setSelectedAttributes((prev) => ({
            ...prev,
            [attrName]: itemId,
        }));
    };

    const handleAddToCart = () => {
        addItem({
            id,
            name,
            brand,
            category,
            description,
            inStock,
            gallery,
            attributes,
            price,
            selectedAttributes,
        });
        openCart();
    };

    console.log(description);

    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-bold text-2xl">{name}</h2>

            <AttributeList
                attributes={attributes}
                selected={selectedAttributes}
                onSelect={handleSelectAttribute}
                context="product"
            />

            <Price {...price} renderTitle className="font-bold" />
            <button
                onClick={handleAddToCart}
                className="primary-btn"
                disabled={attributes.some(
                    (attr) => !selectedAttributes[attr.name]
                )}
                data-testid="add-to-cart"
            >
                ADD TO CART
            </button>
            <div className="prose" data-testid="product-description">
                {parse(description)}
            </div>
        </div>
    );
}
