import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';
import type { HomeProduct } from '../../definitions';
import { useCategoryStore } from '../../store/categoryStore';

export default function Home() {
    const products = useLoaderData() as HomeProduct[];
    const activeCategory = useCategoryStore((state) => state.activeCategory);
    return (
        <div>
            <div className="text-4xl pb-16 uppercase">{activeCategory}</div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard
                        {...product}
                        activeCategory={activeCategory}
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    );
}
