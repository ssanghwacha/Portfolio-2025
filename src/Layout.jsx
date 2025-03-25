import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './global/Header';
import Footer from './global/Footer';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
