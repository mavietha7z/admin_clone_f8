import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý menu" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách menu</h2>
                                <div className="float-right" style={{ marginRight: 350 }}>
                                    <Link to="/menu/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Thêm mới</span>
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="card-tools d-flex"
                                    style={{ position: 'absolute', right: '1rem', top: '1rem' }}
                                >
                                    <div
                                        className="input-group input-group-sm dataTables_filter"
                                        style={{ width: 350 }}
                                    >
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="language" className="form-control" style={{}}>
                                                    <option value>-- Ngôn ngữ --</option>
                                                    <option value="vi">Tiếng Việt</option>
                                                    <option value="us">English</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    name="keyword"
                                                    className="form-control"
                                                    placeholder="Search"
                                                    defaultValue=""
                                                />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        {/* <FaSearch /> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <form action="/menu" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingTop: 0 }}>
                                    <div className="row p-0">
                                        <div className="col-sm-12">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
                                                            <label className="pos-rel">
                                                                <input type="checkbox" className="ace" id="checkall" />
                                                                <span className="lbl" />
                                                            </label>
                                                        </th>
                                                        <th>ID</th>
                                                        <th>Tên</th>
                                                        <th>Url</th>
                                                        <th>Loại</th>
                                                        <th>Ngôn ngữ</th>
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
                                                                    defaultValue={60}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>60</td>
                                                        <td>Mua Mã Thẻ</td>
                                                        <td>/mua-the</td>
                                                        <td>header</td>
                                                        <td>vi</td>
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
                                                        <td>2018-08-05 12:16:17</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/60/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Mua Mã Thẻ"
                                                                    link="/menu/60"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={61}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>61</td>
                                                        <td>Đổi Thẻ Cào</td>
                                                        <td>/doithecao</td>
                                                        <td>header</td>
                                                        <td>vi</td>
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
                                                        <td>2018-08-05 12:16:37</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/61/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Đổi Thẻ Cào"
                                                                    link="/menu/61"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={87}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>87</td>
                                                        <td>Nạp Điện Thoại</td>
                                                        <td>/topup</td>
                                                        <td>header</td>
                                                        <td>vi</td>
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
                                                        <td>2019-01-10 03:48:45</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/87/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Nạp Điện Thoại"
                                                                    link="/menu/87"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={100}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>100</td>
                                                        <td>Chuyển Tiền</td>
                                                        <td>/wallet/transfer</td>
                                                        <td>header</td>
                                                        <td>vi</td>
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
                                                        <td>2022-02-12 15:49:14</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/100/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Chuyển Tiền"
                                                                    link="/menu/100"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={103}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>103</td>
                                                        <td>Lịch Sử</td>
                                                        <td>https://thenhanh.vn/wallet/history/vnd</td>
                                                        <td>header</td>
                                                        <td>vi</td>
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
                                                        <td>2022-02-13 17:57:52</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/103/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Lịch Sử"
                                                                    link="/menu/103"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={101}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>101</td>
                                                        <td>Rút Tiền</td>
                                                        <td>/wallet/withdraw/vnd</td>
                                                        <td>header</td>
                                                        <td>vi</td>
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
                                                        <td>2022-02-12 15:51:33</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/101/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Rút Tiền"
                                                                    link="/menu/101"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={73}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>73</td>
                                                        <td>Thông Tin</td>
                                                        <td>#</td>
                                                        <td>footer</td>
                                                        <td>vi</td>
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
                                                        <td>2018-08-16 23:11:21</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/73/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Thông Tin"
                                                                    link="/menu/73"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={74}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>74</td>
                                                        <td>ĐỐI TÁC</td>
                                                        <td>#</td>
                                                        <td>footer</td>
                                                        <td>vi</td>
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
                                                        <td>2018-08-16 23:11:35</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/74/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="ĐỐI TÁC"
                                                                    link="/menu/74"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={79}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>79</td>
                                                        <td>Làm việc : 08:00 - 20:00</td>
                                                        <td>https://www.facebook.com/TheNhanh.vn</td>
                                                        <td />
                                                        <td>vi</td>
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
                                                        <td>2018-08-16 23:12:08</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/79/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Làm việc : 08:00 - 20:00"
                                                                    link="/menu/79"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={92}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>92</td>
                                                        <td>Hỗ trợ khách hàng</td>
                                                        <td>https://www.facebook.com/Thenhanh.vn</td>
                                                        <td />
                                                        <td>vi</td>
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
                                                        <td>2022-02-12 15:28:35</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/92/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Hỗ trợ khách hàng"
                                                                    link="/menu/92"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={95}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>95</td>
                                                        <td>SHOP ACC GAME</td>
                                                        <td>#</td>
                                                        <td />
                                                        <td>vi</td>
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
                                                        <td>2022-02-12 15:33:51</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/95/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="SHOP ACC GAME"
                                                                    link="/menu/95"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                                    defaultValue={96}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>96</td>
                                                        <td>MUA THẺ CÀO</td>
                                                        <td>#</td>
                                                        <td />
                                                        <td>vi</td>
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
                                                        <td>2022-02-12 15:34:43</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/menu/96/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="MUA THẺ CÀO"
                                                                    link="/menu/96"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn btn-warning">
                                                            {/* <FaCheckCircle /> */}
                                                            <span>Thực hiện</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="float-right" id="dynamic-table_paginate"></div>
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
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Delete News
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : Mua Mã Thẻ ?
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

export default Menu;
