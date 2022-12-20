import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Product() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách sản phẩm" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={cx('card-header', 'bg-white', 'header-card')}>
                                <div className="col-md-6 float-left">
                                    <Link to="/softcard/orders" className="mr-2">
                                        <button className="btn btn-info">
                                            {/* <FaHome /> */}
                                            <span>Home</span>
                                        </button>
                                    </Link>
                                    <Link to="/softcard/setting" className="mr-2">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Cấu hình</span>
                                        </button>
                                    </Link>
                                    <Link to="/softcard/create" className="mr-2">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Thêm</span>
                                        </button>
                                    </Link>
                                </div>

                                <div className="col-md-6 float-right">
                                    <div className="float-right">
                                        <form method="GET">
                                            <div className="input-group">
                                                <select name="type" className="form-control">
                                                    <option value="order">Mã đơn hàng</option>
                                                    <option value="serial">Số seri thẻ</option>
                                                    <option value="email">Email</option>
                                                    <option value="phone">Số điện thoại</option>
                                                    <option value="status_none">Trạng thái nháp</option>
                                                    <option value="status_pending">Trạng thái chờ</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    name="keyword"
                                                    className="form-control"
                                                    placeholder="Search"
                                                />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-warning">
                                                        {/* <FaSearch /> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <form action="/softcard/action" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="PTooxrzNCLF1ICHEZTwwEXirL7RojkaLLtxYHQ7y"
                                />
                                <div className="card-body" style={{ padding: 20, paddingTop: 0 }}>
                                    <div className="row table-responsive">
                                        <div className="col-sm-12">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
                                                            <label className="pos-rel">
                                                                <input type="checkbox" className="ace" id="checkall" />
                                                                <span className="lbl" />
                                                            </label>
                                                        </th>
                                                        <th>ID</th>
                                                        <th>Tên sản phẩm</th>
                                                        <th>Hình ảnh</th>
                                                        <th>Mã sản phẩm</th>
                                                        <th>Trạng thái</th>
                                                        <th>Ngày tạo</th>
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
                                                                    defaultValue={47}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>47</td>
                                                        <td>Thẻ Vega</td>
                                                        <td>
                                                            <img src="" alt="" style={{ width: 100, height: 50 }} />
                                                        </td>
                                                        <td>vega</td>
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
                                                        <td>2022-02-22 15:03:07</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/softcard/47/edit">
                                                                    <span className="btn-small btn-info mr-2">
                                                                        {/* <FaPen title="Sửa" /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Thẻ  Vega"
                                                                    link="/softcard/47"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#modal-delete-product"
                                                                >
                                                                    <span className="btn-small btn-danger">
                                                                        {/* <FaTrashAlt title="Delete" /> */}
                                                                    </span>
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
                                                        <input type="hidden" name="module" defaultValue="softcard" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn btn-warning">
                                                            <i className="ace-icon fa fa-check-circle bigger-130" />
                                                            Thực hiện
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
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="modal-delete-product"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">
                                Xóa thẻ
                            </h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn có chắc muốn xóa không: Thẻ Vega?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Đóng
                            </button>
                            <button type="button" className="btn btn-primary">
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
