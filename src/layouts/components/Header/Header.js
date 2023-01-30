import Swal from 'sweetalert2';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { logoutAdmin } from '~/services/apiAuth';
import './Header.css';

const MySwal = withReactContent(Swal);

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleLogout = async () => {
        const result = await logoutAdmin(dispatch, currentUser.accessToken);

        if (result.statusCode === 0) {
            navigate('/login');
            MySwal.fire('Thành công', 'Đăng xuất thành công', 'success');
        } else {
            MySwal.fire('Lỗi', `${result.message || 'Đăng xuất thất bại'}`, 'error');
        }
    };

    return (
        <div className={'wrapper-header'}>
            <div className={'header-left'}>
                <div className={'header-icon-menu'}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={'header-title'}>
                    <Link to="/">Trang chủ</Link>
                </div>
            </div>

            <div className="header-profile">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="avt"></Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <button className="btn btn-sm w-100" type="button" onClick={handleLogout}>
                                <FontAwesomeIcon icon={faRightFromBracket} className={'icon-drop'} />
                                <span className="dropdown-text">Đăng xuất</span>
                            </button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Header;
