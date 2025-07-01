import { FaShopify } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink, useLoaderData } from 'react-router';
import Category from './Category';

export default function Header() {
    const categories = useLoaderData() as { name: string }[];
    return (
        <header className="flex items-center justify-between px-16 py-4">
            <div className="flex items-center gap-4">
                {categories.map((category) => (
                    <Category
                        key={category.name}
                        name={category.name}
                        activeCategory="all"
                    />
                ))}
            </div>
            <NavLink to={'/'}>
                <FaShopify className="text-primary text-4xl" />
            </NavLink>
            <IoCartOutline className="text-2xl" />
        </header>
    );
}
