import CartProduct from './CartProduct';
import PrimaryButton from './shared/PrimaryButton';
import { useCartStore } from '../store/useCartStore';

export default function Cart() {
    const items = useCartStore((state) => state.items);
    return (
        <div className="bg-background absolute z-20 top-17 right-14 min-w-[300px] max-h-[80vh] overflow-y-auto flex flex-col gap-8 p-4">
            <div className="flex gap-2 items-baseline">
                <span className="font-bold text-xl">My Bag,</span>
                <span>{items.length} items</span>
            </div>
            {items.map((product, index) => (
                <CartProduct key={`${product.id}-${index}`} {...product} />
            ))}
            <PrimaryButton>PLACE ORDER</PrimaryButton>
        </div>
    );
}
