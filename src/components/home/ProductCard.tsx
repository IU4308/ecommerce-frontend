import { IoCartOutline } from 'react-icons/io5';
import type { HomeProduct } from '../../definitions';
import { cn } from 'clsx-for-tailwind';

export default function ProductCard({
    id,
    name,
    category,
    inStock,
    price,
    gallery: [imageUrl],
    activeCategory,
}: HomeProduct & { activeCategory: string }) {
    return (
        (category === activeCategory || activeCategory === 'all') && (
            <a
                href={`/products/${id}`}
                className={cn('relative p-4 hover:shadow-2xl group', {
                    'opacity-50': !inStock,
                })}
            >
                {!inStock && (
                    <p className="absolute top-1/3 left-1/4 text-4xl">
                        OUT OF STOCK
                    </p>
                )}
                <img
                    src={imageUrl}
                    className=" object-cover aspect-square w-full"
                />
                <div className="relative">
                    {inStock && (
                        <button
                            disabled={!inStock}
                            className="p-2 hover:opacity-90 active:opacity-70 rounded-full absolute z-10 bg-primary top-[-20px] right-5 opacity-0 group-hover:opacity-100 transition"
                        >
                            <IoCartOutline className="text-2xl text-primary-foreground" />
                        </button>
                    )}
                    <div className="text-2xl pt-4">{name}</div>
                    <div className="text-lg text-secondary">
                        {`${price.currencySymbol}${price.amount.toFixed(2)}`}
                    </div>
                </div>
            </a>
        )
    );
}
