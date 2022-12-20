import classNames from 'classnames/bind';
import Breadcrumb from '../Breadcrumb';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ name }) {
    return (
        <div className="col-5">
            <h1 className={cx('title')}>{name}</h1>
            <Breadcrumb name={name} />
        </div>
    );
}

export default Title;
