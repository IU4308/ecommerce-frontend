import type { CartItemType } from '../definitions';
import { useCartStore } from '../store/useCartStore';
import AttributeList from './shared/AttributeList';
import Price from './shared/Price';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';

export default function CartProduct({
    id,
    name,
    gallery,
    price,
    attributes,
    selectedAttributes,
    quantity,
}: CartItemType) {
    const incrementItem = useCartStore((state) => state.incrementItem);
    const decrementItem = useCartStore((state) => state.decrementItem);

    return (
        <div className="flex gap-4 items-stretch border-b py-4">
            <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-lg">{name}</h2>
                <Price {...price} className="font-semibold" />
                <AttributeList
                    attributes={attributes}
                    selected={selectedAttributes}
                    onSelect={() => {}}
                />
            </div>

            <div className="flex flex-col justify-between items-center">
                <button onClick={() => incrementItem(id, selectedAttributes)}>
                    <CiSquarePlus className="text-4xl" />
                </button>
                <div>{quantity}</div>
                <button onClick={() => decrementItem(id, selectedAttributes)}>
                    <CiSquareMinus className="text-4xl" />
                </button>
            </div>

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
