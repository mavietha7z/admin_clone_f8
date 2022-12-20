import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
