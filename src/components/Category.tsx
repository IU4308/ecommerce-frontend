import { cn } from 'clsx-for-tailwind';
import { Link } from 'react-router';

export default function Category({
    name,
    activeCategory,
    onClick,
}: {
    name: string;
    activeCategory: string;
    onClick: (category: string) => void;
}) {
    const isActive = activeCategory === name;
    return (
        <Link
            to={`/${name}`}
            className={cn('uppercase', {
                'underline underline-offset-26 text-primary': isActive,
            })}
            onClick={() => onClick(name)}
            data-testid={isActive ? 'active-category-link' : 'category-link'}
        >
            {name}
        </Link>
    );
}
