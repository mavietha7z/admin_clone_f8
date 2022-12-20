import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatMtopup() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thống kê nạp cước" />
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
                                                <select name="service_code" className="form-control">
                                                    <option value selected="selected">
                                                        Loại thẻ
                                                    </option>
                                                    <option value="MOBI_TKC">MOBI_TKC</option>
                                                    <option value="MOBI_TS">MOBI_TS</option>
                                                    <option value="MOBI_TT">MOBI_TT</option>
                                                    <option value="VIETTEL_TKC">VIETTEL_TKC</option>
                                                    <option value="VIETTEL_TS">VIETTEL_TS</option>
                                                    <option value="VIETTEL_TT">VIETTEL_TT</option>
                                                    <option value="VINA_TKC">VINA_TKC</option>
                                                    <option value="VINA_TS">VINA_TS</option>
                                                    <option value="VINA_TT">VINA_TT</option>
                                                </select>
                                                <select name="status" className="form-control">
                                                    <option value selected="selected">
                                                        Trạng thái
                                                    </option>
                                                    <option value="completed">Thành công</option>
                                                    <option value="pending">Chờ xử lý</option>
                                                    <option value="canceled">Hủy bỏ</option>
                                                </select>
                                                <select name="provider" className="form-control">
                                                    <option value selected="selected">
                                                        Nhà cung cấp
                                                    </option>
                                                    <option value="Me">Tự nạp thủ công</option>
                                                    <option value="Me">Me</option>
                                                </select>
                                                <input
                                                    className="form-control hasDatepicker"
                                                    defaultValue="28-11-2022"
                                                    name="fromdate"
                                                    id="datepicker"
                                                />
                                                <input
                                                    className="form-control hasDatepicker"
                                                    defaultValue="28-11-2022"
                                                    name="todate"
                                                    id="datepicker2"
                                                />
                                                <input
                                                    className="form-control"
                                                    defaultValue=""
                                                    name="user_id"
                                                    placeholder="Mã KH"
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
                                                        className="btn btn-success mr-0"
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
                            <div className="card-body pt-0">
                                <div className="row p-0">
                                    <div className="col-sm-12">
                                        <div className="table-responsive">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Khách hàng</th>
                                                        <th>Thuê bao</th>
                                                        <th>Mã dịch vụ</th>
                                                        <th>NNC</th>
                                                        <th>Cần nạp</th>
                                                        <th>Đã nạp</th>
                                                        <th>Thanh toán</th>
                                                        <th>Trạng thái</th>
                                                        <th>Mã KH</th>
                                                        <th>Ngày tạo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>M637F3904207D6</td>
                                                        <td>
                                                            <span>ID:50 ---</span>
                                                            <Link to="/users?type=id&keyword=50" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Mã Việt Hà</span>
                                                            <br />
                                                            <span>Mavietha.info@gmail.com</span>
                                                            <br />
                                                            <span>0706661234</span>
                                                        </td>
                                                        <td>0706661234</td>
                                                        <td>VINA_TS</td>
                                                        <td>Trumcuoc</td>
                                                        <td>50,000 </td>
                                                        <td>0 </td>
                                                        <td>42,500 </td>
                                                        <td>
                                                            <label className="badge badge-warning">CHỜ XỬ LÝ</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-11-24 16:27:32</td>
                                                    </tr>
                                                    <tr>
                                                        <td>M637F38D45237B</td>
                                                        <td>
                                                            <span>ID:50 ---</span>
                                                            <Link to="/users?type=id&keyword=50" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Mã Việt Hà</span>
                                                            <br />
                                                            <span>Mavietha.info@gmail.com</span>
                                                            <br />
                                                            <span>0706661234</span>
                                                        </td>
                                                        <td>0353386227</td>
                                                        <td>VIETTEL_TT</td>
                                                        <td>Trumcuoc</td>
                                                        <td>50,000 </td>
                                                        <td>0 </td>
                                                        <td>50,002 </td>
                                                        <td>
                                                            <label className="badge badge-warning">CHỜ XỬ LÝ</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-11-24 16:26:44</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colSpan={5} className="text-right">
                                                            Tổng số:
                                                        </th>
                                                        <th>100,000 </th>
                                                        <th>0 </th>
                                                        <th>92,502 </th>
                                                        <th colSpan={3} />
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="float-right" id="dynamic-table_paginate"></div>
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

export default StatMtopup;
