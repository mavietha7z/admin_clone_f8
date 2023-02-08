import { Fragment } from 'react';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Sidebar />
            <div className={'defaultLayout'}>
                <Header />
                <Fragment>{children}</Fragment>
                <Footer />
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
