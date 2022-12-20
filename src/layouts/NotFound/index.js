import className from 'classnames/bind';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('error-4xx-code')}>&nbsp;</h2>
                <h1 className={cx('error-4xx-title')}>Không tìm thấy nội dung 😓</h1>
                <ul>
                    <li className={cx('suggestion')}>
                        <p>
                            URL của nội dung này đã <strong>bị thay đổi</strong> hoặc <strong>không còn tồn tại</strong>
                        </p>
                    </li>
                    <li className={cx('suggestion')}>
                        <p>
                            Nếu bạn <strong>đang lưu URL này</strong>, hãy thử
                            <strong> truy cập lại từ trang chủ</strong> thay vì dùng URL đã lưu
                        </p>
                    </li>
                </ul>
                <p>
                    <Link className={cx('back')} to="/">
                        Truy cập trang chủ
                    </Link>
                </p>
            </div>
            <div className={cx('copyright')}>© 2018 - 2022 F8. Nền tảng học lập trình hàng đầu Việt Nam</div>
        </div>
    );
}

export default NotFound;
