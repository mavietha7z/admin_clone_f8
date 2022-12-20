import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Powers() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý quyền hạn" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right" style={{ marginRight: 200 }}>
                                    <Link to="/powers/create">
                                        <button className="btn btn-success">
                                            <FaPlusCircle />
                                            <span>Thêm quyền</span>
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="card-tools d-flex"
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
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>

                            <form action="/powers/actions" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingTop: 0 }}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Tên</th>
                                                        <th>Mô tả</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>list</td>
                                                        <td>Quyền xem danh sách</td>
                                                        <td>2018-06-20 05:14:46</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/1/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="list"
                                                                    link="/powers/1"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>create</td>
                                                        <td>Quyền tạo mới</td>
                                                        <td>2018-06-20 05:14:46</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/2/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="create"
                                                                    link="/powers/2"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>edit</td>
                                                        <td>Quyền sửa</td>
                                                        <td>2018-06-20 05:14:46</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/3/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="edit"
                                                                    link="/powers/3"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>delete</td>
                                                        <td>Quyền xóa dữ liệu</td>
                                                        <td>2018-06-20 05:14:46</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/4/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="delete"
                                                                    link="/powers/4"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>view</td>
                                                        <td>Quyền được xem chi tiết bản ghi nào đó</td>
                                                        <td>2019-08-28 03:54:33</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/12/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="view"
                                                                    link="/powers/12"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>viewstats</td>
                                                        <td>Quyền xem thống kê</td>
                                                        <td>2019-08-28 04:17:22</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/13/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="viewstats"
                                                                    link="/powers/13"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>user</td>
                                                        <td>Quyền của khách hàng</td>
                                                        <td>2019-08-28 11:49:22</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/14/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="user"
                                                                    link="/powers/14"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>addfund</td>
                                                        <td>Quyền được nạp tiền cho khách hàng</td>
                                                        <td>2019-08-28 13:22:21</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/15/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="addfund"
                                                                    link="/powers/15"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>withdrawfund</td>
                                                        <td>Quyền rút tiền của khách hàng</td>
                                                        <td>2019-08-28 13:32:13</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/16/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="withdrawfund"
                                                                    link="/powers/16"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>addstockcard</td>
                                                        <td>Quyền nhập thẻ vào kho</td>
                                                        <td>2020-05-26 08:16:37</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/powers/19/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="addstockcard"
                                                                    link="/powers/19"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-danger btn-sm">
                                                                        <FaTrashAlt />
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
                                        <div className="col-sm-12">
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
                                                        <Link className="page-link" to="powers?page=2">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link
                                                            className="page-link"
                                                            to="powers?page=2"
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

            {/* Modal Delete*/}
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
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Delete Permission
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : list ?
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
    );
}

export default Powers;
