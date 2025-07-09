import { useCartStore } from '../store/useCartStore';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';

type Props = {
    id: string;
    selectedAttributes: Record<string, string>;
    quantity: number;
};

export default function QuantityButtons({
    id,
    selectedAttributes,
    quantity,
}: Props) {
    const incrementItem = useCartStore((state) => state.incrementItem);
    const decrementItem = useCartStore((state) => state.decrementItem);
    return (
        <div className="flex flex-col justify-between items-center">
            <button
                type="button"
                onClick={() => incrementItem(id, selectedAttributes)}
                data-testid="cart-item-amount-decrease"
            >
                <CiSquarePlus className="text-4xl" />
            </button>
            <div data-testid="cart-item-amount">{quantity}</div>
            <button
                type="button"
                onClick={() => decrementItem(id, selectedAttributes)}
                data-testid="cart-item-amount-increase"
            >
                <CiSquareMinus className="text-4xl" />
            </button>
        </div>
    );
}
