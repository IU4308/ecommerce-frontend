import { Outlet } from 'react-router';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

export default function AppLayout() {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    // Prevent background scroll when cart is open
    useEffect(() => {
        if (cartIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [cartIsOpen]);

    return (
        <div className="relative max-w-[1500px] mx-auto">
            <Header
                cartIsOpen={cartIsOpen}
                onToggleCart={() => setCartIsOpen((open) => !open)}
            />

            {/* Gray overlay when cart is open */}
            {cartIsOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
                    onClick={() => setCartIsOpen(false)}
                />
            )}

            <main
                className={`p-16 relative z-0 transition-all duration-200 ${
                    cartIsOpen ? 'pointer-events-none blur-sm select-none' : ''
                }`}
            >
                <Outlet />
            </main>
        </div>
    );
}
