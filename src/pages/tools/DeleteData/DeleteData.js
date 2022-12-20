import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function DeleteData() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Các tiện tích cho websites" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-header bg-secondary">
                                                <h2 className="card-title text-white">Xóa dữ liệu tẩy thẻ</h2>
                                            </div>
                                            <form method="POST" action="/tools/delete-charging" acceptCharset="UTF-8">
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="charging_month">
                                                                Chọn thời gian muốn xóa
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                name="charging_month"
                                                                required
                                                            >
                                                                <option value />
                                                                <option value="7d">Xóa những thẻ cũ hơn 7 ngày</option>
                                                                <option value="15d">
                                                                    Xóa những thẻ cũ hơn 15 ngày
                                                                </option>
                                                                <option value="1m">Xóa những thẻ cũ hơn 1 tháng</option>
                                                                <option value="2m">Xóa những thẻ cũ hơn 2 tháng</option>
                                                                <option value="3m">Xóa những thẻ cũ hơn 3 tháng</option>
                                                                <option value="6m">Xóa những thẻ cũ hơn 6 tháng</option>
                                                                <option value="12m">
                                                                    Xóa những thẻ cũ hơn 12 tháng
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            Nếu dữ liệu quá nhiều gây timeout, bạn có thể xóa làm nhiều
                                                            lần.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">
                                                        Thực hiện
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header bg-primary">
                                                <h2 className="card-title text-white">Xóa dữ liệu nạp cước</h2>
                                            </div>
                                            <form method="POST" action="/tools/delete-mtopup" acceptCharset="UTF-8">
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="mtopup_month">
                                                                Chọn thời gian muốn xóa
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                name="mtopup_month"
                                                                required
                                                            >
                                                                <option value />
                                                                <option value="7d">Xóa nạp cước cũ hơn 7 ngày</option>
                                                                <option value="1m">Xóa nạp cước cũ hơn 1 tháng</option>
                                                                <option value="3m">Xóa nạp cước cũ hơn 3 tháng</option>
                                                                <option value="6m">Xóa nạp cước cũ hơn 6 tháng</option>
                                                                <option value="12m">
                                                                    Xóa nạp cước cũ hơn 12 tháng
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            Nếu dữ liệu quá nhiều gây timeout, bạn có thể xóa làm nhiều
                                                            lần.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">
                                                        Thực hiện
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-header bg-danger">
                                                <h2 className="card-title text-white">
                                                    Xóa dữ liệu tổng hợp (nguy hiểm)
                                                </h2>
                                            </div>
                                            <form method="POST" action="/tools/delete-order" acceptCharset="UTF-8">
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="mtopup_month">
                                                                Chọn thời gian muốn xóa
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                name="order_month"
                                                                required
                                                            >
                                                                <option value />
                                                                <option value="7d">Xóa đơn hàng cũ hơn 7 ngày</option>
                                                                <option value="15d">Xóa đơn hàng cũ hơn 15 ngày</option>
                                                                <option value="1m">Xóa đơn hàng cũ hơn 1 tháng</option>
                                                                <option value="2m">Xóa đơn hàng cũ hơn 2 tháng</option>
                                                                <option value="3m">Xóa đơn hàng cũ hơn 3 tháng</option>
                                                                <option value="6m">Xóa đơn hàng cũ hơn 6 tháng</option>
                                                                <option value="12m">
                                                                    Xóa đơn hàng cũ hơn 12 tháng
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            Sẽ xóa: đơn hàng, giao dịch, nạp rút tiền, mua thẻ, tẩy thẻ,
                                                            nạp cước, khớp...
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">
                                                        Thực hiện
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header bg-dark">
                                                <h2 className="card-title text-white">Xóa dữ liệu log</h2>
                                            </div>
                                            <form method="POST" action="/tools/delete-trash" acceptCharset="UTF-8">
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="trash_month">Chọn thời gian muốn xóa</label>
                                                            <select
                                                                className="form-control"
                                                                name="trash_month"
                                                                required
                                                            >
                                                                <option value />
                                                                <option value="7d">Xóa đơn hàng cũ hơn 7 ngày</option>
                                                                <option value="1m">Xóa đơn hàng cũ hơn 1 tháng</option>
                                                                <option value="3m">Xóa đơn hàng cũ hơn 3 tháng</option>
                                                                <option value="6m">Xóa đơn hàng cũ hơn 6 tháng</option>
                                                                <option value="12m">
                                                                    Xóa đơn hàng cũ hơn 12 tháng
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div>Sẽ xóa các loại log: sms, log user...</div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">
                                                        Thực hiện
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header bg-danger">
                                                <h2 className="card-title text-white">
                                                    Xóa dữ liệu thành viên (nguy hiểm)
                                                </h2>
                                            </div>
                                            <form method="POST" action="/tools/delete-user" acceptCharset="UTF-8">
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="trash_month">
                                                                Nhập email hoặc phone của thành viên
                                                            </label>
                                                            <input name="user" className="form-control" />
                                                        </div>
                                                        <div>Sẽ xóa cứng tất cả dữ liệu của 1 thành viên</div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">
                                                        Thực hiện
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header bg-success">
                                                <h2 className="card-title text-white">Sao lưu dữ liệu website</h2>
                                            </div>
                                            <div className="card-body row">
                                                <div>Dữ liệu website sẽ được lưu xuống máy của bạn để lưu trữ.</div>
                                            </div>
                                            <div className="card-footer">
                                                <Link to="/database/export" target="_blank">
                                                    <button type="submit" className="btn btn-primary">
                                                        Sao lưu
                                                    </button>
                                                </Link>
                                            </div>
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

export default DeleteData;
