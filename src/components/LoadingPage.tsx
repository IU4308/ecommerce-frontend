import { Outlet, useNavigation } from 'react-router';

export default function LoadingPage() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="relative">
            {/* Loading overlay */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <p className="text-lg font-medium">
                        Waking up server... Please wait ⏳
                    </p>
                </div>
            )}

            {/* Your actual app layout will render here when ready */}
            <Outlet />
        </div>
    );
}
