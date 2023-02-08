import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';

import { mySwalError } from '~/configs/alert';

function HeaderListUser({ onClick }) {
    return (
        <Card.Header style={{ borderBottom: 0 }}>
            <span
                className="text-danger"
                style={{ cursor: 'pointer' }}
                onClick={() => mySwalError('error', 'Chức năng đang được phát triển')}
            >
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
                                <option> -- Tìm kiếm theo --</option>
                                <option value="email">E-mail</option>
                                <option value="phone">Số điện thoại</option>
                                <option value="name">Họ tên</option>
                            </select>

                            <Form.Control type="text" placeholder="Nhập từ khóa" />
                            <div className="input-group-append">
                                <Button
                                    variant="warning"
                                    onClick={() => mySwalError('error', 'Chức năng đang được phát triển')}
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
