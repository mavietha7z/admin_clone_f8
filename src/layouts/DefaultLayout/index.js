import classNames from 'classnames/bind';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
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
