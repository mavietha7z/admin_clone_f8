import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Image } from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBlog,
    faBook,
    faChevronLeft,
    faChevronRight,
    faCog,
    faGauge,
    faNewspaper,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const [isHover, setIsHover] = useState(false);
    const [isActivePin, setIsActivePin] = useState(false);
    const [isActiveAccount, setIsActiveAccount] = useState(false);
    const [isActiveConfig, setIsActiveConfig] = useState(false);
    const [isActiveBlog, setIsActiveBlog] = useState(false);
    const [isActiveVideo, setIsActiveVideo] = useState(false);

    const handleActivePin = () => {
        setIsActivePin(!isActivePin);
    };

    const handleActiveAccount = () => {
        setIsActiveAccount(!isActiveAccount);
    };

    const handleActiveBlog = () => {
        setIsActiveBlog(!isActiveBlog);
    };

    const handleActiveVideo = () => {
        setIsActiveVideo(!isActiveVideo);
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
                                <span>Bảng quản trị</span>
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
                                <span>
                                    Khóa học
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div id="collapsePin" className="collapse">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/course">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Danh sách khóa học</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
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
                                <span>
                                    Tài khoản
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseAccount">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/users">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Danh sách người dùng</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                className={isActiveBlog ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveBlog()}
                                data-toggle="collapse"
                                data-target="#collapseBlog"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faBlog} className={cx('icon')} />
                                <span>
                                    Bài viết
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseBlog">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/blog">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Danh sách bài viết</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                className={isActiveVideo ? cx('link', 'active') : cx('link')}
                                onClick={() => handleActiveVideo()}
                                data-toggle="collapse"
                                data-target="#collapseVideo"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faVideo} className={cx('icon')} />
                                <span>
                                    Video
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseVideo">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/video">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Danh sách video</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link className={cx('link')} to="/slideshow">
                                <FontAwesomeIcon icon={faNewspaper} className={cx('icon')} />
                                <span>Slideshow</span>
                            </Link>
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
                                <span>
                                    Cấu hình hệ thống
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </span>
                            </Link>
                            <div className="collapse" id="collapseConfig">
                                <ul>
                                    <li>
                                        <Link className={cx('link-sub')} to="/settings">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Cài đặt</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/currencies">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Tiền tệ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/paygates">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Cổng thanh toán</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/language">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Ngôn ngữ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={cx('link-sub')} to="/sendmail/setting">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span>Cấu hình mail</span>
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
