import { cn } from 'clsx-for-tailwind';
import type { PriceType } from '../../definitions';

export default function Price({
    currencySymbol,
    amount,
    renderTitle,
    className,
}: PriceType & { renderTitle?: boolean; className?: string }) {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            {renderTitle && <h2>PRICE:</h2>}
            <div>
                {currencySymbol}
                {amount.toFixed(2)}
            </div>
        </div>
    );
}
