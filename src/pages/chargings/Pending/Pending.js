import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Pending() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Đổi thẻ cào" />
                    <NavMenu
                        nameHome="Trang chính"
                        pathHome="/chargings"
                        nameTime="Thẻ chờ"
                        pathTime="/chargings/pending"
                        namePlus="Loại thẻ"
                        pathPlus="/chargings/telcos"
                        nameCheck="NCC"
                        pathCheck="/chargings/provider"
                        nameSend="Test"
                        pathSend="/chargings/testcard"
                        nameSetting="Cấu hình"
                        pathSetting="/chargings/setting"
                        float="float-right pt-4"
                    />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="type" className="form-control">
                                                    <option value="code">Theo mã nạp</option>
                                                    <option value="serial">Theo số serial</option>
                                                    <option value="email">Theo email</option>
                                                    <option value="phone">Theo số điện thoại</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    name="keyword"
                                                    className="form-control"
                                                    placeholder="Nhập vào đây"
                                                    defaultValue=""
                                                />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-info">
                                                        <FaSearch />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-8">
                                        <form action name="formFilter" method="GET">
                                            <div
                                                className="dataTables_info"
                                                id="example2_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                                <div className="input-group ">
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
                                                    </select>
                                                    <select name="status" className="form-control">
                                                        <option value selected="selected">
                                                            Trạng thái
                                                        </option>
                                                        <option value="correct">Thành công</option>
                                                        <option value="invalid">Thẻ lỗi</option>
                                                        <option value="waiting">Thẻ chờ</option>
                                                    </select>
                                                    <select name="provider" className="form-control">
                                                        <option value selected="selected">
                                                            Nhà cung cấp
                                                        </option>
                                                        <option value="Me">Tự xử lý</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe">Doithe</option>
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
                                                    <div style={{ marginLeft: 10 }}>
                                                        <button type="submit" className="btn btn-warning mr-0">
                                                            <FaCheckCircle />
                                                            <span>Lọc dữ liệu</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body pt-0">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="table-responsive">
                                            <table id="example1" className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>TT</th>
                                                        <th>Khai</th>
                                                        <th>Xử lý</th>
                                                        <th>Mã nạp/Seri</th>
                                                        <th>Mạng</th>
                                                        <th>Khách</th>
                                                        <th>Thực</th>
                                                        <th>Phạt</th>
                                                        <th>Phí</th>
                                                        <th>Nhận</th>
                                                        <th>Gửi/Duyệt</th>
                                                        <th>Hình thức</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr data-id={15704}>
                                                        <td>
                                                            <label className="badge badge-warning">Chờ</label>
                                                        </td>
                                                        <td>
                                                            <span className="text-success">
                                                                <strong>50,000 </strong>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span
                                                                className=" btn btn-success btn-small mr-2"
                                                                data-id={15704}
                                                                style={{ padding: '6px 10px' }}
                                                                data-toggle="modal"
                                                                data-target="#ChargingModal"
                                                            >
                                                                <span>Chi tiết</span>
                                                            </span>
                                                            <span
                                                                className=" btn btn-light btn-small"
                                                                data-id={15704}
                                                                style={{ padding: '6px 10px' }}
                                                            >
                                                                <FaDownload className="d-inline-block mb-2 mr-1" />
                                                                <span>Doithe</span>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-light btn-sm" title="Copy">
                                                                <b>013357330518335</b>
                                                            </button>
                                                            <div style={{ marginTop: 10 }}>10009307106879</div>
                                                        </td>
                                                        <td>
                                                            <span>VIETTEL</span>
                                                            <br />
                                                            <span>(Trumthe)</span>
                                                            <br />
                                                            <span
                                                                className="btn btn-small btn-light"
                                                                style={{ padding: '4px 10px' }}
                                                                title="Gửi thẻ sang nhà cung cấp phụ"
                                                            >
                                                                <FaTelegramPlane style={{ fontSize: '1.6rem' }} />
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span>ID:428 ---</span>
                                                            <Link to="/users?type=id&keyword=428" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            <span>Chuyển Thẻ</span>
                                                            <br />
                                                            <span>chuyenthe@gmail.com</span>
                                                            <br />
                                                        </td>
                                                        <td>50,000 </td>
                                                        <td>0%</td>
                                                        <td>25 %</td>
                                                        <td>37,500 </td>
                                                        <td>
                                                            28-11-2022 12:12:12 <br />
                                                            <span className="text-success">28-11-2022 12:12:22</span>
                                                        </td>
                                                        <td>
                                                            <span>WEB</span>
                                                            <br />
                                                            <span>BDFrqIbXZy</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* tab page */}
                                {/* <div className="row">
                                    <div className="col-12">
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
                                                    <Link className="page-link" to="/chargings?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/chargings?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item disabled">
                                                    <span className="page-link">...</span>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/chargings?page=392">
                                                        392
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/chargings?page=393">
                                                        393
                                                    </Link>
                                                </li>
                                                <li className="page-item mr-2">
                                                    <Link
                                                        className="page-link"
                                                        to="/chargings?page=2"
                                                        rel="next"
                                                        aria-label="dasdsa"
                                                    >
                                                        ›
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="ChargingModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <form method="POST" action="/ajax/charging/15708" acceptCharset="UTF-8">
                            <input
                                name="_token"
                                type="hidden"
                                defaultValue="rEyieRloh9r5gx2zr3KykQB2dOqu2VXnjgbs13XF"
                            />
                            <div className="modal-header">
                                <h2 className="modal-title" id="CharginModalTitle">
                                    ID: 15708 , Request ID: 22036982 , Khách: Mã Việt Hà
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="modalContent" className="modal-body">
                                <ul className="nav nav-tabs" id="custom-content-below-tab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="custom-content-below-home-tab"
                                            data-toggle="pill"
                                            href="#custom-content-below-home"
                                            role="tab"
                                            aria-controls="custom-content-below-home"
                                            aria-selected="true"
                                        >
                                            Xử lý thẻ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="custom-content-below-users-tab"
                                            data-toggle="pill"
                                            href="#custom-content-below-users"
                                            role="tab"
                                            aria-controls="custom-content-below-users"
                                            aria-selected="false"
                                        >
                                            Lịch sử kết nối
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="custom-content-below-payment-tab"
                                            data-toggle="pill"
                                            href="#custom-content-below-payment"
                                            role="tab"
                                            aria-controls="custom-content-below-payment"
                                            aria-selected="false"
                                        >
                                            Thanh toán
                                        </a>
                                    </li>
                                </ul>
                                <div
                                    className="tab-content"
                                    id="custom-content-below-tabContent"
                                    style={{ paddingTop: 25 }}
                                >
                                    <div
                                        className="tab-pane fade active show"
                                        id="custom-content-below-home"
                                        role="tabpanel"
                                        aria-labelledby="custom-content-below-home-tab"
                                    >
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th>Mạng</th>
                                                    <th>Mã nạp/Serial</th>
                                                    <th>Trạng thái</th>
                                                    <th>Khai/Thực</th>
                                                    <th>Phí</th>
                                                    <th>Số tiền</th>
                                                    <th>Hành động</th>
                                                </tr>
                                                <tr>
                                                    <td>VIETTEL</td>
                                                    <td>
                                                        <strong>012522661145218</strong> <br />
                                                        <span>10008596746373</span>
                                                    </td>
                                                    <td>
                                                        <label className="badge badge-warning">Chờ</label>
                                                    </td>
                                                    <td>
                                                        <span>50,000 đ</span>
                                                        <br />
                                                        <span className="text-success">0 đ</span>
                                                    </td>
                                                    <td>25 %</td>
                                                    <td>0 đ</td>
                                                    <td>
                                                        <button
                                                            type="submit"
                                                            name="submit"
                                                            value="XOATHE"
                                                            className="btn btn-danger"
                                                        >
                                                            Xoá thẻ
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            name="submit"
                                                            className="btn btn-info"
                                                            data-toggle="tooltip"
                                                            value="RESET"
                                                            title="Phục hồi lại thẻ sau khi đã xử lý, khách sẽ bị truy thu lại tiền"
                                                        >
                                                            Phục hồi
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="form-group">
                                            <label htmlFor="admin_note">Ghi chú:</label>
                                            <textarea name="admin_note" className="form-control" defaultValue={''} />
                                        </div>
                                        <div className="form-group">
                                            <div className="float-left d-flex align-items-center">
                                                <select
                                                    name="real"
                                                    className="mr-2"
                                                    style={{
                                                        padding: 8,
                                                        border: '1px solid #ced4da',
                                                        borderRadius: 4,
                                                        outline: 'none',
                                                    }}
                                                >
                                                    <option value>Chọn giá thực tế</option>
                                                    <option value={10000}>10,000 đ</option>
                                                    <option value={20000}>20,000 đ</option>
                                                    <option value={30000}>30,000 đ</option>
                                                    <option value={50000}>50,000 đ</option>
                                                    <option value={100000}>100,000 đ</option>
                                                    <option value={200000}>200,000 đ</option>
                                                    <option value={300000}>300,000 đ</option>
                                                    <option value={500000}>500,000 đ</option>
                                                    <option value={1000000}>1,000,000 đ</option>
                                                </select>
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    value="SAIMENHGIA"
                                                    className="btn btn-primary"
                                                    data-toggle="tooltip"
                                                    title="Thẻ sai mệnh giá sẻ bị phạt, tiền sẽ tự động cộng vào tài khoản người đăng thẻ"
                                                >
                                                    Thẻ Sai mệnh giá
                                                </button>
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    value="THELOI"
                                                    className="btn btn-warning"
                                                >
                                                    Thẻ lỗi
                                                </button>
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    value="BOQUA"
                                                    className="btn btn-dark"
                                                    data-toggle="tooltip"
                                                    title="Ẩn thẻ này nếu bạn muốn không xử lý"
                                                >
                                                    Bỏ qua
                                                </button>
                                            </div>
                                            <div className="float-right">
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    value="THEDUNG"
                                                    className="btn btn-success"
                                                    data-toggle="tooltip"
                                                    title="Tiền sẽ tự động cộng vào tài khoản đăng thẻ"
                                                >
                                                    Thẻ Đúng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="custom-content-below-users"
                                        role="tabpanel"
                                        aria-labelledby="custom-content-below-users-tab"
                                    >
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Lịch sử nhận từ NCC</label>
                                                    <textarea
                                                        rows={8}
                                                        className="form-control"
                                                        defaultValue={
                                                            '{"trans_id":3554649,"request_id":"15707","amount":43000,"value":null,"declared_value":50000,"telco":"VIETTEL","serial":"10008596714373","code":"012522661145218","status":99,"message":"PENDING"}-------{"status":2,"message":"WRONG_VALUE","request_id":"15707","declared_value":50000,"value":"20000","amount":8500,"code":"012522661145218","serial":"10008596714373","telco":"VIETTEL","trans_id":3554649,"callback_sign":"7e06ffc286740181c611196c18876a00","callback":1}'
                                                        }
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Lịch sử gửi xuống Merchant</label>
                                                    <textarea
                                                        rows={8}
                                                        className="form-control"
                                                        defaultValue={
                                                            '{"trans_id":2966493,"request_id":"15692","status":4,"message":"MAINTENANCE","telco":"ZING","code":"JAPKBBJNK","serial":"10007827332231","declared_value":20000,"value":null,"amount":0} '
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="float-left">Mã phản hồi: </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="custom-content-below-payment"
                                        role="tabpanel"
                                        aria-labelledby="custom-content-below-payment-tab"
                                    >
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Lịch sử thanh toán cho khách hàng</label>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <th>Mã TT</th>
                                                                <th>Người nhận</th>
                                                                <th>Số tiền</th>
                                                                <th>Trạng thái</th>
                                                                <th>Nội dung</th>
                                                                <th>Ngày tạo</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group"></div>
                                    </div>
                                </div>
                                <div className="modal-footer-detail" style={{ paddingBottom: 40 }}></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pending;
