import { Outlet } from 'react-router';
import Header from '../components/Header';

export default function AppLayout() {
    return (
        <div className="relative max-w-[1500px] mx-auto">
            <Header />
            <main className="p-16">
                <Outlet />
            </main>
        </div>
    );
}
