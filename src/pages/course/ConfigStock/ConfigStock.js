import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ConfigStock() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cấu hình kho thẻ" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h2 className="card-title d-inline-block">Kho đã cài đặt</h2>
                                <div className="float-right">
                                    <Link to="/stockcards/connection">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Kho liên kết</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table
                                            id="stock"
                                            className="table table-bordered table-striped dataTable mt-2"
                                            style={{ borderCollapse: 'separate' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Provider</th>
                                                    <th>Balance</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>22</td>
                                                    <td>Kho thẻ Stock</td>
                                                    <td>Stock</td>
                                                    <td>550,000 đ</td>
                                                    <td>
                                                        <div
                                                            data-table="softcard_products"
                                                            data-id={47}
                                                            data-col="status"
                                                            className={
                                                                status
                                                                    ? cx('switch', 'round', 'on')
                                                                    : cx('switch', 'round', 'off')
                                                            }
                                                            style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                            onClick={() => handleToggleStatus()}
                                                        >
                                                            <div className={cx('toggle')} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <Link to="/stockcards/uninstall/Stock">
                                                                <span className="btn btn-small btn-danger mr-2">
                                                                    {/* <FaTrashAlt title="Xóa" /> */}
                                                                </span>
                                                            </Link>
                                                            <Link to="/stockcards/setting/22/update">
                                                                <span className="btn btn-small btn-warning mr-2">
                                                                    {/* <FaPen title="Sửa" /> */}
                                                                </span>
                                                            </Link>
                                                            <Link to="/stock/balance/Stock">
                                                                <span className="btn btn-small btn-info">
                                                                    {/* <FaSyncAlt title="Lấy số dư" /> */}
                                                                </span>
                                                            </Link>
                                                            <img
                                                                src="/stock/balance/Stock"
                                                                alt=""
                                                                style={{ width: 0, height: 0 }}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card-header bg-white">
                                <h2 className="card-title mb-0">Kho chưa cài đặt</h2>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table
                                            id="stock"
                                            className="table table-bordered table-striped dataTable mt-2"
                                            style={{ borderCollapse: 'separate' }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên kho</th>
                                                    <th>Mã kho</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Kho thẻ Stock</td>
                                                    <td>Stock</td>
                                                    <td>
                                                        <Link href="/stockcards/install/Stock">
                                                            <button
                                                                type="button"
                                                                className="btn btn-warning btn-small"
                                                                style={{ padding: '6px 10px', fontSize: '1.3rem' }}
                                                            >
                                                                Cài đặt
                                                            </button>
                                                        </Link>
                                                    </td>
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
    );
}

export default ConfigStock;
