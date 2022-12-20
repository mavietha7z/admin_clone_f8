import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Group() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Group management" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right" style={{ marginRight: 200 }}>
                                    <Link to="/groups/create">
                                        <button className="btn btn-success">
                                            <FaPlusCircle />
                                            <span>Add Groups</span>
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

                            <form action="/groups/actions" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingTop: 0 }}>
                                    <div className="row table-responsive p-0">
                                        <div className="col-sm-12 pr-0">
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
                                                        <th>Tên</th>
                                                        <th>Mô tả</th>
                                                        <th>Trạng thái</th>
                                                        <th>Ẩn</th>
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
                                                                    defaultValue={4}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>VIP/API</td>
                                                        <td>VIP/API</td>
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
                                                        <td>2022-02-13 10:40:29</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/groups/4/edit">
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="VIP/API"
                                                                    link="/groups/4"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger">
                                                                        <FaTrashAlt />
                                                                    </span>
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
                                                        <td>THÀNH VIÊN</td>
                                                        <td>THÀNH VIÊN</td>
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
                                                        <td>2018-07-24 17:08:23</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/groups/2/edit">
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaPen />
                                                                    </span>
                                                                </Link>

                                                                <Link
                                                                    to="#"
                                                                    name="THÀNH VIÊN"
                                                                    link="/groups/2"
                                                                    className="deleteClick red id-btn-dialog2"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                >
                                                                    <span className="btn btn-sm btn-danger">
                                                                        <FaTrashAlt />
                                                                    </span>
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
                                                        <td>Guest</td>
                                                        <td>Không phải thành viên</td>
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
                                                        <td>2018-07-24 17:08:28</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/groups/1/edit">
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FaPen />
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
                                                            <option value="status_on">Bật được chọn</option>
                                                            <option value="status_off">Tắt được chọn</option>
                                                            <option value="delete">Xóa đã chọn</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn btn-warning">
                                                            <FaCheckCircle />
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
                                    Delete Group
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : VIP/API ?
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

export default Group;
