import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Role() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý vai trò" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right" style={{ marginRight: 200 }}>
                                    <Link to="/roles/create">
                                        <button className="btn btn-success">
                                            <FaPlusCircle />
                                            <span>Thêm vai trò</span>
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

                            <form action="/roles" method="POST">
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
                                                        <th>Quyền</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>SALES</td>
                                                        <td>
                                                            Vai trò là người bán hàng, được quản lý danh sách và sửa
                                                        </td>
                                                        <td>
                                                            list, create, view, addstockcard, deletestockcard,
                                                            deletesoftcard, listsoftcard, listcharging, deletecharging,
                                                            resetcharging
                                                        </td>
                                                        <td>2019-08-28 02:18:00</td>
                                                        <td>
                                                            <Link to="/roles/7/edit">
                                                                <span className="btn btn-info btn-sm mr-2">
                                                                    <FaPen />
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                name="SALES"
                                                                link="/roles/7"
                                                                className="deleteClick red id-btn-dialog2"
                                                                data-toggle="modal"
                                                                data-target="#deleteModal"
                                                            >
                                                                <span className="btn btn-danger btn-sm">
                                                                    <FaTrashAlt />
                                                                </span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>USER</td>
                                                        <td>Thành viên</td>
                                                        <td>user</td>
                                                        <td>2018-06-29 14:57:15</td>
                                                        <td>
                                                            <Link to="/roles/5/edit">
                                                                <span className="btn btn-info btn-sm mr-2">
                                                                    <FaPen />
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                name="USER"
                                                                link="/roles/5"
                                                                className="deleteClick red id-btn-dialog2"
                                                                data-toggle="modal"
                                                                data-target="#deleteModal"
                                                            >
                                                                <span className="btn btn-danger btn-sm">
                                                                    <FaTrashAlt />
                                                                </span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>SUPER_ADMIN</td>
                                                        <td>Admin tổng có tất cả các quyền</td>
                                                        <td>
                                                            list, create, edit, delete, view, viewstats, user, addfund,
                                                            withdrawfund, addstockcard, deletestockcard, deletesoftcard,
                                                            listsoftcard, listcharging, deletecharging, resetcharging,
                                                            index_newscontroller
                                                        </td>
                                                        <td>2018-06-19 13:00:00</td>
                                                        <td>
                                                            <Link to="/roles/3/edit">
                                                                <span className="btn btn-info btn-sm mr-2">
                                                                    <FaPen />
                                                                </span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>BACKEND</td>
                                                        <td>Quản trị hệ thống, có quyền backend</td>
                                                        <td>list, edit, view</td>
                                                        <td>2018-06-19 13:00:00</td>
                                                        <td>
                                                            <Link to="/roles/2/edit">
                                                                <span className="btn btn-info btn-sm mr-2">
                                                                    <FaPen />
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                name="BACKEND"
                                                                link="/roles/2"
                                                                className="deleteClick red id-btn-dialog2"
                                                                data-toggle="modal"
                                                                data-target="#deleteModal"
                                                            >
                                                                <span className="btn btn-danger btn-sm">
                                                                    <FaTrashAlt />
                                                                </span>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="float-right" id="dynamic-table_paginate"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {/* Delete form */}
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
                                                Delete : SALES ?
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

export default Role;
