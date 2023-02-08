import { Fragment, useEffect, useState } from 'react';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        setWidth(screenWidth);
    }, []);

    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        setWidth(screenWidth);
    });

    return (
        <div className="min-width">
            {width > 1200 ? (
                <Fragment>
                    <Sidebar />
                    <div className="defaultLayout">
                        <Header />
                        <Fragment>{children}</Fragment>
                        <Footer />
                    </div>
                </Fragment>
            ) : (
                <div className="text-center" style={{ marginTop: 200 }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>Vui lòng truy cập bằng PC</span>
                </div>
            )}
        </div>
    );
}

export default DefaultLayout;
