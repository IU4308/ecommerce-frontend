type Props = {
    value: string;
    selected: boolean;
    onClick: () => void;
};

export default function TextBlock({ value, selected, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className={`px-4 py-2 border cursor-pointer ${
                selected ? 'bg-black text-white' : ''
            }`}
        >
            {value}
        </div>
    );
}
