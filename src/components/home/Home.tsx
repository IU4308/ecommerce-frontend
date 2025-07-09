import { useLoaderData, useMatches, useParams } from 'react-router';
import ProductCard from './ProductCard';
import type { HomeProduct } from '../../definitions';
import { useCategoryStore } from '../../store/useCategoryStore';
import _ from 'lodash';

export default function Home() {
    const products = useLoaderData() as HomeProduct[];
    const { category } = useParams();
    const activeCategory = useCategoryStore((state) => state.activeCategory);

    const categories = useMatches().find((match) => match.pathname === '/')
        ?.data as { name: string }[];

    const categoryList = categories?.map((c) => c.name.toLowerCase()) ?? [];

    const currentCategory = category?.toLowerCase() ?? 'all';

    if (!categoryList.includes(currentCategory)) {
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
