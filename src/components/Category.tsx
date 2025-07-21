import { cn } from 'clsx-for-tailwind';
import { Link, useParams } from 'react-router';

export default function Category({ name }: { name: string }) {
    const { category } = useParams();
    const isActive = category === name;
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
