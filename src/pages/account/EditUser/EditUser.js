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
                                <div className="card-header">
                                    <h3 className="card-title">Ngô Văn Quý</h3>
                                </div>
                                <form
                                    method="POST"
                                    action="/thenhanhcp/users/452"
                                    acceptCharset="UTF-8"
                                    autoComplete="off"
                                >
                                    <input name="_method" type="hidden" defaultValue="PATCH" />
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="username">Username:</label>
                                                <input
                                                    name="username"
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    defaultValue="quynvithn"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Họ và tên:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter Full Name"
                                                    defaultValue="Ngô Văn Quý"
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
                                                <label htmlFor="phone">Số điện thoại:</label>
                                                <input
                                                    name="phone"
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Enter Number Phone"
                                                    defaultValue="0369574322"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="gender">Giới tính:</label>
                                                <select className="form-control" name="gender">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="unknown">Unknown</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="gender">2FA:</label>
                                                <select className="form-control" name="twofactor">
                                                    <option value>Không đặt</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group ">
                                                <label htmlFor="group">Nhóm: </label>
                                                <select className="form-control" name="group">
                                                    <option value={1}>Guest</option>
                                                    <option value={2} selected="selected">
                                                        THÀNH VIÊN
                                                    </option>
                                                    <option value={4}>VIP/API</option>
                                                </select>
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="roles">Vai trò (khách hàng luôn là USER): </label>
                                                <select className="form-control" tabIndex={-1} aria-hidden="true">
                                                    <option value="BACKEND">BACKEND</option>
                                                    <option value="USER" selected="selected">
                                                        USER
                                                    </option>
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
                                                    placeholder="Bỏ qua nếu không thay đổi"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="mkc2">Mật khẩu cấp 2:</label>
                                                <input
                                                    name="mkc2"
                                                    type="password"
                                                    className="form-control"
                                                    id="mkc2"
                                                    placeholder="Nhập mật khẩu cấp 2"
                                                />
                                            </div>
                                            <div className="form-group ">
                                                <label htmlFor="verify_document">Xác minh giấy tờ:</label>
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
                                            Cập nhật thông tin
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

export default EditUser;
