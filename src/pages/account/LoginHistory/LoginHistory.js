import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function LoginHistory() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Lịch sử đăng nhập" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <div className="float-right">
                                    <div
                                        className="card-tools "
                                        style={{ float: 'left', position: 'relative', right: 5 }}
                                    >
                                        <div className="input-group input-group-sm dataTables_filter">
                                            <form action name="formSearch" method="GET">
                                                <div className="input-group">
                                                    <select name="type" className="form-control">
                                                        <option value="user_id">ID khách hàng</option>
                                                        <option value="phone">Theo số điện thoại</option>
                                                        <option value="email">Theo email</option>
                                                        <option value="ip">Theo IP</option>
                                                    </select>
                                                    <input
                                                        type="text"
                                                        name="keyword"
                                                        className="form-control"
                                                        placeholder="Nhập vào đây"
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
                            {/* /.card-header */}
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="table-responsive">
                                            <table id="example1" className="table table-bordered table-striped ">
                                                <thead>
                                                    <tr>
                                                        <th>TT</th>
                                                        <th>Mã khách hàng</th>
                                                        <th>Thông tin khách</th>
                                                        <th>IP</th>
                                                        <th>OTP</th>
                                                        <th>User Agent</th>
                                                        <th>Ngày tạo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr data-id={1481}>
                                                        <td>1481</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.15.36</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-10 11:46:17</td>
                                                    </tr>
                                                    <tr data-id={1480}>
                                                        <td>1480</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.15.36</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-10 00:50:59</td>
                                                    </tr>
                                                    <tr data-id={1479}>
                                                        <td>1479</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.15.36</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-09 12:18:02</td>
                                                    </tr>
                                                    <tr data-id={1478}>
                                                        <td>1478</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.3</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-08 20:24:38</td>
                                                    </tr>
                                                    <tr data-id={1477}>
                                                        <td>1477</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.89</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-08 13:51:09</td>
                                                    </tr>
                                                    <tr data-id={1476}>
                                                        <td>1476</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.89</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-07 20:13:46</td>
                                                    </tr>
                                                    <tr data-id={1475}>
                                                        <td>1475</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.15.159</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-06 23:09:40</td>
                                                    </tr>
                                                    <tr data-id={1474}>
                                                        <td>1474</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.15.148</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-04 18:25:40</td>
                                                    </tr>
                                                    <tr data-id={1473}>
                                                        <td>1473</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.189</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-03 13:11:31</td>
                                                    </tr>
                                                    <tr data-id={1472}>
                                                        <td>1472</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.167</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-02 18:34:46</td>
                                                    </tr>
                                                    <tr data-id={1471}>
                                                        <td>1471</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.76</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-12-01 13:00:43</td>
                                                    </tr>
                                                    <tr data-id={1470}>
                                                        <td>1470</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.88</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-30 19:19:26</td>
                                                    </tr>
                                                    <tr data-id={1469}>
                                                        <td>1469</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.88</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-30 15:25:39</td>
                                                    </tr>
                                                    <tr data-id={1468}>
                                                        <td>1468</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.88</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-29 21:30:53</td>
                                                    </tr>
                                                    <tr data-id={1467}>
                                                        <td>1467</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.88</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-29 12:17:14</td>
                                                    </tr>
                                                    <tr data-id={1466}>
                                                        <td>1466</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.87</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-28 12:48:46</td>
                                                    </tr>
                                                    <tr data-id={1465}>
                                                        <td>1465</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.87</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-27 14:45:28</td>
                                                    </tr>
                                                    <tr data-id={1464}>
                                                        <td>1464</td>
                                                        <td>434</td>
                                                        <td>
                                                            {' '}
                                                            <br />
                                                            <br /> trietquangmang@gmail.com
                                                        </td>
                                                        <td>14.191.99.170</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Linux; Android 12; 2109119DG)
                                                            AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0
                                                            Mobile Safari/537.36
                                                        </td>
                                                        <td>2022-11-27 12:28:27</td>
                                                    </tr>
                                                    <tr data-id={1463}>
                                                        <td>1463</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.87</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-27 03:01:06</td>
                                                    </tr>
                                                    <tr data-id={1462}>
                                                        <td>1462</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.87</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-26 21:29:40</td>
                                                    </tr>
                                                    <tr data-id={1461}>
                                                        <td>1461</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.87</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-26 12:44:31</td>
                                                    </tr>
                                                    <tr data-id={1460}>
                                                        <td>1460</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-26 00:14:16</td>
                                                    </tr>
                                                    <tr data-id={1459}>
                                                        <td>1459</td>
                                                        <td>50</td>
                                                        <td>
                                                            0706661234 <br />
                                                            <br /> Mavietha.info@gmail.com
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-25 19:43:11</td>
                                                    </tr>
                                                    <tr data-id={1458}>
                                                        <td>1458</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-25 17:10:41</td>
                                                    </tr>
                                                    <tr data-id={1457}>
                                                        <td>1457</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-25 15:56:29</td>
                                                    </tr>
                                                    <tr data-id={1456}>
                                                        <td>1456</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-24 21:24:20</td>
                                                    </tr>
                                                    <tr data-id={1455}>
                                                        <td>1455</td>
                                                        <td>50</td>
                                                        <td>
                                                            0706661234 <br />
                                                            <br /> Mavietha.info@gmail.com
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-24 16:26:34</td>
                                                    </tr>
                                                    <tr data-id={1454}>
                                                        <td>1454</td>
                                                        <td>50</td>
                                                        <td>
                                                            0706661234 <br />
                                                            <br /> Mavietha.info@gmail.com
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-24 15:44:29</td>
                                                    </tr>
                                                    <tr data-id={1453}>
                                                        <td>1453</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-24 14:50:11</td>
                                                    </tr>
                                                    <tr data-id={1452}>
                                                        <td>1452</td>
                                                        <td>50</td>
                                                        <td>
                                                            0706661234 <br />
                                                            <br /> Mavietha.info@gmail.com
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-24 01:32:32</td>
                                                    </tr>
                                                    <tr data-id={1451}>
                                                        <td>1451</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-23 14:48:23</td>
                                                    </tr>
                                                    <tr data-id={1450}>
                                                        <td>1450</td>
                                                        <td>297</td>
                                                        <td>
                                                            0921042902 <br />
                                                            <br />{' '}
                                                        </td>
                                                        <td>58.187.66.232</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-23 11:51:42</td>
                                                    </tr>
                                                    <tr data-id={1449}>
                                                        <td>1449</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-22 14:19:21</td>
                                                    </tr>
                                                    <tr data-id={1448}>
                                                        <td>1448</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-21 20:15:31</td>
                                                    </tr>
                                                    <tr data-id={1447}>
                                                        <td>1447</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.85</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-21 19:34:10</td>
                                                    </tr>
                                                    <tr data-id={1446}>
                                                        <td>1446</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.86</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-21 08:44:27</td>
                                                    </tr>
                                                    <tr data-id={1445}>
                                                        <td>1445</td>
                                                        <td>178</td>
                                                        <td>
                                                            {' '}
                                                            <br />
                                                            <br /> thehau1vip@gmail.com
                                                        </td>
                                                        <td>117.6.169.53</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-20 22:31:57</td>
                                                    </tr>
                                                    <tr data-id={1444}>
                                                        <td>1444</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.29</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-20 14:25:24</td>
                                                    </tr>
                                                    <tr data-id={1443}>
                                                        <td>1443</td>
                                                        <td>254</td>
                                                        <td>
                                                            0705490848 <br />
                                                            <br />{' '}
                                                        </td>
                                                        <td>27.3.232.173</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-20 04:41:26</td>
                                                    </tr>
                                                    <tr data-id={1442}>
                                                        <td>1442</td>
                                                        <td>1</td>
                                                        <td>
                                                            0999999999 <br />
                                                            <br /> support@thenhanh.vn
                                                        </td>
                                                        <td>171.234.14.29</td>
                                                        <td />
                                                        <td>
                                                            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                                            (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
                                                        </td>
                                                        <td>2022-11-20 00:35:37</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default LoginHistory;
