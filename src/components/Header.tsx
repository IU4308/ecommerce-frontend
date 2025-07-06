import { FaShopify } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';
import CategoryList from './CategoryList';
import Cart from './Cart';

export default function Header({
    cartIsOpen,
    onToggleCart,
}: {
    cartIsOpen: boolean;
    onToggleCart: () => void;
}) {
    return (
        <header className="sticky top-0 bg-background z-20 flex items-center justify-between px-16 py-4">
            <CategoryList />
            <NavLink to={'/'}>
                <FaShopify className="text-primary text-4xl" />
            </NavLink>
            <button onClick={onToggleCart}>
                <IoCartOutline className="text-2xl" />
            </button>

            {cartIsOpen && <Cart />}
        </header>
    );
}
