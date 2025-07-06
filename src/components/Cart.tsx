import type { AttributeType, PriceType } from '../definitions';
import CartProduct from './CartProduct';
import PrimaryButton from './shared/PrimaryButton';

export default function Cart() {
    const price: PriceType = {
        amount: 99.99,
        currencySymbol: '$',
        currencyLabel: 'USD',
    };

    const attributes: AttributeType[] = [
        {
            name: 'Size',
            type: 'text',
            items: [
                { itemId: 'S', value: 'S', displayValue: 'S' },
                { itemId: 'L', value: 'L', displayValue: 'L' },
                { itemId: 'M', value: 'M', displayValue: 'M' },
            ],
        },
        {
            name: 'Color',
            type: 'swatch',
            items: [
                { itemId: 'Black', value: 'Black', displayValue: '#000000' },
                { itemId: 'White', value: 'White', displayValue: '#FFFFFF' },
                { itemId: 'Green', value: 'Green', displayValue: '#44FF03' },
            ],
        },
    ];
    const products = [
        {
            id: 'running-short',
            name: 'Running Short',
            brand: 'Nike',
            description: 'description',
            inStock: true,
            price,
            attributes,
            gallery: [
                'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
            ],
        },
    ];
    return (
        <div className="bg-background absolute z-20 top-17 right-14 w-[350px] flex flex-col gap-8 p-4">
            <div className="flex gap-2 items-baseline">
                <span className="font-bold text-xl">My Bag,</span>
                <span>3 items</span>
            </div>
            {products.map((product) => (
                <CartProduct key={product.id} {...product} />
            ))}
            <PrimaryButton>PLACE ORDER</PrimaryButton>
        </div>
    );
}
