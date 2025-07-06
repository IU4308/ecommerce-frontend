import { useLoaderData } from 'react-router';
import parse from 'html-react-parser';
import AttributeList from '../shared/AttributeList';
import Price from '../shared/Price';
import PrimaryButton from '../shared/PrimaryButton';

export default function ProductOptions() {
    const { name, description, price, attributes } = useLoaderData();
    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-bold text-2xl">{name}</h2>
            <AttributeList attributes={attributes} />
            <Price {...price} renderTitle className="font-bold" />
            {/* <button className="px-16 py-2 bg-primary text-primary-foreground">
                ADD TO CART
            </button> */}
            <PrimaryButton>ADD TO CART</PrimaryButton>
            <div className="prose">{parse(description)}</div>
        </div>
    );
}
