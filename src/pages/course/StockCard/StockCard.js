import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function StockCard() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý kho thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-white">
                            <div className="col-md-6 float-left">
                                <Link to="/stockcards">
                                    <button className="btn btn-info mr-2">
                                        {/* <FaHome /> */}
                                        <span>Home</span>
                                    </button>
                                </Link>
                                <Link to="/stockcards/importcard">
                                    <button className="btn btn-success mr-2">
                                        {/* <FaPlusCircle /> */}
                                        <span>Nhập thẻ</span>
                                    </button>
                                </Link>
                                <Link to="/statistic/stockcard">
                                    <button className="btn btn-warning">
                                        {/* <FaDatabase /> */}
                                        <span>Hàng tồn</span>
                                    </button>
                                </Link>
                                <div className="float-right">
                                    <form name="formSearch" method="GET">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="seri"
                                                placeholder="Nhập Seri"
                                            />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-warning">
                                                    {/* <FaSearch /> */}
                                                    <span>Tìm</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 float-right">
                                <div className="pull-right">
                                    <form name="formSearch" method="GET">
                                        <div className="input-group">
                                            <select name="service_code" className="form-control">
                                                <option value>-- Mã dịch vụ --</option>
                                                <option value="Viettel">Viettel</option>
                                                <option value="Vina">Vina</option>
                                            </select>
                                            <select name="value" className="form-control">
                                                <option value>-- Mệnh giá --</option>
                                                <option value={10000}>10,000</option>
                                            </select>
                                            <select name="status" className="form-control">
                                                <option value="available">Chưa bán</option>
                                                <option value="sold">Đã bán</option>
                                            </select>
                                            <div className="input-group-append">
                                                <button
                                                    type="submit"
                                                    name="type"
                                                    value="filter"
                                                    className="btn btn-warning"
                                                >
                                                    {/* <FaSearch /> */}
                                                    <span>Lọc</span>
                                                </button>
                                                <button
                                                    type="submit"
                                                    name="type"
                                                    value="excel"
                                                    className="btn btn-success"
                                                >
                                                    {/* <FaDownload /> */}
                                                    <span>Xuất</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <form action="/stockcards/action" method="POST">
                            <input
                                type="hidden"
                                name="_token"
                                defaultValue="YFtpMspUfhyWYfVYQlbbyJCVtWAPf98inSRasZEN"
                            />
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row table-responsive" style={{ margin: 0, padding: 0 }}>
                                    <div className="col-sm-12">
                                        <table id="example1" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
                                                        <label className="pos-rel">
                                                            <input type="checkbox" className="ace" id="checkall" />
                                                            <span className="lbl" />
                                                        </label>
                                                    </th>
                                                    <th>ID</th>
                                                    <th>Mã dịch vụ</th>
                                                    <th>Mệnh giá</th>
                                                    <th>Serial</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="center">
                                                        <label className="pos-rel">
                                                            <input
                                                                type="checkbox"
                                                                className="ace mycheckbox"
                                                                defaultValue={14}
                                                                name="check[]"
                                                            />
                                                            <span className="lbl" />
                                                        </label>
                                                    </td>
                                                    <td>14</td>
                                                    <td>Viettel</td>
                                                    <td>200,000</td>
                                                    <td>4324324</td>
                                                    <td />
                                                    <td>God Admin</td>
                                                    <td>2021-08-17 05:44:13</td>
                                                    <td />
                                                    <td>
                                                        <label className="badge badge-success">CHƯA BÁN</label>
                                                    </td>
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
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <div className="action-buttons">
                                                            <Link
                                                                to="#"
                                                                name="Viettel 200.000đ"
                                                                link="/stockcards/delete/14"
                                                                className="deleteClick red id-btn-dialog2"
                                                                data-toggle="modal"
                                                                data-target="#deleteModal"
                                                            >
                                                                <button className="btn btn-small btn-warning">
                                                                    {/* <FaTrashAlt
                                                                        title="Delete"
                                                                        style={{ marginBottom: 0 }}
                                                                    /> */}
                                                                    <span>Xóa</span>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div
                                            className="dataTables_info"
                                            id="example2_info"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            <div className="form-group row">
                                                <div className="col-md-4">
                                                    <select name="action" className="form-control">
                                                        <option value>-- Hành động --</option>
                                                        <option value="delete">Xóa đã chọn</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn btn-warning">
                                                        {/* <FaCheckCircle /> */}
                                                        <span>Thực hiện</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="float-right" id="dynamic-table_paginate"></div>
                                    </div>
                                </div>
                            </div>
                        </form>

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
                                    <form id="deleteForm" method="POST">
                                        <div className="modal-header py-4">
                                            <h2 className="modal-title" id="exampleModalLabel">
                                                Xóa thẻ
                                            </h2>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div id="deleteMes" className="modal-body py-5">
                                            <span>Delete : Viettel 200.000đ ?</span>
                                        </div>
                                        <div className="modal-footer  py-4">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                                Đóng
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                        <input type="hidden" name="_method" defaultValue="delete" />
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="YFtpMspUfhyWYfVYQlbbyJCVtWAPf98inSRasZEN"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockCard;
