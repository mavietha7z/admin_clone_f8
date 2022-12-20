import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatDaily() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Biến động ví điện tử 10-12-2022" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="table-responsive">
                                    <table id="example1" className="table table-bordered table-striped dataTable">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span className="text-danger">
                                                        Tính từ 0h:00:00 đến thời điểm hiện tại 2022-12-10 12:23:01
                                                    </span>
                                                </th>
                                                <th>Số tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Doanh số bán thẻ</td>
                                                <td>+0</td>
                                            </tr>
                                            <tr>
                                                <td>Doanh số đổi thẻ cào</td>
                                                <td>-0</td>
                                            </tr>
                                            <tr>
                                                <td>Doanh số nạp cước</td>
                                                <td>+0</td>
                                            </tr>
                                            <tr>
                                                <td>Tổng số rút tiền từ ví (tính cả đơn hủy hoàn tiền)</td>
                                                <td>+0</td>
                                            </tr>
                                            <tr>
                                                <td>Tổng số nạp tiền (gồm cả hoàn tiền)</td>
                                                <td>-0</td>
                                            </tr>
                                            <tr>
                                                <td>Tổng số phí chuyển tiền</td>
                                                <td>+0</td>
                                            </tr>
                                            <tr>
                                                <td>Tổng số dư của khách hàng hiện tại</td>
                                                <td>
                                                    <strong>6,479,181</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Biến động số dư của khách hàng</td>
                                                <td>
                                                    <strong>0</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tổng số dư của khách hàng lúc 0h:00:00</td>
                                                <td>
                                                    <strong className="text-danger">6,479,181</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <table id="example1" className="table table-bordered table-striped dataTable">
                                    <thead>
                                        <tr>
                                            <th>Ngày tháng</th>
                                            <th>Số dư User</th>
                                            <th>Số dư Admin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2022-12-10 00:00:02</td>
                                            <td>6,479,181</td>
                                            <td>9,912,106,465</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-09 00:00:01</td>
                                            <td>6,479,181</td>
                                            <td>9,912,106,465</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-08 00:00:01</td>
                                            <td>6,366,681</td>
                                            <td>9,912,218,965</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-07 00:00:01</td>
                                            <td>6,329,181</td>
                                            <td>9,912,256,465</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-06 00:00:02</td>
                                            <td>6,291,681</td>
                                            <td>9,912,293,965</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-05 00:00:01</td>
                                            <td>6,291,681</td>
                                            <td>9,912,293,965</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-04 00:00:02</td>
                                            <td>6,291,681</td>
                                            <td>9,912,293,965</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-03 00:00:02</td>
                                            <td>6,291,681</td>
                                            <td>9,912,293,965</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-02 00:00:02</td>
                                            <td>6,254,181</td>
                                            <td>9,912,331,465</td>
                                        </tr>
                                        <tr>
                                            <td>2022-12-01 00:00:02</td>
                                            <td>6,254,181</td>
                                            <td>9,912,331,465</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatDaily;
