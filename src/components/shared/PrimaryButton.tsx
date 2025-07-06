import type { ReactNode } from 'react';

export default function PrimaryButton({ children }: { children: ReactNode }) {
    return (
        <button className="px-16 py-2 bg-primary text-primary-foreground">
            {children}
        </button>
    );
}
