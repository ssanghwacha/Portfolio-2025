// Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Header from './global/Header';
import Footer from './global/Footer';

function Layout() {
    const location = useLocation();
    const isAltra = location.pathname.includes('/project/altra');

    return (
        <>
            <Header hideOnScroll={isAltra} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
