import { Form, Link } from 'react-router';
import { IoCartOutline } from 'react-icons/io5';
import type { HomeProduct } from '../../definitions';
import { cn } from 'clsx-for-tailwind';
import Price from '../shared/Price';
import { toKebabCase } from '../../utils/helpers';

export default function ProductCard({
    id,
    name,
    category,
    inStock,
    price,
    gallery: [imageUrl],
    brand,
    activeCategory,
}: HomeProduct & { activeCategory: string; brand?: string }) {
    return (
        (category === activeCategory || activeCategory === 'all') && (
            <Link
                to={`/products/${id}`}
                className={cn('relative p-4 hover:shadow-2xl group', {
                    'opacity-50': !inStock,
                })}
                data-testid={`product-${toKebabCase(name)}`}
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
                        <Form method="post">
                            <input
                                type="hidden"
                                name="product"
                                value={JSON.stringify({
                                    id,
                                    name,
                                    brand,
                                    price,
                                    category,
                                    gallery: [imageUrl],
                                    inStock,
                                })}
                            />
                            <button
                                type="submit"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 hover:opacity-90 active:opacity-70 rounded-full absolute z-10 bg-primary top-[-20px] right-5 opacity-0 group-hover:opacity-100 transition"
                            >
                                <IoCartOutline className="text-2xl text-primary-foreground" />
                            </button>
                        </Form>
                    )}
                    <div className="text-2xl pt-4">{name}</div>
                    <Price {...price} />
                </div>
            </Link>
        )
    );
}
