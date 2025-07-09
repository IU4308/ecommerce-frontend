import { Outlet } from 'react-router';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useCartStore } from '../store/useCartStore';

export default function AppLayout() {
    const cartIsOpen = useCartStore((state) => state.cartIsOpen);
    const closeCart = useCartStore((state) => state.closeCart);

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
            <Header />

            {/* Gray overlay when cart is open */}
            {cartIsOpen && (
                <div
                    className="fixed inset-0 bg-black/40  z-10"
                    onClick={closeCart}
                />
            )}

            <main
                className={`p-16 relative z-0 transition-all duration-200 ${
                    cartIsOpen ? 'pointer-events-none select-none' : ''
                }`}
            >
                <Outlet />
            </main>
        </div>
    );
}
