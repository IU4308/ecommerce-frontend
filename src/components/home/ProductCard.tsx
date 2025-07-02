import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router';

type Product = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
};
export default function ProductCard({ name, price, imageUrl }: Product) {
    return (
        <Link to={'/products/1'} className="p-4 hover:shadow-2xl">
            <img
                src={imageUrl}
                className=" object-cover aspect-square w-full"
            />
            <div className="relative">
                <button className="p-2 hover:opacity-90 active:opacity-70 rounded-full absolute z-10 bg-primary top-[-20px] right-5">
                    <IoCartOutline className="text-2xl text-primary-foreground" />
                </button>
                <div className="text-2xl pt-4">{name}</div>
                <div className="text-lg text-secondary">
                    ${price.toFixed(2)}
                </div>
            </div>
        </Link>
    );
}
