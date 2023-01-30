import { Fragment } from 'react';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Sidebar from '~/layouts/components/Sidebar';
import './DefaultLayout.css';

function DefaultLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div className={'defaultLayout'}>
                <Header />
                <Fragment>{children}</Fragment>
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
