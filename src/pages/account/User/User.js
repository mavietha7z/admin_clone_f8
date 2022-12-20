import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Người dùng" />
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
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <div className="float-left">
                                    <Link to="/users/logout/all" className="text-danger">
                                        <MdOutlineFlashOn />
                                        <span>Logout tất cả</span>
                                    </Link>
                                </div>
                                <div className="float-right">
                                    <div className="card-tools ">
                                        <div className="input-group input-group-sm dataTables_filter">
                                            <div className="float-left" style={{ marginRight: 10 }}>
                                                <Link to="/users?role=&group_user=&status=verifydoc&type=&keyword=">
                                                    <button className="btn btn-info">
                                                        <ImClock />
                                                        <span>Chờ xác thực</span>
                                                    </button>
                                                </Link>
                                                <Link to="/users?role=&group_user=&status=status0&type=&keyword=">
                                                    <button className="btn btn-dark">
                                                        <FaUsers />
                                                        <span>Bị khóa</span>
                                                    </button>
                                                </Link>
                                            </div>
                                            <form action name="formSearch" method="GET">
                                                <div className="input-group">
                                                    <select name="group_user" className="form-control">
                                                        <option value selected="selected">
                                                            -- Nhóm --
                                                        </option>
                                                        <option value={2}>THÀNH VIÊN</option>
                                                        <option value={4}>VIP/API</option>
                                                    </select>
                                                    <select name="status" className="form-control">
                                                        <option value>-- Trạng thái --</option>
                                                        <option value="status1">Hoạt động</option>
                                                        <option value="status0">Bị khóa</option>
                                                        <option value="verifydoc">Chờ xác thực</option>
                                                    </select>
                                                    <select name="type" className="form-control">
                                                        <option value> -- Theo --</option>
                                                        <option value="id">Mã ID</option>
                                                        <option value="email">E-mail</option>
                                                        <option value="phone">Số điện thoại</option>
                                                        <option value="username">Tên đăng nhập</option>
                                                        <option value="name">Họ tên</option>
                                                    </select>
                                                    <input
                                                        type="text"
                                                        name="keyword"
                                                        className="form-control"
                                                        placeholder="Nhập từ khóa"
                                                        defaultValue=""
                                                    />
                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-warning">
                                                            <FaSearch />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form id="index-form-data" action="/users/actions" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingTop: 0 }}>
                                    <div className="row">
                                        <div className="col-sm-12 table-responsive">
                                            <table className="table table-bordered table-striped dataTable">
                                                <thead>
                                                    <tr>
                                                        <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
                                                            <label className="pos-rel">
                                                                <input type="checkbox" className="ace" id="checkall" />
                                                                <span className="lbl" />
                                                            </label>
                                                        </th>
                                                        <th>ID</th>
                                                        <th>Họ tên</th>
                                                        <th>Thông tin</th>
                                                        <th>Số dư</th>
                                                        <th>Nhóm</th>
                                                        <th>Vai trò</th>
                                                        <th>2FA</th>
                                                        <th>Trạng thái</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={452}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>452</td>
                                                        <td>
                                                            Ngô Văn Quý <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>quynvithn</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0369574322</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0053845679
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-12-05 10:37:35</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/452/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Ngô Văn Quý"
                                                                    link="/users/452"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/452/4ed0f14fbe379f05a9c9a1ffc94017b8130e3390"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=452"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={451}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>451</td>
                                                        <td>
                                                            Trịnh Thành Danh <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>danhbaka</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">
                                                                thdanh.tphp.0511@gmail.com
                                                            </strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0045076157
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-12-02 10:23:55</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/451/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Trịnh Thành Danh"
                                                                    link="/users/451"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/451/3d00f241944214403e2b9b7b6729ac0fea030768"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=451"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={449}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>449</td>
                                                        <td>
                                                            ki ki <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>kikiki12</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">kikiki@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0050879484
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-11-22 03:34:26</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/449/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="ki ki"
                                                                    link="/users/449"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/449/83527f8a06c5b28aac3f70698e3813b536bdf524"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=449"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={448}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>448</td>
                                                        <td>
                                                            le khanh <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>cakiem59-at-gmailcom</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0971619777</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0025705434
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-11-22 02:31:13</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/448/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="le khanh"
                                                                    link="/users/448"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/448/eaab03e6266625db84809cab0e730126f8676542"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=448"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={447}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>447</td>
                                                        <td>
                                                            0968255256 <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>0968255256</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0968255256</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0033035478
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-11-20 00:26:54</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/447/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="0968255256"
                                                                    link="/users/447"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/447/2eb188d8746f879a36c797aaf0c954021afa4827"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=447"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={446}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>446</td>
                                                        <td>
                                                            tran <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>bluecomictr</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">bluecomictr@proton.me</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0020279094
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-11-07 23:38:37</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/446/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="tran"
                                                                    link="/users/446"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/446/e38acb2c3277bfc0a61fde9f312bc04a2d77dac8"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=446"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={445}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>445</td>
                                                        <td>
                                                            MAi Trung Dũng <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>bboys231</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0568877831</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0087553963
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-11-03 09:23:00</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/445/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="MAi Trung Dũng"
                                                                    link="/users/445"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/445/ffd3d511d1c4e35ef219475128c13ffd145fd7be"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=445"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={444}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>444</td>
                                                        <td>
                                                            thiều quang minh <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>minhthieu</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0988177696</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0035312414
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-10-26 12:43:20</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/444/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="thiều quang minh"
                                                                    link="/users/444"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/444/ee83da1b528d7600b58012711b4e8a01d7d1da3b"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=444"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={443}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>443</td>
                                                        <td>
                                                            MuaBan@1232ac.c <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>muaban-at-1232acc</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">MuaBan@1232ac.c</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0083969105
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-10-20 23:23:25</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/443/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="MuaBan@1232ac.c"
                                                                    link="/users/443"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/443/ab7e2ee089155d3c0143173e5b7908f38481b7e3"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=443"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={442}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>442</td>
                                                        <td>
                                                            Nguyễn Hoàng Trọng <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>trong-187</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0393328534</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0066380803
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-10-15 19:12:02</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/442/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Nguyễn Hoàng Trọng"
                                                                    link="/users/442"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/442/616965fbc1ee9cf1e08c1fb849514a8ab05fbdbe"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=442"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={441}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>441</td>
                                                        <td>
                                                            Trần Thanh phong <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>phongvn123</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">p958232@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0086262196
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-10-15 16:09:20</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/441/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Trần Thanh phong"
                                                                    link="/users/441"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/441/2a07edc3e557e4be74459f3dff450bd396416f34"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=441"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={440}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>440</td>
                                                        <td>
                                                            nguyentrang <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>nguyentrang</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">tranghuhi8@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0069520599
                                                            <span className="text-success" style={{ display: 'block' }}>
                                                                <strong>15,000 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-10-03 17:51:26</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/440/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="nguyentrang"
                                                                    link="/users/440"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/440/b16eccce8ad91088ca5552ff177c8ebfd34d9250"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=440"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={439}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>439</td>
                                                        <td>
                                                            khánh <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>nongkhanh30103-at-gmailcom</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0379038404</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0040689461
                                                            <span className="text-success" style={{ display: 'block' }}>
                                                                <strong>37,500 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-09-20 20:21:31</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/439/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="khánh"
                                                                    link="/users/439"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/439/516af862189efa502db3598fc1b0ac20a59c5fac"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=439"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={438}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>438</td>
                                                        <td>
                                                            Mai Trung Dũng <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>maitrungdung</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">mdung104@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br /> <i className="ace-icon fa fa-phone bigger-130" />
                                                                <strong className="text-info">0848161104</strong>
                                                                <span className="text-success"> </span>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0087975824
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-09-08 08:55:55</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/438/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Mai Trung Dũng"
                                                                    link="/users/438"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/438/f87b6305991b379449da68e7c1eea2de8ae722f1"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=438"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={437}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>437</td>
                                                        <td>
                                                            phong quang hiếu <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>hieupq2</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0377346300</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0055026787
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-09-07 12:20:27</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/437/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="phong quang hiếu"
                                                                    link="/users/437"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/437/1c84e44b48727fcd7790c32c819297a811643041"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=437"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={436}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>436</td>
                                                        <td>
                                                            aaaaaaaaa <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>aaaaaaaaa</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">aaaaaaaaa@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0062065583
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-09-05 08:57:49</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/436/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="aaaaaaaaa"
                                                                    link="/users/436"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/436/b903a9df6328c365c1deffecf4a7dae163a55ae6"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=436"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={435}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>435</td>
                                                        <td>
                                                            lam hoang an <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>anhquat644</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">lamhoangan@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0076819135
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-09-05 08:57:31</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/435/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="lam hoang an"
                                                                    link="/users/435"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/435/4d4e8b1d532cbb9d1518e76c5cdf68cf837518b7"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=435"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={434}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>434</td>
                                                        <td>
                                                            Võ Quang Triết <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>sukamarse</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">
                                                                trietquangmang@gmail.com
                                                            </strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0041958321
                                                            <span className="text-success" style={{ display: 'block' }}>
                                                                <strong>7,500 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-31 10:13:11</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/434/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Võ Quang Triết"
                                                                    link="/users/434"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/434/205d00454323da39f7aff689c3f4e999b23b7932"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=434"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={433}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>433</td>
                                                        <td>
                                                            Trần Nguyễn Thuý Vy <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>thyzii</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0787679593</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0079965379
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-25 19:50:43</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/433/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Trần Nguyễn Thuý Vy"
                                                                    link="/users/433"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/433/ffadef7424c77fbe5b6c35a6ead06856ad7b0da7"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=433"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={432}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>432</td>
                                                        <td>
                                                            Phạm Lương Ngọc Nhi <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>ngocnhipl</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0379749333</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0090861130
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-23 10:52:05</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/432/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Phạm Lương Ngọc Nhi"
                                                                    link="/users/432"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/432/b828d1a947b28e2b3a31e773726af72edfa445ac"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=432"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={431}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>431</td>
                                                        <td>
                                                            NGUYEN KIM GIA PHAT <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>adminne12333</strong> <br />
                                                            <i className="ace-icon fa fa-phone bigger-130" />
                                                            <strong className="text-info">0963150006</strong>
                                                            <span className="text-success"> </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0042598251
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-20 00:05:58</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/431/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="NGUYEN KIM GIA PHAT"
                                                                    link="/users/431"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/431/799c01dc1d6c4b731184008978182b9f00b8793c"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=431"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={430}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>430</td>
                                                        <td>
                                                            ai píc web cọc adminmmo. vn ko mn ới <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>adminne1</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">Hungti222@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0062899410
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-16 20:09:35</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/430/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="ai píc web cọc adminmmo. vn ko mn ới"
                                                                    link="/users/430"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/430/8aae2234ac42c09da0d5ec6ec31de5438369432a"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=430"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={429}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>429</td>
                                                        <td>
                                                            baodz <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>giabaoken2006</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">baodz@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0053173522
                                                            <span className="text-dark" style={{ display: 'block' }}>
                                                                <strong>0 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td>GoogleAuth</td>
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-14 16:39:12</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/429/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="baodz"
                                                                    link="/users/429"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/429/4ca763242ab2ca5e63caf34f04faf7d443578007"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=429"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={428}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>428</td>
                                                        <td>
                                                            Chuyển Thẻ <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>chuyenthe</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">chuyenthe@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0095136478
                                                            <span className="text-success" style={{ display: 'block' }}>
                                                                <strong>2,462,500 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-13 14:45:23</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/428/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Chuyển Thẻ"
                                                                    link="/users/428"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/428/1fa8fab349cb602ee12a43db17efd04b1a548c8f"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=428"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={427}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>427</td>
                                                        <td>
                                                            Nạp Game X5 <br />
                                                        </td>
                                                        <td>
                                                            <i className="ace-icon fa fa-user bigger-130" />
                                                            <strong>napgamex5</strong> <br />
                                                            <i className="ace-icon fa fa-envelope bigger-130" />
                                                            <strong className="text-dark">napgamex5@gmail.com</strong>
                                                            <span className="text-success">
                                                                <br />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Ví: 0022367924
                                                            <span className="text-success" style={{ display: 'block' }}>
                                                                <strong>562,500 VND</strong>
                                                            </span>
                                                            <br />
                                                        </td>
                                                        <td>THÀNH VIÊN</td>
                                                        <td></td>
                                                        <td />
                                                        <td>
                                                            <div
                                                                data-table="softcard_products"
                                                                data-id={47}
                                                                data-col="status"
                                                                className={
                                                                    status
                                                                        ? cx('switch', 'round', 'on')
                                                                        : cx('switch', 'round', 'off')
                                                                }
                                                                style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                                onClick={() => handleToggleStatus()}
                                                            >
                                                                <div className={cx('toggle')} />
                                                            </div>
                                                        </td>
                                                        <td>2022-08-13 14:39:57</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/users/427/edit" title="Sửa">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Nạp Game X5"
                                                                    link="/users/427"
                                                                    title="Xóa"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/userlogin/427/90429595b9a83cf3f791b295c3cc227b562ce0e2"
                                                                    title="Đăng nhập vào tài khoản thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaSignInAlt />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/wallets?type=user_id&keyword=427"
                                                                    title="Nạp rút tiền"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <FaDollarSign />
                                                                        <span>Nạp rút</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div
                                                className="dataTables_info"
                                                id="example2_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                                <div className="form-group row">
                                                    <div className="col-md-4">
                                                        <select name="action" className="form-control">
                                                            <option value="delete">Xóa đã chọn</option>
                                                            <option value="delete">Khóa tài khoản</option>
                                                            <option value="delete">Mở khóa tài khoản</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button
                                                            type="button"
                                                            id="action-btn"
                                                            className="btn btn-warning"
                                                        >
                                                            <FaCheckCircle />
                                                            <span>Thực hiện</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="float-right" id="dynamic-table_paginate">
                                                <ul className="pagination" role="navigation">
                                                    <li className="page-item disabled" aria-label="dafds">
                                                        <span className="page-link" aria-hidden="true">
                                                            ‹
                                                        </span>
                                                    </li>
                                                    <li className="page-item active" aria-current="page">
                                                        <span className="page-link">1</span>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=2">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=3">
                                                            3
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=4">
                                                            4
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=5">
                                                            5
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=6">
                                                            6
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=7">
                                                            7
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=8">
                                                            8
                                                        </Link>
                                                    </li>
                                                    <li className="page-item disabled">
                                                        <span className="page-link">...</span>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=16">
                                                            16
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/users?page=17">
                                                            17
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link
                                                            className="page-link"
                                                            to="/users?page=2"
                                                            rel="next"
                                                            aria-label="dasdsa"
                                                        >
                                                            ›
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Delete */}
            <div
                className="modal fade"
                id="deleteModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form id="deleteForm" action method="POST">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">
                                    Delete User
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : Ngô Văn Quý ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Đóng
                                </button>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                            <input type="hidden" name="_method" defaultValue="delete" />
                            <input
                                type="hidden"
                                name="_token"
                                defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
