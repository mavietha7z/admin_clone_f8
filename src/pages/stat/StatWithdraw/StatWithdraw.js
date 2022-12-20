import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatWithdraw() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thống kê rút tiền" />
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
                                    <div className="input-group input-group-sm dataTables_filter" style={{}}>
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="status" className="form-control" style={{}}>
                                                    <option value selected="selected">
                                                        Trạng thái
                                                    </option>
                                                    <option value="completed">Thành công</option>
                                                    <option value="pending">Chờ xử lý</option>
                                                    <option value="canceled">Hủy bỏ</option>
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
                                                    <button type="submit" className="btn btn-warning">
                                                        {/* <FaSearch /> */}
                                                        <span>Lọc</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row p-0">
                                    <div className="col-sm-12">
                                        <div className="table-responsive">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Mã đơn</th>
                                                        <th>Khách hàng</th>
                                                        <th>Số tiền</th>
                                                        <th>Ngân hàng</th>
                                                        <th>Trạng thái</th>
                                                        <th>Mã khách hàng</th>
                                                        <th>Ngày tạo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>W637E6749A54C5</td>
                                                        <td>
                                                            ID:50 ---
                                                            <Link to="/users?type=id&keyword=50" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Mã Việt Hà
                                                            <br />
                                                            Mavietha.info@gmail.com
                                                            <br />
                                                            0706661234
                                                        </td>
                                                        <td>100,000 VND</td>
                                                        <td>
                                                            MA VIET HA <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-warning">CHỜ XỬ LÝ</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-11-24 01:32:41</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W631976C1D3E3D</td>
                                                        <td>
                                                            ID:438 ---
                                                            <Link to="/users?type=id&keyword=438" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Mai Trung Dũng
                                                            <br />
                                                            mdung104@gmail.com
                                                            <br />
                                                            0848161104
                                                        </td>
                                                        <td>105,000 VND</td>
                                                        <td>
                                                            Mai Trung Dũng <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>438</td>
                                                        <td>2022-09-08 11:59:45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W6302321A10A2D</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>450,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-21 20:24:42</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W63022F4AAED65</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>450,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-21 20:12:42</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W63022E7C90409</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>450,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-21 20:09:16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62F0EA5267E88</td>
                                                        <td>
                                                            ID:424 ---
                                                            <Link to="/users?type=id&keyword=424" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Be duc thuat
                                                            <br />
                                                            topmegakill@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>75,000 VND</td>
                                                        <td>
                                                            be duc thuat <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>424</td>
                                                        <td>2022-08-08 17:49:54</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62F0E60703C97</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>450,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-08 17:31:35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62F0DBBA1D7D7</td>
                                                        <td>
                                                            ID:424 ---
                                                            <Link to="/users?type=id&keyword=424" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Be duc thuat
                                                            <br />
                                                            topmegakill@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>110,000 VND</td>
                                                        <td>
                                                            be duc thuat <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>424</td>
                                                        <td>2022-08-08 16:47:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62F0C4F431D1E</td>
                                                        <td>
                                                            ID:424 ---
                                                            <Link to="/users?type=id&keyword=424" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Be duc thuat
                                                            <br />
                                                            topmegakill@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>550,000 VND</td>
                                                        <td>
                                                            be duc thuat <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>424</td>
                                                        <td>2022-08-08 15:10:28</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62EFDDA69F8EB</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,130,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-07 22:43:34</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62EFDD80C55B5</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,138,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-07 22:42:56</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62EFD3EB2DFB8</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,138,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-07 22:02:03</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62EFCF6E4ED0D</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,120,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-07 21:42:54</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62EFC7224071A</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,033,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-07 21:07:30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E7D46B563B3</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,115,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-01 20:26:03</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E7D2A89A77E</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,120,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-01 20:18:32</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E797A605890</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,120,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-08-01 16:06:46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E638A018EDB</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,610,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-07-31 15:09:04</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E636F08FC13</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,613,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-07-31 15:01:52</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E635232F02E</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>1,598,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-07-31 14:54:11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E4724F98D00</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>137,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-07-30 06:50:39</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E46F9CAAFAC</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>137,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-07-30 06:39:08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E3E9149910C</td>
                                                        <td>
                                                            ID:178 ---
                                                            <Link to="/users?type=id&keyword=178" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            thehau1vip
                                                            <br />
                                                            thehau1vip@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>260,000 VND</td>
                                                        <td>
                                                            BE VAN TRUNG <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-07-29 21:05:08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62E0D2E26517A</td>
                                                        <td>
                                                            ID:421 ---
                                                            <Link to="/users?type=id&keyword=421" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            trần kiều oanh
                                                            <br />
                                                            trankieuoanh27012008@gmail.com
                                                            <br />
                                                            0353317353
                                                        </td>
                                                        <td>375,000 VND</td>
                                                        <td>
                                                            PHAM THI HUE <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>421</td>
                                                        <td>2022-07-27 12:53:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>W62DE026739968</td>
                                                        <td>
                                                            ID:320 ---
                                                            <Link to="/users?type=id&keyword=320" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            nguyentuananh2019
                                                            <br />
                                                            <br />
                                                            0327480633
                                                        </td>
                                                        <td>80,000 VND</td>
                                                        <td>
                                                            Nguyễn Thị Quỳnh Lan <br />
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>320</td>
                                                        <td>2022-07-25 09:39:35</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colSpan={2} className="text-right">
                                                            Tổng số:
                                                        </th>
                                                        <th>154,946,600</th>
                                                        <th colSpan={4} />
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
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
                                                    <Link className="page-link" to="/statistic/withdraw?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=4">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=5">
                                                        5
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=6">
                                                        6
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=7">
                                                        7
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=8">
                                                        8
                                                    </Link>
                                                </li>
                                                <li className="page-item disabled">
                                                    <span className="page-link">...</span>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=16">
                                                        16
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/withdraw?page=17">
                                                        17
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="/statistic/withdraw?page=2"
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

export default StatWithdraw;
