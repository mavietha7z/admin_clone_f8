import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatCharging() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thống kê đổi thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card table-responsive">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <div
                                    className="card-tools "
                                    style={{ float: 'left', position: 'relative', right: 0, left: 0 }}
                                >
                                    <div className="input-group input-group-sm dataTables_filter">
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="telco" className="form-control">
                                                    <option value="all">Loại thẻ</option>
                                                    <option value="GATE">GATE</option>
                                                    <option value="MOBIFONE">MOBIFONE</option>
                                                    <option value="VIETNAMOBILE">VIETNAMOBILE</option>
                                                    <option value="VIETTEL">VIETTEL</option>
                                                    <option value="VINAPHONE">VINAPHONE</option>
                                                    <option value="ZING">ZING</option>
                                                </select>
                                                <select name="value" className="form-control">
                                                    <option value selected="selected">
                                                        Mệnh giá
                                                    </option>
                                                    <option value={10000}>10.000đ</option>
                                                    <option value={20000}>20.000đ</option>
                                                    <option value={30000}>30.000đ</option>
                                                    <option value={50000}>50.000đ</option>
                                                    <option value={100000}>100.000đ</option>
                                                    <option value={200000}>200.000đ</option>
                                                    <option value={300000}>300.000đ</option>
                                                    <option value={500000}>500.000đ</option>
                                                    <option value={1000000}>1.000.000đ</option>
                                                    <option value={2000000}>2.000.000đ</option>
                                                    <option value={3000000}>3.000.000đ</option>
                                                    <option value={5000000}>5.000.000đ</option>
                                                </select>
                                                <select name="status" className="form-control">
                                                    <option value>Tất cả</option>
                                                    <option value={1}>Thẻ đúng</option>
                                                    <option value={2}>Sai mệnh giá</option>
                                                    <option value={3}>Thẻ lỗi</option>
                                                    <option value={99}>Thẻ chờ</option>
                                                    <option value={4}>Bảo trì</option>
                                                </select>
                                                <select name="provider" className="form-control">
                                                    <option value selected="selected">
                                                        Nhà cung cấp
                                                    </option>
                                                    <option value="Me">Tự xử lý</option>
                                                    <option value="Trumthe">Trumthe</option>
                                                    <option value="Doithe">Doithe</option>
                                                    <option value="Tsr">Tsr</option>
                                                </select>
                                                <input
                                                    className="form-control hasDatepicker"
                                                    defaultValue="10-12-2022"
                                                    name="fromdate"
                                                    id="datepicker"
                                                />
                                                <input
                                                    className="form-control hasDatepicker"
                                                    defaultValue="10-12-2022"
                                                    name="todate"
                                                    id="datepicker2"
                                                />
                                                <input
                                                    className="form-control"
                                                    defaultValue=""
                                                    name="user_id"
                                                    placeholder="Mã khách hàng"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        value="filter"
                                                        className="btn btn-warning mr-0"
                                                    >
                                                        {/* <FaSearch /> */}
                                                        <span>Lọc</span>
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        value="excel"
                                                        className="btn btn-success"
                                                    >
                                                        {/* <FaDownload /> */}
                                                        <span>Excel</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row table-responsive p-0">
                                    <div className="col-sm-12 pr-0">
                                        <table className="table table-bordered table-striped ">
                                            <thead>
                                                <tr>
                                                    <th>TT</th>
                                                    <th>Thông tin thẻ</th>
                                                    <th>Mạng</th>
                                                    <th>NCC</th>
                                                    <th>Khách hàng</th>
                                                    <th>Khai báo</th>
                                                    <th>Mệnh giá</th>
                                                    <th>Nhận</th>
                                                    <th>Gửi lúc</th>
                                                    <th>Duyệt lúc</th>
                                                    <th>Hình thức</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr data-id={15722}>
                                                    <td>
                                                        <label className="badge badge-success">Thành công</label>
                                                    </td>
                                                    <td>
                                                        <span>M:513124322385650</span>
                                                        <br />
                                                        S:10009712315562
                                                    </td>
                                                    <td>VIETTEL </td>
                                                    <td>Trumthe</td>
                                                    <td>
                                                        ID:428 ---
                                                        <Link to="/users?type=id&keyword=428" target="_blank">
                                                            Xem
                                                        </Link>
                                                        <br />
                                                        Chuyển Thẻ
                                                        <br />
                                                        chuyenthe@gmail.com
                                                        <br />
                                                    </td>
                                                    <td>50,000 </td>
                                                    <td>50,000 </td>
                                                    <td>37,500 </td>
                                                    <td>2022-12-08 20:07:01</td>
                                                    <td>
                                                        <strong>2022-12-08 20:07:14</strong>
                                                    </td>
                                                    <td>
                                                        API <br /> fwFzCVKdGk
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={5} className="text-right">
                                                        Tổng số:
                                                    </th>
                                                    <th>1,527,920,000 đ</th>
                                                    <th>642,760,000 đ</th>
                                                    <th>511,247,285 đ</th>
                                                    <th colSpan={3} />
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
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
                                                    <Link className="page-link" to="/statistic/charging?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=4">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=5">
                                                        5
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=6">
                                                        6
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=7">
                                                        7
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=8">
                                                        8
                                                    </Link>
                                                </li>
                                                <li className="page-item disabled">
                                                    <span className="page-link">...</span>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=628">
                                                        628
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/charging?page=629">
                                                        629
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="/statistic/charging?page=2"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatCharging;
