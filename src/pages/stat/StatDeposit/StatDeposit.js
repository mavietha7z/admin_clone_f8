import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatDeposit() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thống kê nạp tiền" />
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
                                                <select name="paygate_code" className="form-control">
                                                    <option value selected="selected">
                                                        Cổng thanh toán
                                                    </option>
                                                    <option value="Wallet">Nạp tiền mặt</option>
                                                    <option value="Refund">Hoàn tiền</option>
                                                    <option value="Localbank_ACB">Localbank_ACB</option>
                                                    <option value="Localbank_AGRI">Localbank_AGRI</option>
                                                    <option value="Localbank_BIDV">Localbank_BIDV</option>
                                                    <option value="Localbank_EAB">Localbank_EAB</option>
                                                    <option value="Localbank_EXIMBANK">Localbank_EXIMBANK</option>
                                                    <option value="Localbank_HDBANK">Localbank_HDBANK</option>
                                                    <option value="Localbank_MB">Localbank_MB</option>
                                                    <option value="Localbank_MSB">Localbank_MSB</option>
                                                    <option value="Localbank_NAMABANK">Localbank_NAMABANK</option>
                                                    <option value="Localbank_OCB">Localbank_OCB</option>
                                                    <option value="Localbank_OJB">Localbank_OJB</option>
                                                    <option value="Localbank_SACOM">Localbank_SACOM</option>
                                                    <option value="Localbank_SCB">Localbank_SCB</option>
                                                    <option value="Localbank_SEABANK">Localbank_SEABANK</option>
                                                    <option value="Localbank_SHB">Localbank_SHB</option>
                                                    <option value="Localbank_SHINHANBANK">Localbank_SHINHANBANK</option>
                                                    <option value="Localbank_TCB">Localbank_TCB</option>
                                                    <option value="Localbank_TPB">Localbank_TPB</option>
                                                    <option value="Localbank_TSRR">Localbank_TSRR</option>
                                                    <option value="Localbank_VCB">Localbank_VCB</option>
                                                    <option value="Localbank_VIB">Localbank_VIB</option>
                                                    <option value="Localbank_VPB">Localbank_VPB</option>
                                                    <option value="Localbank_VTB">Localbank_VTB</option>
                                                    <option value="Localbank_VTPAY">Localbank_VTPAY</option>
                                                    <option value="Momo_TK1">Momo_TK1</option>
                                                    <option value="Momo_TK2">Momo_TK2</option>
                                                    <option value="Wallet_VND">Wallet_VND</option>
                                                </select>
                                                <select name="group_user" className="form-control">
                                                    <option value selected="selected">
                                                        Nhóm khách hàng
                                                    </option>
                                                    <option value={2}>THÀNH VIÊN</option>
                                                    <option value={4}>VIP/API</option>
                                                </select>
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
                                                        <th>Cổng thanh toán</th>
                                                        <th>Trạng thái</th>
                                                        <th>Mã khách hàng</th>
                                                        <th>Ngày tạo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>RF_W62DC288245C6E</td>
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
                                                        <td>50,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W62DC288245C6E</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>320</td>
                                                        <td>2022-07-25 04:39:36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W628F359954148</td>
                                                        <td>
                                                            ID:376 ---
                                                            <Link to="/users?type=id&keyword=376" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            HO VAN THUAN
                                                            <br />
                                                            Trandanhhung12378945@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>160,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W628F359954148</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>376</td>
                                                        <td>2022-05-26 15:20:26</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W627BDE5EEFF0B</td>
                                                        <td>
                                                            ID:375 ---
                                                            <Link to="/users?type=id&keyword=375" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            PhamHongSon
                                                            <br />
                                                            aechibuma@gmail.con
                                                            <br />
                                                        </td>
                                                        <td>160,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W627BDE5EEFF0B</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>375</td>
                                                        <td>2022-05-11 23:16:46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D625FE654AFBA6</td>
                                                        <td>
                                                            ID:93 ---
                                                            <Link to="/users?type=id&keyword=93" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Châu Minh Trí
                                                            <br />
                                                            Thanhchua987c@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>10,000 VND</td>
                                                        <td>
                                                            <strong> Momo_TK1 </strong>
                                                            <br />
                                                            <span className="text-success">Admin Deposit Funds</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>93</td>
                                                        <td>2022-04-20 19:35:36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D6257CAA8551D4</td>
                                                        <td>
                                                            ID:291 ---
                                                            <Link to="/users?type=id&keyword=291" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Hoàng Đức Long
                                                            <br />
                                                            <br />
                                                            0862312606
                                                        </td>
                                                        <td>33,800 VND</td>
                                                        <td>
                                                            <strong> Momo_TK1 </strong>
                                                            <br />
                                                            <span className="text-success">Admin Deposit Funds</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>291</td>
                                                        <td>2022-04-14 15:00:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D624EA31576E1D</td>
                                                        <td>
                                                            ID:93 ---
                                                            <Link to="/users?type=id&keyword=93" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Châu Minh Trí
                                                            <br />
                                                            Thanhchua987c@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>10,000 VND</td>
                                                        <td>
                                                            <strong> Momo_TK1 </strong>
                                                            <br />
                                                            <span className="text-success">Admin Deposit Funds</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>93</td>
                                                        <td>2022-04-07 15:43:11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W6235D46140F37</td>
                                                        <td>
                                                            ID:93 ---
                                                            <Link to="/users?type=id&keyword=93" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Châu Minh Trí
                                                            <br />
                                                            Thanhchua987c@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>55,850 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W6235D46140F37</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>93</td>
                                                        <td>2022-03-19 20:05:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W62349E406A66C</td>
                                                        <td>
                                                            ID:283 ---
                                                            <Link to="/users?type=id&keyword=283" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Yan
                                                            <br />
                                                            Ant64773@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>96,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W62349E406A66C</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>283</td>
                                                        <td>2022-03-18 22:01:25</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W62348AC7207C5</td>
                                                        <td>
                                                            ID:283 ---
                                                            <Link to="/users?type=id&keyword=283" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Yan
                                                            <br />
                                                            Ant64773@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>96,300 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W62348AC7207C5</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>283</td>
                                                        <td>2022-03-18 21:12:27</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D-622F82122AF43</td>
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
                                                        <td>50,000 VND</td>
                                                        <td>
                                                            <strong> Admin nạp tiền </strong>
                                                            <br />
                                                            <span className="text-success">
                                                                Admin deposit/withdraw fund
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-03-15 00:57:38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W622EFF23CB4F7</td>
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
                                                        <td>70,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W622EFF23CB4F7</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-03-14 18:19:06</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W6229CB6B477C4</td>
                                                        <td>
                                                            ID:190 ---
                                                            <Link to="/users?type=id&keyword=190" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Nguyễn Việt Đức
                                                            <br />
                                                            <br />
                                                            0362920760
                                                        </td>
                                                        <td>60,300 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W6229CB6B477C4</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>190</td>
                                                        <td>2022-03-10 18:22:53</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W6228B7B2C0C06</td>
                                                        <td>
                                                            ID:283 ---
                                                            <Link to="/users?type=id&keyword=283" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Yan
                                                            <br />
                                                            Ant64773@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>65,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W6228B7B2C0C06</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>283</td>
                                                        <td>2022-03-09 21:48:33</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W6228BA147AC50</td>
                                                        <td>
                                                            ID:283 ---
                                                            <Link to="/users?type=id&keyword=283" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Yan
                                                            <br />
                                                            Ant64773@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>115,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W6228BA147AC50</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>283</td>
                                                        <td>2022-03-09 21:39:50</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D-622840C7EB4C8</td>
                                                        <td>
                                                            ID:208 ---
                                                            <Link to="/users?type=id&keyword=208" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Phạm Thanh Huy
                                                            <br />
                                                            <br />
                                                            0942564139
                                                        </td>
                                                        <td>138,000 VND</td>
                                                        <td>
                                                            <strong> Admin nạp tiền </strong>
                                                            <br />
                                                            <span className="text-success">
                                                                Admin deposit/withdraw fund
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>208</td>
                                                        <td>2022-03-09 12:53:11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W6224D93D28392</td>
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
                                                        <td>395,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W6224D93D28392</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-03-06 23:02:16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W6224D8E9186DE</td>
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
                                                        <td>500,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W6224D8E9186DE</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-03-06 22:54:15</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D-6224D8D09933B</td>
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
                                                        <td>456,400 VND</td>
                                                        <td>
                                                            <strong> Admin nạp tiền </strong>
                                                            <br />
                                                            <span className="text-success">
                                                                Admin deposit/withdraw fund
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-03-06 22:52:48</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W62242662D232E</td>
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
                                                        <td>212,600 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W62242662D232E</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>178</td>
                                                        <td>2022-03-06 12:05:47</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D-62222531C75D5</td>
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
                                                            <strong> Admin nạp tiền </strong>
                                                            <br />
                                                            <span className="text-success">
                                                                Admin deposit/withdraw fund
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-03-04 21:41:53</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D621F72624C979</td>
                                                        <td>
                                                            ID:233 ---
                                                            <Link to="/users?type=id&keyword=233" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Đỗ Đức An
                                                            <br />
                                                            doducan2706@gmail.com
                                                            <br />
                                                            0987553408
                                                        </td>
                                                        <td>16,000 VND</td>
                                                        <td>
                                                            <strong> Momo_TK1 </strong>
                                                            <br />
                                                            <span className="text-success">Admin Deposit Funds</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>233</td>
                                                        <td>2022-03-02 20:43:11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RF_W621F55EC4FA24</td>
                                                        <td>
                                                            ID:226 ---
                                                            <Link to="/users?type=id&keyword=226" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Pé chii
                                                            <br />
                                                            nguyenthihoa27195@gmail.com
                                                            <br />
                                                            0375733455
                                                        </td>
                                                        <td>224,000 VND</td>
                                                        <td>
                                                            <strong> Hoàn tiền </strong>
                                                            <br />
                                                            <span className="text-success">Refund:W621F55EC4FA24</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>226</td>
                                                        <td>2022-03-02 20:19:24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D-621F3817D8EF7</td>
                                                        <td>
                                                            ID:262 ---
                                                            <Link to="/users?type=id&keyword=262" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Nguyễn huy thắng
                                                            <br />
                                                            Chiul8401@gmail.com
                                                            <br />
                                                        </td>
                                                        <td>191,000 VND</td>
                                                        <td>
                                                            <strong> Admin nạp tiền </strong>
                                                            <br />
                                                            <span className="text-success">
                                                                Admin deposit/withdraw fund
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>262</td>
                                                        <td>2022-03-02 16:25:43</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D-621F19688C228</td>
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
                                                        <td>130,000 VND</td>
                                                        <td>
                                                            <strong> Admin nạp tiền </strong>
                                                            <br />
                                                            <span className="text-success">
                                                                Admin deposit/withdraw fund
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>50</td>
                                                        <td>2022-03-02 14:14:48</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D621F105B2013B</td>
                                                        <td>
                                                            ID:278 ---
                                                            <Link to="/users?type=id&keyword=278" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Đỗ Thị Duyên
                                                            <br />
                                                            <br />
                                                            0332164427
                                                        </td>
                                                        <td>50,000 VND</td>
                                                        <td>
                                                            <strong> Momo_TK1 </strong>
                                                            <br />
                                                            <span className="text-success">Deposit Funds</span>
                                                        </td>
                                                        <td>
                                                            <label className="badge badge-success">HOÀN THÀNH</label>
                                                        </td>
                                                        <td>278</td>
                                                        <td>2022-03-02 13:40:02</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colSpan={2} className="text-right">
                                                            Tổng số:
                                                        </th>
                                                        <th>3,445,250</th>
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
                                                    <Link className="page-link" to="/statistic/deposit?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/statistic/deposit?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="/statistic/deposit?page=2"
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
                            {/* Delete form */}
                            {/* End Delete form*/}
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/* /.col */}
                </div>
            </div>
        </div>
    );
}

export default StatDeposit;
