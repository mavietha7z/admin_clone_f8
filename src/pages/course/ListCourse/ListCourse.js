import { faHouse, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ListCourse() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách khóa học" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={cx('card-header', 'bg-white', 'header-card')}>
                                <div className="col-md-6 float-left pl-0">
                                    <Link to="/course/list" className="mr-2">
                                        <button className="btn btn-info">
                                            <FontAwesomeIcon icon={faHouse} />
                                            <span>Home</span>
                                        </button>
                                    </Link>
                                    <Link to="/course/create" className="mr-2">
                                        <button className="btn btn-success">
                                            <FontAwesomeIcon icon={faPlus} />
                                            <span>Thêm khóa học</span>
                                        </button>
                                    </Link>
                                </div>

                                <div className="col-md-6 float-right">
                                    <div className="float-right">
                                        <div className="input-group">
                                            <select name="type" className="form-control">
                                                <option value="order">Tên khóa học</option>
                                            </select>
                                            <input
                                                type="text"
                                                name="keyword"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-warning">
                                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body" style={{ padding: 20, paddingTop: 0 }}>
                                <div className="row table-responsive p-0">
                                    <div className="col-sm-12 pr-0">
                                        <table id="example1" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Tên khóa học</th>
                                                    <th>Ảnh nền</th>
                                                    <th>Giá</th>
                                                    <th>Trạng thái</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Kiến Thức Nhập Môn IT</td>
                                                    <td>
                                                        <img
                                                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                                            alt=""
                                                            style={{
                                                                width: '160px',
                                                                height: 'auto',
                                                                borderRadius: 4,
                                                            }}
                                                        />
                                                    </td>
                                                    <td>0 VND</td>
                                                    <td>
                                                        <label className="badge badge-success">HOÀN THÀNH</label>
                                                    </td>
                                                    <td>2022-03-28 12:07:25</td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <div className="action-buttons text-center">
                                                                <span
                                                                    className={cx(
                                                                        'btn btn-success edit-softcard-btn btn-sm',
                                                                        'btn-action'
                                                                    )}
                                                                    data-toggle="modal"
                                                                    data-target="#total-order"
                                                                >
                                                                    <span>Chi tiết</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Kiến Thức Nhập Môn IT</td>
                                                    <td>
                                                        <img
                                                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                                            alt=""
                                                            style={{
                                                                width: '160px',
                                                                height: 'auto',
                                                                borderRadius: 4,
                                                            }}
                                                        />
                                                    </td>
                                                    <td>0 VND</td>
                                                    <td>
                                                        <label className="badge badge-success">HOÀN THÀNH</label>
                                                    </td>
                                                    <td>2022-03-28 12:07:25</td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <div className="action-buttons text-center">
                                                                <span
                                                                    className={cx(
                                                                        'btn btn-success edit-softcard-btn btn-sm',
                                                                        'btn-action'
                                                                    )}
                                                                    data-toggle="modal"
                                                                    data-target="#total-order"
                                                                >
                                                                    <span>Chi tiết</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="float-right">
                                            <ul className="pagination mr-4" role="navigation">
                                                <li className="page-item">
                                                    <Link className="page-link" aria-hidden="true">
                                                        ‹
                                                    </Link>
                                                </li>
                                                <li className="page-item active" aria-current="page">
                                                    <Link className="page-link">1</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=4">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=5">
                                                        5
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=2" rel="next">
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

            {/* Modal tổng đơn */}
            <div
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
                id="total-order"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header" style={{ padding: 16 }}>
                            <h2 className="modal-title">
                                <span>Xem đơn: 144</span>
                                <label className="ml-3 badge badge-success py-2" style={{ fontSize: '1.5rem' }}>
                                    ĐÃ THANH TOÁN
                                </label>
                            </h2>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                style={{ margin: 0, fontSize: '2.6rem', padding: 8 }}
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div id="modalContent" className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>ĐƠN HÀNG</label>
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td>Sản phẩm:</td>
                                                <td>
                                                    <span>
                                                        3 Garena 20.000đ - <strong>Netpay </strong>
                                                    </span>
                                                    <span className="text-muted">(WEB)</span>
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mã thanh toán:</td>
                                                <td>S6241428C49452</td>
                                            </tr>
                                            <tr>
                                                <td>Khách hàng:</td>
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
                                            </tr>
                                            <tr>
                                                <td>Hình thức thanh toán:</td>
                                                <td>Wallet_VND</td>
                                            </tr>
                                            <tr></tr>
                                            <tr>
                                                <td>Trạng thái đơn hàng:</td>
                                                <td>
                                                    <label className="badge badge-success">HOÀN THÀNH</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ngày mua/Cập nhật:</td>
                                                <td>
                                                    2022-03-28 12:07:25 <br /> 2022-03-28 12:07:28
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6 table-responsive">
                                    <label>THÔNG TIN THẺ</label>
                                    <br />
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Tên</th>
                                                <th>Mã nạp</th>
                                                <th>Se-ri</th>
                                                <th>Hạn</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Garena 20,000đ</td>
                                                <td>7903796722418471</td>
                                                <td>345602704</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Garena 20,000đ</td>
                                                <td>8155993949953034</td>
                                                <td>345602705</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Garena 20,000đ</td>
                                                <td>8798222962898524</td>
                                                <td>345602706</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <br />
                                    <label>
                                        GHI CHÚ CHO ĐƠN HÀNG
                                        <span className="text-danger">(Khách hàng sẽ nhìn thấy)</span>
                                    </label>
                                    <br />
                                    <textarea className="form-control" name="admin_note" defaultValue={''} />
                                    <button
                                        type="submit"
                                        name="submit"
                                        value="LUUTHE"
                                        className="btn btn-outline-info mt-2"
                                        data-toggle="tooltip"
                                        data-original-title="Đơn hàng sẽ chuyển sang trạng thái hoàn thành với trạng thái đã thanh toán!"
                                    >
                                        Lưu ghi chú và ÉP hoàn thành
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer-none" style={{ padding: 16 }}>
                            <div className="float-left">
                                <button
                                    type="submit"
                                    name="submit"
                                    value="redownload"
                                    className="btn btn-warning mr-2"
                                    data-toggle="tooltip"
                                    data-original-title="Web sẽ cố tải lại thẻ trả lỗi từ các nhà cung cấp. Nhưng không thực hiện giao dịch mới"
                                >
                                    Lấy lại thẻ
                                </button>
                                <button
                                    type="submit"
                                    name="submit"
                                    value="huyvahoantien"
                                    className="btn btn-outline-danger mr-2"
                                    data-toggle="tooltip"
                                    data-original-title="Hủy và hoàn tiền cho tất cả đơn hàng con!"
                                >
                                    Hủy &amp; hoàn tiền
                                </button>
                                <button
                                    type="submit"
                                    name="submit"
                                    value="xoadon"
                                    className="btn btn-danger"
                                    data-toggle="tooltip"
                                    data-original-title="Xóa và không thực hiện hành động gì tiếp theo!"
                                >
                                    Xóa đơn
                                </button>
                            </div>
                            <div className="float-right">
                                <button
                                    type="submit"
                                    name="submit"
                                    value="taomoivahoanthanh"
                                    className="btn btn-success mr-2"
                                    data-toggle="tooltip"
                                    data-original-title="Web sẽ tạo yêu cầu lấy THẺ MỚI từ kho và hoàn thành đơn hàng này."
                                >
                                    Hoàn thành đơn hàng
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    data-toggle="tooltip"
                                    data-original-title="Đóng cửa sổ!"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListCourse;
