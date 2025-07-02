import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

type Product = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
};

export default function Home() {
    const products = useLoaderData() as Product[];
    return (
        <div>
            <div className="text-4xl pb-16">Women</div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard {...product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
