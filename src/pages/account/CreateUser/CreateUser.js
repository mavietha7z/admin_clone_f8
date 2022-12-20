import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Tạo người dùng" />
                    <NavMenu
                        nameHome="Tất cả"
                        pathHome="/users"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/users/create"
                        colorPlus="success"
                        float="float-right"
                    />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-light">
                                <div className="card-header" style={{ backgroundColor: '#f8f9fa', borderBottom: 0 }}>
                                    <h2>Thông tin người dùng</h2>
                                </div>

                                <div className="card-body row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Họ và tên:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Họ và tên"
                                            />
                                        </div>
                                        <div className="form-group ">
                                            <label>Email:</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Điện thoại: ( Có thể bỏ qua )</label>
                                            <input
                                                name="phone"
                                                type="text"
                                                className="form-control"
                                                placeholder="Số di động nhận sms, bắt đầu bằng 0"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label>Vai trò: ( Người dùng luôn là USER )</label>
                                            <select className="form-control">
                                                <option value="ADMIN">ADMIN</option>
                                                <option value="USER" selected>
                                                    USER
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group ">
                                            <label>Mật khẩu: </label>
                                            <input
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Tối thiểu 8 ký tự"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Giới tính:</label>
                                            <select className="form-control" name="gender">
                                                <option value="male">Nam</option>
                                                <option value="female">Nữ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Tạo mới
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
