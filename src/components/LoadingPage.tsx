import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function LoadingPage() {
    return (
        <div className="relative">
            {/* Initial server wake-up fallback */}
            <Suspense
                fallback={
                    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                        <p className="text-lg font-medium">
                            Waking up server... Please wait ⏳
                        </p>
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </div>
    );
}
