import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function SEOPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Seo OnPage" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right" style={{ marginRight: 200 }}>
                                    <Link to="/seo/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Thêm link seo</span>
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="card-tools  d-flex"
                                    style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                                >
                                    <div
                                        className="input-group input-group-sm dataTables_filter"
                                        style={{ width: 150 }}
                                    >
                                        <form action name="formSearch" method="GET">
                                            <input
                                                type="text"
                                                name="keyword"
                                                className="form-control float-right"
                                                placeholder="Search"
                                                style={{ paddingRight: 42 }}
                                            />
                                        </form>
                                    </div>
                                    <button type="submit" className="btn btn-default">
                                        {/* <FaSearch /> */}
                                    </button>
                                </div>
                            </div>

                            <form action="/seo/actions" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingTop: 0 }}>
                                    <div className="row p-0">
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
                                                        <th>Link</th>
                                                        <th>Tên trang</th>
                                                        <th>Ngôn ngữ</th>
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
                                                                    defaultValue={15}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>15</td>
                                                        <td>/mtopup</td>
                                                        <td>Nạp tiền điện thoại, topup giá rẻ</td>
                                                        <td>vi</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/seo/15/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name
                                                                    link="/seo/15"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        {/* <FaTrashAlt /> */}
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
                                                    <div className="col-md-4 pl-0">
                                                        <select name="action" className="form-control">
                                                            <option value="on">Bật đã chọn</option>
                                                            <option value="off">Tắt đã chọn</option>
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

                            {/* Modal Delete */}
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
                                                    Xóa seo meta
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
                                            <div id="deleteMes" className="modal-body">
                                                Delete : ?
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-dismiss="modal"
                                                >
                                                    Đóng
                                                </button>
                                                <button type="submit" className="btn btn-danger">
                                                    Delete
                                                </button>
                                            </div>
                                            <input type="hidden" name="_method" defaultValue="delete" />
                                            <input
                                                type="hidden"
                                                name="_token"
                                                defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                            />
                                        </form>
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

export default SEOPage;
