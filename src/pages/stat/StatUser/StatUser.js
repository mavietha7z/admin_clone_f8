import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StatUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sản lượng thành viên" />
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
                                                    defaultValue
                                                    name="user_id"
                                                    placeholder="Mã khách hàng"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        value="filter"
                                                        className="btn btn-warning"
                                                    >
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
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="table-responsive">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Khách hàng</th>
                                                        <th>Sản lượng mua mã thẻ</th>
                                                        <th>Sản lượng đổi thẻ cào</th>
                                                        <th>Sản lượng nạp cước</th>
                                                        <th>Tổng số</th>
                                                        <th>Sản lượng ngày</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={10} className="text-center alert alert-light">
                                                            Chưa có dữ liệu
                                                        </td>
                                                    </tr>
                                                </tbody>
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

export default StatUser;
