import { cn } from 'clsx-for-tailwind';

type Props = {
    value: string;
    selected: boolean;
    onClick: () => void;
    testId: string;
};

export default function TextBlock({ value, selected, onClick, testId }: Props) {
    return (
        <div
            onClick={onClick}
            className={cn('px-4 py-2 border cursor-pointer', {
                'bg-black text-white': selected,
            })}
            data-testid={testId}
        >
            {value}
        </div>
    );
}
