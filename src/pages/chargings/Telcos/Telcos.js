import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Telcos() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Các loại thẻ của đổi thẻ cào" />
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
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right">
                                    <Link to="/chargings/telcos/create">
                                        <button className="btn btn-success">
                                            <FaPlusCircle />
                                            <span>Thêm loại thẻ</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card-body p-0">
                                <div className="table-responsive mb-4">
                                    <table id="example1" className="table table-bordered table-striped ">
                                        <thead>
                                            <tr>
                                                <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
                                                    <label className="pos-rel">
                                                        <input type="checkbox" className="ace" id="checkall" />
                                                        <span className="lbl" />
                                                    </label>
                                                </th>
                                                <th>Tên</th>
                                                <th>Khóa mã</th>
                                                <th>Trạng thái</th>
                                                <th>Mệnh giá</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="center">
                                                    <label className="pos-rel">
                                                        <input
                                                            type="checkbox"
                                                            className="ace mycheckbox"
                                                            defaultValue={6}
                                                            name="check[]"
                                                        />
                                                        <span className="lbl" />
                                                    </label>
                                                </td>
                                                <td>Vietnamobile ( 88 )</td>
                                                <td>VIETNAMOBILE</td>
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
                                                <td>10000,20000,30000,50000,100000,200000,300000,500000</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Link to="/chargings/chanel/VIETNAMOBILE">
                                                            <button className="btn btn-sm btn-success">
                                                                <MdFlashOn className="mb-0" />
                                                                <span className="ml-0">Kênh</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/chargings/telcos/6/edit">
                                                            <button className="btn btn-sm btn-warning">
                                                                <FaPencilAlt />
                                                                <span>Sửa</span>
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            name="Vietnamobile ( 88 )"
                                                            link="/chargings/telcos/6"
                                                            className="deleteClick id-btn-dialog2"
                                                            data-toggle="modal"
                                                            data-target="#deleteModal"
                                                        >
                                                            <button className="btn btn-sm btn-danger">
                                                                <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                                                                <span>Xóa</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="center">
                                                    <label className="pos-rel">
                                                        <input
                                                            type="checkbox"
                                                            className="ace mycheckbox"
                                                            defaultValue={5}
                                                            name="check[]"
                                                        />
                                                        <span className="lbl" />
                                                    </label>
                                                </td>
                                                <td>Zing ( 85 )</td>
                                                <td>ZING</td>
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
                                                <td>10000,20000,30000,50000,100000,200000,300000,500000,1000000</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Link to="/chargings/chanel/ZING">
                                                            <button className="btn btn-sm btn-success">
                                                                <MdFlashOn className="mb-0" />
                                                                <span className="ml-0">Kênh</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/chargings/telcos/5/edit">
                                                            <button className="btn btn-sm btn-warning">
                                                                <FaPencilAlt />
                                                                <span>Sửa</span>
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            name="Zing ( 85 )"
                                                            link="/chargings/telcos/5"
                                                            className="deleteClick id-btn-dialog2"
                                                            data-toggle="modal"
                                                            data-target="#deleteModal"
                                                        >
                                                            <button className="btn btn-sm btn-danger">
                                                                <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                                                                <span>Xóa</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="center">
                                                    <label className="pos-rel">
                                                        <input
                                                            type="checkbox"
                                                            className="ace mycheckbox"
                                                            defaultValue={4}
                                                            name="check[]"
                                                        />
                                                        <span className="lbl" />
                                                    </label>
                                                </td>
                                                <td>GATE</td>
                                                <td>GATE</td>
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
                                                <td>50000,100000,200000,500000,1000000</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Link to="/chargings/chanel/GATE">
                                                            <button className="btn btn-sm btn-success">
                                                                <MdFlashOn className="mb-0" />
                                                                <span className="ml-0">Kênh</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/chargings/telcos/4/edit">
                                                            <button className="btn btn-sm btn-warning">
                                                                <FaPencilAlt />
                                                                <span>Sửa</span>
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            name="GATE"
                                                            link="/chargings/telcos/4"
                                                            className="deleteClick id-btn-dialog2"
                                                            data-toggle="modal"
                                                            data-target="#deleteModal"
                                                        >
                                                            <button className="btn btn-sm btn-danger">
                                                                <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                                                                <span>Xóa</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="center">
                                                    <label className="pos-rel">
                                                        <input
                                                            type="checkbox"
                                                            className="ace mycheckbox"
                                                            defaultValue={3}
                                                            name="check[]"
                                                        />
                                                        <span className="lbl" />
                                                    </label>
                                                </td>
                                                <td>Mobifone ( 86 )</td>
                                                <td>MOBIFONE</td>
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
                                                <td>10000,20000,30000,50000,100000,200000,300000,500000</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Link to="/chargings/chanel/MOBIFONE">
                                                            <button className="btn btn-sm btn-success">
                                                                <MdFlashOn className="mb-0" />
                                                                <span className="ml-0">Kênh</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/chargings/telcos/3/edit">
                                                            <button className="btn btn-sm btn-warning">
                                                                <FaPencilAlt />
                                                                <span>Sửa</span>
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            name="Mobifone ( 86 )"
                                                            link="/chargings/telcos/3"
                                                            className="deleteClick id-btn-dialog2"
                                                            data-toggle="modal"
                                                            data-target="#deleteModal"
                                                        >
                                                            <button className="btn btn-sm btn-danger">
                                                                <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                                                                <span>Xóa</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="center">
                                                    <label className="pos-rel">
                                                        <input
                                                            type="checkbox"
                                                            className="ace mycheckbox"
                                                            defaultValue={2}
                                                            name="check[]"
                                                        />
                                                        <span className="lbl" />
                                                    </label>
                                                </td>
                                                <td>Vinaphone ( 88 )</td>
                                                <td>VINAPHONE</td>
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
                                                <td>10000,20000,30000,50000,100000,200000,300000,500000</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Link to="/chargings/chanel/VINAPHONE">
                                                            <button className="btn btn-sm btn-success">
                                                                <MdFlashOn className="mb-0" />
                                                                <span className="ml-0">Kênh</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/chargings/telcos/2/edit">
                                                            <button className="btn btn-sm btn-warning">
                                                                <FaPencilAlt />
                                                                <span>Sửa</span>
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            name="Vinaphone ( 88 )"
                                                            link="/chargings/telcos/2"
                                                            className="deleteClick id-btn-dialog2"
                                                            data-toggle="modal"
                                                            data-target="#deleteModal"
                                                        >
                                                            <button className="btn btn-sm btn-danger">
                                                                <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                                                                <span>Xóa</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="center">
                                                    <label className="pos-rel">
                                                        <input
                                                            type="checkbox"
                                                            className="ace mycheckbox"
                                                            defaultValue={1}
                                                            name="check[]"
                                                        />
                                                        <span className="lbl" />
                                                    </label>
                                                </td>
                                                <td>Viettel ( 90 )</td>
                                                <td>VIETTEL</td>
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
                                                <td>10000,20000,30000,50000,100000,200000,300000,500000,1000000</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Link to="/chargings/chanel/VIETTEL">
                                                            <button className="btn btn-sm btn-success">
                                                                <MdFlashOn className="mb-0" />
                                                                <span className="ml-0">Kênh</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/chargings/telcos/1/edit">
                                                            <button className="btn btn-sm btn-warning">
                                                                <FaPencilAlt />
                                                                <span>Sửa</span>
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            name="Viettel ( 90 )"
                                                            link="/chargings/telcos/1"
                                                            className="deleteClick id-btn-dialog2"
                                                            data-toggle="modal"
                                                            data-target="#deleteModal"
                                                        >
                                                            <button className="btn btn-sm btn-danger">
                                                                <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                                                                <span>Xóa</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <form action method="POST">
                                    <div className="mx-3 mb-4">
                                        <div style={{ borderBottom: 0 }}>
                                            <h2>Cấu hình Vietnamobile ( 88 )</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Mệnh giá</th>
                                                        <th colSpan={2}>Nhóm: VIP/API</th>
                                                        <th colSpan={2}>Nhóm: THÀNH VIÊN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>30000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>50000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>200000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>300000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>500000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETNAMOBILE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
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

                                <form action method="POST">
                                    <div className="mx-3 mb-4">
                                        <div style={{ borderBottom: 0 }}>
                                            <h2>Cấu hình Zing ( 85 )</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Mệnh giá</th>
                                                        <th colSpan={2}>Nhóm: VIP/API</th>
                                                        <th colSpan={2}>Nhóm: THÀNH VIÊN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>30000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>50000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>200000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>300000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>500000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1000000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={1000000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={1000000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={1000000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="ZING"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={1000000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
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

                                <form action method="POST">
                                    <div className="mx-3 mb-4">
                                        <div style={{ borderBottom: 0 }}>
                                            <h2>Cấu hình GATE</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Mệnh giá</th>
                                                        <th colSpan={2}>Nhóm: VIP/API</th>
                                                        <th colSpan={2}>Nhóm: THÀNH VIÊN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>50000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={28}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={30}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={28}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={30}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>200000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={28}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={30}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>500000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={28}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={30}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1000000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={1000000}
                                                                defaultValue={28}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={1000000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={1000000}
                                                                defaultValue={30}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="GATE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={1000000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
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

                                <form action method="POST">
                                    <div className="mx-3 mb-4">
                                        <div style={{ borderBottom: 0 }}>
                                            <h2>Cấu hình Mobifone ( 86 )</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Mệnh giá</th>
                                                        <th colSpan={2}>Nhóm: VIP/API</th>
                                                        <th colSpan={2}>Nhóm: THÀNH VIÊN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>30000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>50000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>200000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>300000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>500000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="MOBIFONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
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

                                <form action method="POST">
                                    <div className="mx-3 mb-4">
                                        <div style={{ borderBottom: 0 }}>
                                            <h2>Cấu hình Vinaphone ( 88 )</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Mệnh giá</th>
                                                        <th colSpan={2}>Nhóm: VIP/API</th>
                                                        <th colSpan={2}>Nhóm: THÀNH VIÊN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>30000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>50000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>200000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>300000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>500000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={16}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VINAPHONE"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
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

                                <form action method="POST">
                                    <div className="mx-3 mb-4">
                                        <div style={{ borderBottom: 0 }}>
                                            <h2>Cấu hình Viettel ( 90 )</h2>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Mệnh giá</th>
                                                        <th colSpan={2}>Nhóm: VIP/API</th>
                                                        <th colSpan={2}>Nhóm: THÀNH VIÊN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={10000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={10000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={20000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={20000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>30000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={30000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={30000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>50000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={10}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={50000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={50000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>100000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={10}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={100000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={100000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>200000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={12}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={200000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={200000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>300000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={300000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={300000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>500000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={14}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={500000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={500000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>1000000</td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="fees"
                                                                data-value-price={1000000}
                                                                defaultValue={15}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={4}
                                                                data-key="penalty"
                                                                data-value-price={1000000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="fees"
                                                                data-value-price={1000000}
                                                                defaultValue={25}
                                                                placeholder="Phí %"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control FeesAjax"
                                                                data-telco="VIETTEL"
                                                                data-group={2}
                                                                data-key="penalty"
                                                                data-value-price={1000000}
                                                                defaultValue={100}
                                                                placeholder="Phạt %"
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

            {/* Modal */}
            <div
                className="modal fade"
                id="deleteModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form id="deleteForm" action method="POST">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">
                                    Xóa loại thẻ
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : Vietnamobile ( 88 ) ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Đóng
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Xóa
                                </button>
                            </div>
                            <input type="hidden" name="_method" defaultValue="delete" />
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
    );
}

export default Telcos;
