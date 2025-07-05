import { useLoaderData } from 'react-router';
import parse from 'html-react-parser';
import AttributeList from '../shared/AttributeList';

export default function ProductOptions() {
    const { name, description, price, attributes } = useLoaderData();
    // console.log(attributes);
    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-bold text-2xl">{name}</h1>
            {/* <Sizes /> */}
            <AttributeList attributes={attributes} />
            <div className="flex flex-col gap-2 font-bold">
                <h2>PRICE:</h2>
                <div>${price.amount.toFixed(2)}</div>
            </div>
            <button className="px-16 py-2 bg-primary text-primary-foreground">
                ADD TO CART
            </button>
            <div className="prose">{parse(description)}</div>
        </div>
    );
}
