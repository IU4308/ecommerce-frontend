import { cn } from 'clsx-for-tailwind';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

export default function Category({ name }: { name: string }) {
    const { category: categoryParam } = useParams();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        if (categoryParam) {
            // On /:category route, save to localStorage
            localStorage.setItem('activeCategory', categoryParam);
            setActiveCategory(categoryParam);
        } else {
            // On non-category routes (e.g. /products/:productId), restore from localStorage
            const saved = localStorage.getItem('activeCategory');
            setActiveCategory(saved);
        }
    }, [categoryParam]);

    const isActive = activeCategory === name;
    return (
        <Link
            to={`/${name}`}
            className={cn('uppercase', {
                'underline underline-offset-26 text-primary': isActive,
            })}
            data-testid={isActive ? 'active-category-link' : 'category-link'}
        >
            {name}
        </Link>
    );
}
