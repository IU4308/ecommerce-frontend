import { cn } from 'clsx-for-tailwind';

type Props = {
    value: string;
    selected: boolean;
    onClick: () => void;
};

export default function TextBlock({ value, selected, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className={cn('px-4 py-2 border cursor-pointer', {
                'bg-black text-white': selected,
            })}
        >
            {value}
        </div>
    );
}
