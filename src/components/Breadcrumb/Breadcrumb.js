import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);

function Breadcrumb({ name }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <ol className={cx('breadcrumb')}>
                    <li className={cx('breadcrumb-item', 'item-header')}>
                        <Link className={cx('link')} to="/">
                            Bảng quản trị
                        </Link>
                    </li>
                    <li className={cx('breadcrumb-item')}>
                        <Link className={cx('link', 'link-next')}>{name}</Link>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Breadcrumb;
