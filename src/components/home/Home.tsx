import ProductCard from './ProductCard';

export default function Home() {
    const products = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: 'iPhone 12 Pro',
        price: 50,
        imageUrl: `https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg`,
    }));
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
