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
                                <div
                                    className="card-header"
                                    style={{ backgroundColor: '#f8f9fa', borderBottom: 0 }}
                                ></div>
                                <form method="POST" action="/users" acceptCharset="UTF-8" autoComplete="off">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="username">Tên đăng nhập:</label>
                                                <input
                                                    name="username"
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Viết liền không dấu, ví dụ: crazyuser"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Họ tên:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Họ và tên"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Điện thoại:</label>
                                                <input
                                                    name="phone"
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Số di động nhận sms, bắt đầu bằng 0"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="gender">Giới tính:</label>
                                                <select className="form-control" name="gender">
                                                    <option value="male">Nam</option>
                                                    <option value="female">Nữ</option>
                                                    <option value="unknown">Không rõ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="group">Nhóm:</label>
                                                <select className="form-control" name="group">
                                                    <option value={1}>Guest</option>
                                                    <option value={2} selected>
                                                        THÀNH VIÊN
                                                    </option>
                                                    <option value={4}>VIP/API</option>
                                                </select>
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="roles">Vai trò: </label>
                                                <select className="form-control" tabIndex={-1} aria-hidden="true">
                                                    <option value="BACKEND">BACKEND</option>
                                                    <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                                                    <option value="USER">USER</option>
                                                    <option value="SALES">SALES</option>
                                                </select>
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="password">Mật khẩu: </label>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Tối thiếu 6 ký tự"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Tạo mới
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
