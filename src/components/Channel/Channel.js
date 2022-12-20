import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '~/GlobalStyles.module.scss';
import Title from '../Title';

const cx = classNames.bind(styles);

function Channel() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Nhà cung cấp" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách nhà cung cấp VIETNAMOBILE</h2>
                            </div>
                            <div className="card-body p-0">
                                <div id="Settings" className="table-responsive">
                                    <table id="example1" className="table table-bordered table-striped ">
                                        <thead>
                                            <tr>
                                                <th>NCC</th>
                                                <th>10000</th>
                                                <th>20000</th>
                                                <th>30000</th>
                                                <th>50000</th>
                                                <th>100000</th>
                                                <th>200000</th>
                                                <th>300000</th>
                                                <th>500000</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>NCC chính</td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={10000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={20000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={30000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={50000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={100000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={200000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={300000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={500000}
                                                        className="form-control provider"
                                                        data-key="provider"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe" selected>
                                                            Trumthe
                                                        </option>
                                                        <option value="Doithe">Doithe</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>NCC phụ</td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={10000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={20000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={30000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={50000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={100000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={200000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={300000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                                <td style={{ minWidth: 150 }}>
                                                    <select
                                                        data-value={500000}
                                                        className="form-control provider"
                                                        data-key="provider2"
                                                    >
                                                        <option value>--Chọn nhà cung cấp--</option>
                                                        <option value="Me">Me</option>
                                                        <option value="Tsr">Tsr</option>
                                                        <option value="Trumthe">Trumthe</option>
                                                        <option value="Doithe" selected>
                                                            Doithe
                                                        </option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Link to="/chargings" className="btn btn-default">
                                    Quay lại
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Channel;
