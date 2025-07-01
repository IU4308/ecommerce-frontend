import Sizes from './Sizes';

export default function ProductOptions() {
    const price = 59.99; // Example price, replace with actual data source
    const description = <p>Awesome winter jacket</p>;
    return (
        <div className="flex flex-none basis-1/4 flex-col gap-8">
            <h1 className="font-bold text-2xl">Jacket</h1>
            <Sizes />
            <div className="flex flex-col gap-2 font-bold">
                <h2>PRICE:</h2>
                <div>${price.toFixed(2)}</div>
            </div>
            <button className="px-16 py-2 bg-primary text-primary-foreground">
                ADD TO CART
            </button>
            {description}
        </div>
    );
}
