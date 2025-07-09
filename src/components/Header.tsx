import { FaShopify } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';
import CategoryList from './CategoryList';
import Cart from './Cart';
import { useCartStore } from '../store/useCartStore';

export default function Header() {
    const items = useCartStore((state) => state.items);
    const cartIsOpen = useCartStore((state) => state.cartIsOpen);
    const toggleCart = useCartStore((state) => state.toggleCart);
    return (
        <header className="sticky top-0 bg-background z-20 flex items-center justify-between px-16 py-4">
            <CategoryList />
            <NavLink to={'/'}>
                <FaShopify className="text-primary text-4xl" />
            </NavLink>
            <button
                onClick={toggleCart}
                className="relative"
                data-testid="cart-btn"
            >
                <IoCartOutline className="text-4xl" />
                {items.length > 0 && (
                    <div className="absolute top-[-5px] right-[-10px] text-white bg-black px-2 rounded-full">
                        {items.reduce(
                            (count, curr) => count + curr.quantity,
                            0
                        )}
                    </div>
                )}
            </button>

            {cartIsOpen && <Cart />}
        </header>
    );
}
