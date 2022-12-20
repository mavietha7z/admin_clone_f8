import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Webdata() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Web data" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title float-left">Webdata Management</h2>
                                <div className="float-right" style={{ marginRight: 200 }}>
                                    <Link to="/webdata/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Add Webdata</span>
                                        </button>
                                    </Link>
                                </div>
                                <div className="card-tools">
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

                            <form action="/webdata/actions" method="POST">
                                <input
                                    type="hidden"
                                    name="_ken"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingp: 0 }}>
                                    <div className="row">
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
                                                        <th>Module</th>
                                                        <th>Type</th>
                                                        <th>Key</th>
                                                        <th>Description</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="center">
                                                            <label className="pos-rel">
                                                                <input
                                                                    type="checkbox"
                                                                    className="ace mycheckbox"
                                                                    defaultValue={38}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>Mpup</td>
                                                        <td>pup</td>
                                                        <td>MOBI_TKC</td>
                                                        <td>Mobifone TKC</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/webdata/38/edit">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="MOBI_TKC"
                                                                    link="/webdata/38"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger">
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
                                            <div className="float-right" id="dynamic-table_paginate">
                                                <ul className="pagination" role="navigation">
                                                    <li className="page-item disabled" aria-label="dafds">
                                                        <span className="page-link" aria-hidden="true">
                                                            ‹
                                                        </span>
                                                    </li>
                                                    <li className="page-item active" aria-current="page">
                                                        <span className="page-link">1</span>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="webdata?page=2">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="webdata?page=3">
                                                            3
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link
                                                            className="page-link"
                                                            to="webdata?page=2"
                                                            rel="next"
                                                            aria-label="dasdsa"
                                                        >
                                                            ›
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

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
                                    Delete Permission
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : MOBI_TKC ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Đóng
                                </button>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                            <input type="hidden" name="_method" defaultValue="delete" />
                            <input type="hidden" name="_ken" defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Webdata;
