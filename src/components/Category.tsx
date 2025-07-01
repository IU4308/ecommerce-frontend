import { cn } from 'clsx-for-tailwind';

export default function Category({
    name,
    activeCategory,
}: {
    name: string;
    activeCategory: string;
}) {
    return (
        <button
            className={cn('uppercase', {
                'underline underline-offset-26 text-primary':
                    activeCategory === name,
            })}
        >
            {name}
        </button>
    );
}
