import type { CartItemType } from '../definitions';
import QuantityButtons from './QuantityButtons';
import AttributeList from './shared/AttributeList';
import Price from './shared/Price';

export default function CartProduct({
    id,
    name,
    gallery,
    price,
    attributes,
    selectedAttributes,
    quantity,
}: CartItemType) {
    return (
        <div className="flex gap-4 items-stretch border-b py-4">
            <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-lg">{name}</h2>
                <Price {...price} className="font-semibold" />
                <AttributeList
                    attributes={attributes}
                    selected={selectedAttributes}
                    onSelect={() => {}}
                    context="cart-item"
                />
            </div>

            <QuantityButtons
                id={id}
                selectedAttributes={selectedAttributes}
                quantity={quantity}
            />

            <div className="w-[80px] h-[100px] shrink-0">
                <img
                    src={gallery[0]}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}
