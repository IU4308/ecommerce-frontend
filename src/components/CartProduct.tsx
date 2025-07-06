import type { ProductType } from '../definitions';
import AttributeList from './shared/AttributeList';
import Price from './shared/Price';

export default function CartProduct({ name, price, attributes }: ProductType) {
    return (
        <div className="flex gap-2 items-stretch">
            <div className="flex flex-col gap-2  flex-1">
                <h2 className="text-2xl text-secondary">{name}</h2>
                <Price {...price} />
                <AttributeList attributes={attributes} />
            </div>
            <div className=" flex-1">
                <img
                    src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                    className="h-full w-full "
                />
            </div>
        </div>
    );
}
