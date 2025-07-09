import { cn } from 'clsx-for-tailwind';

type Props = {
    value: string; // hex color string
    selected: boolean;
    onClick: () => void;
    testId: string;
};

export default function ColorBlock({
    value,
    selected,
    onClick,
    testId,
}: Props) {
    console.log(testId);
    return (
        <div
            onClick={onClick}
            className={cn(
                'w-10 h-10 cursor-pointer outline-primary outline-offset-2',
                {
                    'outline-2': selected,
                }
            )}
            style={{ backgroundColor: value }}
            data-testid={testId}
        />
    );
}
