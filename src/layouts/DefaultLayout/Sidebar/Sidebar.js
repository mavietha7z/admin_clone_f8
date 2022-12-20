import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Image } from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faChartColumn,
    faChevronLeft,
    faChevronRight,
    faCog,
    faCubes,
    faGauge,
    faNewspaper,
    faUser,
    faWrench,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const [isHover, setIsHover] = useState(false);
    const [isActivePin, setIsActivePin] = useState(false);
    const [isActiveStat, setIsActiveStat] = useState(false);
    const [isActiveAccount, setIsActiveAccount] = useState(false);
    const [isActiveTool, setIsActiveTool] = useState(false);
    const [isActiveModun, setIsActiveModun] = useState(false);
    const [isActiveConfig, setIsActiveConfig] = useState(false);

    const handleActivePin = () => {
        setIsActivePin(!isActivePin);
    };

    const handleActiveStat = () => {
        setIsActiveStat(!isActiveStat);
    };

    const handleActiveAccount = () => {
        setIsActiveAccount(!isActiveAccount);
    };

    const handleActiveTool = () => {
        setIsActiveTool(!isActiveTool);
    };

    const handleActiveModun = () => {
        setIsActiveModun(!isActiveModun);
    };

    const handleActiveConfig = () => {
        setIsActiveConfig(!isActiveConfig);
    };

    const handleHover = () => {
        setIsHover(true);
    };

    const handleUnHover = () => {
        setIsHover(false);
    };

    return (
        <div
            className={isHover ? cx('wrapper', 'active') : cx('wrapper')}
            onMouseOver={() => handleHover()}
            onMouseLeave={() => handleUnHover()}
        >
            <Link to="/" className={cx('link-logo')}>
                <div className={cx('logo')}>
                    <img src={Image.logo} alt="F8" />
                </div>
            </Link>

            <div className={cx('sidebar')}>
                <div className={cx('over')}>
                    <ul>
                        <li>
                            <Link className={cx('link')} to="/">
                                <FontAwesomeIcon icon={faGauge} className={cx('icon')} />
                                <span className={isHover && cx('active')}>Bảng quản trị</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className={isActivePin ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActivePin()}
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-target="#collapsePin"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faBook} className={cx('icon')} />
                                <span className={isHover && cx('active')}>
                                    Khóa học
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>

                            <div id="collapsePin" className="collapse">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/course">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Danh sách khóa học</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                className={isActiveStat ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveStat()}
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-target="#collapseStat"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faChartColumn} className={cx('icon')} />
                                <span className={isHover && cx('active')}>
                                    Thống kê
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseStat">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/charging">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Thống kê đổi thẻ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/mtopup">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Thống kê nạp cước</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/softcard">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Thống kê bán thẻ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/stockcard">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Thống kê kho thẻ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/deposit">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Thống kê nạp tiền</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/withdraw">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Thống kê rút tiền</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/dailystat">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Tổng hợp ngày</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/statistic/user">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Sản lượng thành viên</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link className={cx('link')} to="/news">
                                <FontAwesomeIcon icon={faNewspaper} className={cx('icon')} />
                                <span className={isHover && cx('active')}>Tin tức</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                className={isActiveAccount ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveAccount()}
                                data-toggle="collapse"
                                data-target="#collapseAccount"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                                <span className={isHover && cx('active')}>
                                    Tài khoản
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseAccount">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/users">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Người dùng</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                className={isActiveTool ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveTool()}
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-target="#collapseTools"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faWrench} className={cx('icon')} />
                                <span className={isHover && cx('active')}>
                                    Công cụ
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseTools">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/seo">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Seo OnePage</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/tools">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Xóa dữ liệu</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                className={isActiveModun ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveModun()}
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-target="#collapseModun"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faCubes} className={cx('icon')} />
                                <span className={isHover && cx('active')}>
                                    Mô-đun khác
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseModun">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/menu">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Menu</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/pages">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Trang tĩnh</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/sliders">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Trình diễn ảnh</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/webdata">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Webdata</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/twofactor">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Mã bảo mật</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/banners">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Trao đổi banner</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/merchants">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Đối tác kết nối</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                className={isActiveConfig ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveConfig()}
                                aria-expanded="false"
                                data-toggle="collapse"
                                data-target="#collapseConfig"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faCog} className={cx('icon')} />
                                <span className={isHover && cx('active')}>
                                    Cấu hình hệ thống
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseConfig">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/settings">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Cài đặt</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/currencies">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Tiền tệ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/paygates">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Cổng thanh toán</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/language">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Ngôn ngữ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/sendmail/setting">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className={isHover && cx('active')}>Cấu hình mail</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
