import SizeBlock from './SizeBlock';

export default function Sizes() {
    const sizes = ['XS', 'S', 'M', 'L'];
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-bold">SIZE:</h2>
            <div className="flex gap-2">
                {sizes.map((size) => (
                    <SizeBlock key={size} size={size} />
                ))}
            </div>
        </div>
    );
}
