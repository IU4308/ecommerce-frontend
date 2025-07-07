import CartProduct from './CartProduct';
import { useCartStore } from '../store/useCartStore';

export default function Cart() {
    const items = useCartStore((state) => state.items);
    const totalCount = items.reduce((count, curr) => count + curr.quantity, 0);
    const totalAmount = items.reduce(
        (amount, curr) => amount + curr.quantity * curr.price.amount,
        0
    );
    return (
        <div className="bg-background absolute z-20 top-17 right-14 min-w-[300px] max-h-[80vh] overflow-y-auto scrollbar-thin flex flex-col gap-8 p-4">
            <div className="flex gap-2 items-baseline">
                <span className="font-bold text-xl">My Bag,</span>
                <span>
                    {totalCount} {totalCount === 1 ? 'item' : 'items'}
                </span>
            </div>
            {items.map((product, index) => (
                <CartProduct key={`${product.id}-${index}`} {...product} />
            ))}
            <div className="flex justify-between items-center font-bold">
                <span>Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button className="primary-btn">PLACE ORDER</button>
        </div>
    );
}
