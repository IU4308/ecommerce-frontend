import CartProduct from './CartProduct';
import { useCartStore } from '../store/useCartStore';
import { Form } from 'react-router';

export default function Cart() {
    const items = useCartStore((state) => state.items);
    const totalCount = items.reduce((count, curr) => count + curr.quantity, 0);
    const totalAmount = items.reduce(
        (amount, curr) => amount + curr.quantity * curr.price.amount,
        0
    );

    const orderItems = items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        selectedAttributes: Object.entries(item.selectedAttributes).map(
            ([attributeName, itemId]) => ({
                attributeName,
                itemId,
            })
        ),
    }));
    return (
        <Form
            method="post"
            className="bg-background absolute z-20 top-17 right-14 min-w-[300px] max-h-[80vh] overflow-y-auto scrollbar-thin flex flex-col gap-8 p-4"
        >
            <input
                type="hidden"
                name="order"
                value={JSON.stringify({ items: orderItems })}
            />
            <div className="flex gap-2 items-baseline">
                <span className="font-bold text-xl">My Bag,</span>
                <span>
                    {totalCount} {totalCount === 1 ? 'item' : 'items'}
                </span>
            </div>
            {items.map((product, index) => (
                <CartProduct key={`${product.id}-${index}`} {...product} />
            ))}
            <div
                className="flex justify-between items-center font-bold"
                data-testid="cart-total"
            >
                <span>Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>

            <button
                type="submit"
                className="primary-btn "
                disabled={totalCount === 0}
            >
                PLACE ORDER
            </button>
        </Form>
    );
}
