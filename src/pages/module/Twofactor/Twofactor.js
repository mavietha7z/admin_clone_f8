import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Twofactor() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý xác thực" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Lịch sử xác thực</h2>
                                <div className="float-right">
                                    <Link to="/twofactor/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Tạo 2FA Admin</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <form action="/tagslist" method="POST">
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
                                                        <th>Mô-đun</th>
                                                        <th>Hình thức</th>
                                                        <th>Thành viên</th>
                                                        <th>Mã xác nhận</th>
                                                        <th>Cookie</th>
                                                        <th>Mã đơn</th>
                                                        <th>Ngày tạo</th>
                                                        <th>Hết hạn</th>
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
                                                                    defaultValue={92}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>92</td>
                                                        <td>AdminLogin</td>
                                                        <td>Email</td>
                                                        <td>
                                                            ID:1 ---
                                                            <Link to="/users?type=id&keyword=1" target="_blank">
                                                                Xem
                                                            </Link>
                                                            <br />
                                                            Admin
                                                            <br />
                                                            support@thenhanh.vn
                                                            <br />
                                                            0999999999
                                                        </td>
                                                        <td>984367</td>
                                                        <td>60346960448ea</td>
                                                        <td>4f7fbc8f5ab0d9c35b6ee0a767041f28ca96f555</td>
                                                        <td>2021-02-23 16:33:13</td>
                                                        <td>2021-02-23 16:43:13</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link
                                                                    to="#"
                                                                    name
                                                                    itemID={92}
                                                                    link="/twofactor/delete/92"
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
                style={{ display: 'none' }}
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form id="deleteForm" action="/twofactor/delete/92" method="GET">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">
                                    Delete Tag
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : ?
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

export default Twofactor;
