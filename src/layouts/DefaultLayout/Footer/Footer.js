import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <strong>
                <span>Copyright © 2010-2022 </span>
                <Link to="/">2CM Dev</Link>
                <span>.</span>
            </strong>
            <span> All rights reserved</span>
            <div className="float-right">
                <strong>Version 5.5</strong>
            </div>
        </div>
    );
}

export default Footer;
