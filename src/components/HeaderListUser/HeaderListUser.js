import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';

function HeaderListUser() {
    return (
        <div className="card-header" style={{ borderBottom: 0 }}>
            <span className="text-danger">
                <FontAwesomeIcon icon={faBolt} />
                <span>Logout tất cả</span>
            </span>

            <div className="card-tools ">
                <div className="input-group input-group-sm dataTables_filter">
                    <div className="float-left" style={{ marginRight: 10 }}>
                        <button className="btn btn-dark">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Bị khóa</span>
                        </button>
                    </div>

                    <div className="float-right">
                        <div className="input-group">
                            <select name="status" className="form-control">
                                <option>-- Trạng thái --</option>
                                <option value="status1">Hoạt động</option>
                                <option value="status0">Bị khóa</option>
                                <option value="verifydoc">Chờ xác thực</option>
                            </select>

                            <select name="type" className="form-control">
                                <option> -- Theo --</option>
                                <option value="id">Mã ID</option>
                                <option value="email">E-mail</option>
                                <option value="phone">Số điện thoại</option>
                                <option value="username">Tên đăng nhập</option>
                                <option value="name">Họ tên</option>
                            </select>

                            <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-warning">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderListUser;
