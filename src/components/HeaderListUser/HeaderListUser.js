import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
function HeaderListUser({ onClick }) {
    return (
        <Card.Header style={{ borderBottom: 0 }}>
            <span className="text-danger">
                <FontAwesomeIcon icon={faBolt} />
                <span>Logout tất cả</span>
            </span>

            <div className="card-tools ">
                <div className="input-group input-group-sm dataTables_filter">
                    <div className="float-left" style={{ marginRight: 10 }}>
                        <Button variant="dark" onClick={onClick}>
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Bị khóa</span>
                        </Button>
                    </div>

                    <div className="float-end">
                        <div className="input-group">
                            <select className="form-control">
                                <option>-- Trạng thái --</option>
                                <option value="status1">Hoạt động</option>
                                <option value="status0">Bị khóa</option>
                            </select>

                            <select className="form-control">
                                <option> -- Theo --</option>
                                <option value="email">E-mail</option>
                                <option value="phone">Số điện thoại</option>
                                <option value="username">Tên đăng nhập</option>
                                <option value="name">Họ tên</option>
                            </select>

                            <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa" />
                            <div className="input-group-append">
                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        MySwal.fire('Lỗi', 'Chức năng này đang được phát triển', 'error');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card.Header>
    );
}

export default HeaderListUser;
