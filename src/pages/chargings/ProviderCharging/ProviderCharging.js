import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ProviderCharging() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cấu hình NCC tẩy thẻ" />
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
                            <div className="card-header">
                                <h2 className="card-title">NNC đã cài đặt</h2>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row p-0">
                                    <div className="col-sm-12">
                                        <table id="stock" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên hiển thị</th>
                                                    <th>Mã nhà cung cấp</th>
                                                    <th>Địa chỉ IP NNC</th>
                                                    <th>Trạng thái</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>22</td>
                                                    <td>NCC tẩy thẻ Gachthe1s</td>
                                                    <td>Tsr</td>
                                                    <td />
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
                                                            <Link to="/chargings/provider/22/update">
                                                                <span className="btn btn-warning btn-sm mr-2">
                                                                    <FaPencilAlt />
                                                                </span>
                                                            </Link>
                                                            <Link to="/chargings/provider/22/uninstall">
                                                                <span className="btn btn-danger btn-sm">
                                                                    <FaRegTrashAlt />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td>NCC tẩy thẻ Trumthe</td>
                                                    <td>Trumthe</td>
                                                    <td />
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
                                                            <Link to="/chargings/provider/23/update">
                                                                <span className="btn btn-warning btn-sm mr-2">
                                                                    <FaPencilAlt />
                                                                </span>
                                                            </Link>
                                                            <Link to="/chargings/provider/23/uninstall">
                                                                <span className="btn btn-danger btn-sm">
                                                                    <FaRegTrashAlt />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td>NCC tẩy thẻ Doithe</td>
                                                    <td>Doithe</td>
                                                    <td />
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
                                                            <Link to="/chargings/provider/24/update">
                                                                <span className="btn btn-warning btn-sm mr-2">
                                                                    <FaPencilAlt />
                                                                </span>
                                                            </Link>
                                                            <Link to="/chargings/provider/24/uninstall">
                                                                <span className="btn btn-danger btn-sm">
                                                                    <FaRegTrashAlt />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header">
                                <h2 className="card-title">NCC chưa cài đặt</h2>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="stock" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên hiển thị</th>
                                                    <th>Mã nhà cung cấp</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <form action method="POST">
                                <div className="card-body row">
                                    <h2>KEY KẾT NỐI</h2>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>DỊCH VỤ/NCC:</th>
                                                    <th>Khóa mã</th>
                                                    <th>Tsr</th>
                                                    <th>Trumthe</th>
                                                    <th>Doithe</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Viettel ( 90 )</td>
                                                    <td>VIETTEL</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VIETTEL"
                                                            data-provider="Tsr"
                                                            data-key="provider_code"
                                                            defaultValue="VIETTEL"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VIETTEL"
                                                            data-provider="Trumthe"
                                                            data-key="provider_code"
                                                            defaultValue="VIETTEL"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VIETTEL"
                                                            data-provider="Doithe"
                                                            data-key="provider_code"
                                                            defaultValue="VIETTEL"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Vinaphone ( 88 )</td>
                                                    <td>VINAPHONE</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VINAPHONE"
                                                            data-provider="Tsr"
                                                            data-key="provider_code"
                                                            defaultValue="VINAPHONE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VINAPHONE"
                                                            data-provider="Trumthe"
                                                            data-key="provider_code"
                                                            defaultValue="VINAPHONE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VINAPHONE"
                                                            data-provider="Doithe"
                                                            data-key="provider_code"
                                                            defaultValue="VINAPHONE"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mobifone ( 86 )</td>
                                                    <td>MOBIFONE</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="MOBIFONE"
                                                            data-provider="Tsr"
                                                            data-key="provider_code"
                                                            defaultValue="MOBIFONE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="MOBIFONE"
                                                            data-provider="Trumthe"
                                                            data-key="provider_code"
                                                            defaultValue="MOBIFONE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="MOBIFONE"
                                                            data-provider="Doithe"
                                                            data-key="provider_code"
                                                            defaultValue="MOBIFONE"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>GATE</td>
                                                    <td>GATE</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="GATE"
                                                            data-provider="Tsr"
                                                            data-key="provider_code"
                                                            defaultValue="GATE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="GATE"
                                                            data-provider="Trumthe"
                                                            data-key="provider_code"
                                                            defaultValue="GATE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="GATE"
                                                            data-provider="Doithe"
                                                            data-key="provider_code"
                                                            defaultValue="GATE"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Zing ( 85 )</td>
                                                    <td>ZING</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="ZING"
                                                            data-provider="Tsr"
                                                            data-key="provider_code"
                                                            defaultValue="ZING"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="ZING"
                                                            data-provider="Trumthe"
                                                            data-key="provider_code"
                                                            defaultValue="ZING"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="ZING"
                                                            data-provider="Doithe"
                                                            data-key="provider_code"
                                                            defaultValue="ZING"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Vietnamobile ( 88 )</td>
                                                    <td>VIETNAMOBILE</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VIETNAMOBILE"
                                                            data-provider="Tsr"
                                                            data-key="provider_code"
                                                            defaultValue="VIETNAMOBILE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VIETNAMOBILE"
                                                            data-provider="Trumthe"
                                                            data-key="provider_code"
                                                            defaultValue="VIETNAMOBILE"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            data-telco="VIETNAMOBILE"
                                                            data-provider="Doithe"
                                                            data-key="provider_code"
                                                            defaultValue="VIETNAMOBILE"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="fu5RnQtywzyS751plEpKfO4UEuEMiwniIvorMCHy"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProviderCharging;
