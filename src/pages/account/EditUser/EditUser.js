import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa người dùng" />
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
                                    <h2 className="card-title">Ngô Văn Quý</h2>
                                </div>

                                <div className="card-body row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Username:</label>
                                            <input
                                                name="username"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter username"
                                                defaultValue="quynvithn"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Họ và tên:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter full name"
                                                defaultValue="Ngô Văn Quý"
                                            />
                                        </div>
                                        <div className="form-group ">
                                            <label>Email:</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Điện thoại:</label>
                                            <input
                                                name="phone"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter number phone"
                                                defaultValue="0369574322"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label>Vai trò: ( Người dùng luôn là USER ) </label>
                                            <select className="form-control">
                                                <option value="USER" selected="selected">
                                                    USER
                                                </option>
                                                <option value="SALES">ADMIN</option>
                                            </select>
                                        </div>
                                        <div className="form-group ">
                                            <label>Mật khẩu: </label>
                                            <input
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Bỏ qua nếu không thay đổi"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Giới tính:</label>
                                            <select className="form-control" name="gender">
                                                <option value="male">Name</option>
                                                <option value="female">Nữ</option>
                                            </select>
                                        </div>
                                        <div className="form-group ">
                                            <label>Xác minh giấy tờ:</label>
                                            <select name="verify_document" className="form-control">
                                                <option value>-- Chọn --</option>
                                                <option value="accept">Chấp nhận</option>
                                                <option value="denied">Từ chối</option>
                                                <option value="blockacc">Khóa tài khoản</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Cập nhật
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

export default EditUser;
