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

    const handleSelectAttribute = (attrName: string, itemId: string) => {
        setSelectedAttributes((prev) => ({
            ...prev,
            [attrName]: itemId,
        }));
    };

    const handleAddToCart = () => {
        if (attributes.some((attr) => !selectedAttributes[attr.name])) {
            alert('Please select all attributes.');
            return;
        }

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
    };

    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-bold text-2xl">{name}</h2>

            <AttributeList
                attributes={attributes}
                selected={selectedAttributes}
                onSelect={handleSelectAttribute}
            />

            <Price {...price} renderTitle className="font-bold" />
            <button onClick={handleAddToCart} className="primary-btn">
                ADD TO CART
            </button>
            {/* <PrimaryButton onClick={handleAddToCart}>ADD TO CART</PrimaryButton> */}
            <div className="prose">{parse(description)}</div>
        </div>
    );
}
