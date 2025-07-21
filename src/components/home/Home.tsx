import { useLoaderData, useParams, useRouteLoaderData } from 'react-router';
import ProductCard from './ProductCard';
import type { HomeProduct } from '../../definitions';

export default function Home() {
    const products = useLoaderData() as HomeProduct[];
    const { category } = useParams();

    const categories = useRouteLoaderData('layout') as { name: string }[];

    const categoryList = categories?.map((c) => c.name.toLowerCase()) ?? [];

    const activeCategory = category?.toLowerCase() ?? 'all';

    if (!categoryList.includes(activeCategory)) {
        throw new Response('Category Not Found', { status: 404 });
    }
    return (
        <div>
            <div className="text-4xl pb-16 uppercase">{activeCategory}</div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard
                        {...product}
                        activeCategory={activeCategory!}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}
