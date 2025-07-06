import { FaShopify } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';
import Cart from './Cart';
import { useState } from 'react';
import CategoryList from './CategoryList';

export default function Header() {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const handleToggleCart = () => {
        setCartIsOpen((isOpen) => !isOpen);
    };
    return (
        <header className="sticky top-0 bg-background z-20 flex items-center justify-between px-16 py-4">
            <CategoryList />
            <NavLink to={'/'}>
                <FaShopify className="text-primary text-4xl" />
            </NavLink>
            <button onClick={handleToggleCart}>
                <IoCartOutline className="text-2xl" />
            </button>
            {cartIsOpen && <Cart />}
        </header>
    );
}
