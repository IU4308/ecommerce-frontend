import { cn } from 'clsx-for-tailwind';

export default function Category({
    name,
    activeCategory,
    onClick,
}: {
    name: string;
    activeCategory: string;
    onClick: (category: string) => void;
}) {
    return (
        <button
            className={cn('uppercase', {
                'underline underline-offset-26 text-primary':
                    activeCategory === name,
            })}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
}
