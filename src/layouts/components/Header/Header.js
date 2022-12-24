import { faBars, faMagnifyingGlass, faRightFromBracket, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { logoutAdmin } from '~/services/apiAuth';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [left, setLeft] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    const id = user?._id;
    const accessToken = user?.accessToken;

    const handleLeft = () => {
        setLeft(!left);
    };

    const handleLogoutAdmin = async () => {
        await logoutAdmin(dispatch, id, navigate, accessToken, axiosJWT);
    };

    return (
        <div className={left ? cx('wrapper', 'active') : cx('wrapper')}>
            <nav className={cx('header-nav')}>
                <div className={cx('nav-left')}>
                    <div className={cx('icon-menu')} onClick={() => handleLeft()}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={cx('title')}>
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className={cx('title')}>
                        <Link to="/orders">Thanh toán</Link>
                    </div>
                    <form action="" className="form-inline" method="GET">
                        <div className={cx('input-group', 'input')}>
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Nhập mã đơn hàng"
                                style={{ height: 28 }}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-navbar" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={cx('profile')}>
                    <div className="btn-group">
                        <div className={cx('avt')} data-toggle="dropdown" aria-expanded="false"></div>
                        <div className={cx('dropdown-menu', 'dropdown-menu-right', 'menu-dropdown')}>
                            <button className={cx('btn dropdown-item', 'btn-drop')} type="button">
                                <Link to={`/users/edit/${user?._id}`}>
                                    <FontAwesomeIcon icon={faUserPen} className={cx('icon-drop')} />
                                    <span className="text">Sửa thông tin</span>
                                </Link>
                            </button>
                            <button
                                className={cx('btn dropdown-item', 'btn-drop')}
                                type="button"
                                onClick={handleLogoutAdmin}
                            >
                                <FontAwesomeIcon icon={faRightFromBracket} className={cx('icon-drop')} />
                                <span>Thoát</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
