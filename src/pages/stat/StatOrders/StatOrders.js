import className from 'classnames/bind';
import Title from '~/components/Title';

import styles from '~/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function StatOrders() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thống kê bán thẻ cào" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card table-responsive">
                            <div className="card-header bg-white" style={{ borderBottom: 0 }}>
                                <div
                                    className="card-tools "
                                    style={{ float: 'left', position: 'relative', right: 0, left: 0 }}
                                >
                                    <div className="input-group input-group-sm dataTables_filter">
                                        <form name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="service_code" className="form-control">
                                                    <option value>Loại thẻ</option>
                                                    <option value="Viettel">Viettel</option>
                                                    <option value="Vina">Vina</option>
                                                    <option value="Mobi">Mobi</option>
                                                </select>
                                                <select name="value" className="form-control">
                                                    <option value>Mệnh giá</option>
                                                    <option value={10000}>10.000đ</option>
                                                    <option value={20000}>20.000đ</option>
                                                    <option value={30000}>30.000đ</option>
                                                </select>
                                                <select name="status" className="form-control">
                                                    <option value>Trạng thái</option>
                                                    <option value="completed">Thành công</option>
                                                    <option value="pending">Chờ xử lý</option>
                                                    <option value="canceled">Hủy bỏ</option>
                                                    <option value="none">Nháp</option>
                                                </select>
                                                <select name="provider" className="form-control">
                                                    <option value>Nhà cung cấp</option>
                                                    <option value="Netpay">Netpay</option>
                                                    <option value="Stock">Stock</option>
                                                </select>
                                                <input
                                                    className="form-control hasDatepicker"
                                                    defaultValue="26-11-2022"
                                                    name="fromdate"
                                                    id="datepicker"
                                                />
                                                <input
                                                    className="form-control hasDatepicker"
                                                    defaultValue="26-11-2022"
                                                    name="todate"
                                                    id="datepicker2"
                                                />
                                                <input
                                                    className="form-control"
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
                                                        <th>Sản phẩm</th>
                                                        <th>Mã dịch vụ</th>
                                                        <th>NCC</th>
                                                        <th>Mệnh giá</th>
                                                        <th>Số lượng</th>
                                                        <th>Số tiền</th>
                                                        <th>Trạng thái</th>
                                                        <th>Ngày tạo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>S6241428C49452</td>
                                                        <td>
                                                            <span>
                                                                <span>ID:320 ---</span>
                                                            </span>
                                                            <Link to="/users?type=id&keyword=320" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>nguyentuananh2019</span>
                                                            <br />
                                                            <br />
                                                            <span>0327480633</span>
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>3</td>
                                                        <td>57,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-28 12:07:25</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S624133A9B2C82</td>
                                                        <td>
                                                            <span>ID:320 ---</span>
                                                            <Link to="/users?type=id&keyword=320" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>nguyentuananh2019</span>
                                                            <br />
                                                            <br />
                                                            <span>0327480633</span>
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>3</td>
                                                        <td>57,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-28 11:03:54</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623F27411AA95</td>
                                                        <td>
                                                            <span>ID:124 ---</span>
                                                            <Link to="/users?type=id&keyword=124" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>anhduongdangius1</span>
                                                            <br />
                                                            <br />
                                                            <span>0379134446</span>
                                                        </td>
                                                        <td>Viettel 50.000đ</td>
                                                        <td>Viettel</td>
                                                        <td>Netpay</td>
                                                        <td>50,000</td>
                                                        <td>1</td>
                                                        <td>48,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-26 21:46:26</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623DBF4D07539</td>
                                                        <td>
                                                            <span>ID:124 ---</span>
                                                            <Link to="/users?type=id&keyword=124" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>anhduongdangius1</span>
                                                            <br />
                                                            <br />
                                                            <span>0379134446</span>
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>1</td>
                                                        <td>19,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-25 20:10:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623D64EADA320</td>
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
                                                        <td>Viettel 20.000đ</td>
                                                        <td>Viettel</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>1</td>
                                                        <td>19,500 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-25 13:45:00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623D2BBCF31FA</td>
                                                        <td>
                                                            <span>ID:335 ---</span>
                                                            <Link to="/users?type=id&keyword=335" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Hoàng Minh Quân</span>
                                                            <br />
                                                            <span>quannaruto15@gmail.com</span>
                                                            <br />
                                                        </td>
                                                        <td>Garena 50.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>50,000</td>
                                                        <td>1</td>
                                                        <td>47,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-25 09:41:02</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623D17ADEB8DE</td>
                                                        <td>
                                                            ID:336 ---
                                                            <Link to="/users?type=id&keyword=336" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Thẩm Văn Đức</span>
                                                            <br />
                                                            <br />
                                                            <span>0961441650</span>
                                                        </td>
                                                        <td>Garena 100.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>100,000</td>
                                                        <td>1</td>
                                                        <td>95,500 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-25 08:15:26</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623D1792503A2</td>
                                                        <td>
                                                            ID:336 ---
                                                            <Link to="/users?type=id&keyword=336" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Thẩm Văn Đức</span>
                                                            <br />
                                                            <br />
                                                            <span>0961441650</span>
                                                        </td>
                                                        <td>Viettel 500.000đ</td>
                                                        <td>Viettel</td>
                                                        <td>Netpay</td>
                                                        <td>500,000</td>
                                                        <td>1</td>
                                                        <td>485,400 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-25 08:15:00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623D1442BEEC7</td>
                                                        <td>
                                                            <span>ID:336 ---</span>
                                                            <Link to="/users?type=id&keyword=336" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Thẩm Văn Đức</span>
                                                            <br />
                                                            <br />
                                                            <span>0961441650</span>
                                                        </td>
                                                        <td>Garena 500.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>500,000</td>
                                                        <td>1</td>
                                                        <td>475,000 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-25 08:00:51</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623C8AC20C20B</td>
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
                                                        <td>Viettel 100.000đ</td>
                                                        <td>Viettel</td>
                                                        <td>Netpay</td>
                                                        <td>100,000</td>
                                                        <td>1</td>
                                                        <td>97,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-24 22:14:11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623C779B90085</td>
                                                        <td>
                                                            <span>ID:283 ---</span>
                                                            <Link to="/users?type=id&keyword=283" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Yan</span>
                                                            <br />
                                                            <span>Ant64773@gmail.com</span>
                                                            <br />
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>1</td>
                                                        <td>19,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-24 20:52:29</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623C078779B50</td>
                                                        <td>
                                                            <span>ID:124 ---</span>
                                                            <Link to="/users?type=id&keyword=124" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>anhduongdangius1</span>
                                                            <br />
                                                            <br />
                                                        </td>
                                                        <td>Viettel 10.000đ</td>
                                                        <td>Viettel</td>
                                                        <td>Netpay</td>
                                                        <td>10,000</td>
                                                        <td>1</td>
                                                        <td>9,800 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-24 12:54:16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623C04DCD953C</td>
                                                        <td>
                                                            <span>ID:320 ---</span>
                                                            <Link to="/users?type=id&keyword=320" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>nguyentuananh2019</span>
                                                            <br />
                                                            <br />
                                                            <span>0327480633</span>
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>1</td>
                                                        <td>19,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-24 12:42:54</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623BF869D79E0</td>
                                                        <td>
                                                            <span>ID:331 ---</span>
                                                            <Link to="/users?type=id&keyword=331" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Daothanhtu09
                                                            <br />
                                                            tu522428@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>Vinaphone 10.000đ</td>
                                                        <td>Vina</td>
                                                        <td>Netpay</td>
                                                        <td>10,000</td>
                                                        <td>1</td>
                                                        <td>9,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-24 11:49:46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623BF84407AB8</td>
                                                        <td>
                                                            <span>ID:331 ---</span>
                                                            <Link to="/users?type=id&keyword=331" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Daothanhtu09
                                                            <br />
                                                            tu522428@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>Vinaphone 10.000đ</td>
                                                        <td>Vina</td>
                                                        <td>Netpay</td>
                                                        <td>10,000</td>
                                                        <td>1</td>
                                                        <td>9,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-24 11:49:09</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623AF86B4F2A0</td>
                                                        <td>
                                                            <span>ID:331 ---</span>
                                                            <Link to="/users?type=id&keyword=331" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Daothanhtu09
                                                            <br />
                                                            tu522428@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>1</td>
                                                        <td>19,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-23 17:37:32</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623AF3748789A</td>
                                                        <td>
                                                            <span>ID:331 ---</span>
                                                            <Link to="/users?type=id&keyword=331" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Daothanhtu09
                                                            <br />
                                                            tu522428@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>Garena 50.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>50,000</td>
                                                        <td>1</td>
                                                        <td>47,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-23 17:16:21</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623AF34735441</td>
                                                        <td>
                                                            <span>ID:331 ---</span>
                                                            <Link to="/users?type=id&keyword=331" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Daothanhtu09
                                                            <br />
                                                            tu522428@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>Garena 100.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>100,000</td>
                                                        <td>1</td>
                                                        <td>95,500 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-23 17:15:36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623AECCC20CBD</td>
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
                                                        <td>Mobifone 30.000đ</td>
                                                        <td>Mobi</td>
                                                        <td>Netpay</td>
                                                        <td>30,000</td>
                                                        <td>1</td>
                                                        <td>29,000 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-23 16:47:57</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623AD95AEF7FB</td>
                                                        <td>
                                                            ID:330 ---
                                                            <Link to="/users?type=id&keyword=330" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Võ Tuấn Duy
                                                            <br />
                                                            <br />
                                                            0377847265
                                                        </td>
                                                        <td>Garena 200.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>200,000</td>
                                                        <td>1</td>
                                                        <td>191,000 VND</td>
                                                        <td>
                                                            <label className="badge badge-secondary">NHÁP</label>
                                                        </td>
                                                        <td>2022-03-23 15:25:00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S6239D3F1405D5</td>
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
                                                        <td>Vietnamobile 10.000đ</td>
                                                        <td>Vnmobile</td>
                                                        <td>Netpay</td>
                                                        <td>10,000</td>
                                                        <td>1</td>
                                                        <td>9,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-22 20:49:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S62394E7F9C13C</td>
                                                        <td>
                                                            <span>ID:320 ---</span>
                                                            <Link to="/users?type=id&keyword=320" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>nguyentuananh2019</span>
                                                            <br />
                                                            <br />
                                                            <span>0327480633</span>
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>3</td>
                                                        <td>57,600 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-22 11:20:16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S62387D3359F60</td>
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
                                                        <td>Mobifone 100.000đ</td>
                                                        <td>Mobi</td>
                                                        <td>Netpay</td>
                                                        <td>100,000</td>
                                                        <td>1</td>
                                                        <td>96,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-21 20:27:16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S62382FCA03A00</td>
                                                        <td>
                                                            <span>ID:180 ---</span>
                                                            <Link to="/users?type=id&keyword=180" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Pham Quang Duy</span>
                                                            <br />
                                                            <br />
                                                            <span>0828177433</span>
                                                        </td>
                                                        <td>Viettel 10.000đ</td>
                                                        <td>Viettel</td>
                                                        <td>Netpay</td>
                                                        <td>10,000</td>
                                                        <td>1</td>
                                                        <td>9,800 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-21 14:56:59</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S623531DBDD915</td>
                                                        <td>
                                                            <span>ID:322 ---</span>
                                                            <Link to="/users?type=id&keyword=322" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Chu Minh Dat</span>
                                                            <br />
                                                            <div>chuminhdat2008@gmail.com</div>
                                                            <br />
                                                        </td>
                                                        <td>Garena 20.000đ</td>
                                                        <td>Garena</td>
                                                        <td>Netpay</td>
                                                        <td>20,000</td>
                                                        <td>1</td>
                                                        <td>19,200 VND</td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>2022-03-19 08:29:00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colSpan={5} className="text-right">
                                                            Tổng số:
                                                        </th>
                                                        <th>10,720,000</th>
                                                        <th>157 thẻ</th>
                                                        <th>10,303,700 </th>
                                                        <th colSpan={2} />
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
                                                    <Link className="page-link" to="/statistic/softcard?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/softcard?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/softcard?page=4">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/softcard?page=5">
                                                        5
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/softcard?page=6">
                                                        6
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="/statistic/softcard?page=2"
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

export default StatOrders;
