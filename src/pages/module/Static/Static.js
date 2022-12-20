import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Static() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Quản lý trang tĩnh" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right" style={{ marginRight: 350 }}>
                                    <Link to="/pages/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Thêm mới</span>
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="card-tools d-flex"
                                    style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                                >
                                    <div
                                        className="input-group input-group-sm dataTables_filter"
                                        style={{ width: 350 }}
                                    >
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="type" className="form-control">
                                                    <option value>--Chọn loại--</option>
                                                    <option value="title">Theo tên</option>
                                                    <option value="author">Theo tác giả</option>
                                                    <option value="language">Theo ngôn ngữ</option>
                                                    <option value="status">
                                                        By Status (0 is Inactive/1 is Active)
                                                    </option>
                                                </select>
                                                <input
                                                    type="text"
                                                    name="keyword"
                                                    className="form-control"
                                                    placeholder="Search"
                                                    defaultValue=""
                                                />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        {/* <FaSearch /> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <form action="/page/action" method="POST">
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
                                                        <th>Tiêu đề</th>
                                                        <th>Ngôn ngữ</th>
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
                                                                    defaultValue={2}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>2</td>
                                                        <td>
                                                            <Link
                                                                to="/post/ban-the-game-the-dien-thoai-doi-the-cao-nap-cuoc.html"
                                                                target="_blank"
                                                            >
                                                                Bán thẻ game, thẻ điện thoại, đổi thẻ cào, nạp cước
                                                            </Link>
                                                        </td>
                                                        <td>vi</td>
                                                        <td>
                                                            <label className="badge badge-success">Đang bật</label>
                                                        </td>
                                                        <td>2020-05-11 14:49:22</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/pages/2/edit">
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Bán thẻ game, thẻ điện thoại, đổi thẻ cào, nạp cước"
                                                                    link="/pages/2"
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
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form id="deleteForm" action method="POST">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">
                                    Delete Static
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : Bán thẻ game, thẻ điện thoại, đổi thẻ cào, nạp cước ?
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

export default Static;
