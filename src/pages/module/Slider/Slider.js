import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Trình diễn ảnh" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Sliders List</h2>
                                <div className="float-right" style={{ marginRight: 350 }}>
                                    <Link to="/sliders/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Add New Slider</span>
                                        </button>
                                    </Link>
                                </div>
                                <div
                                    className="card-tools"
                                    style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                                >
                                    <div className="input-group dataTables_filter" style={{ width: 350 }}>
                                        <form action name="formSearch" method="GET">
                                            <div className="input-group">
                                                <select name="type" className="form-control">
                                                    <option value>-- Search Type --</option>
                                                    <option value="slider_name">By Name</option>
                                                    <option value="slider_text">By Text</option>
                                                    <option value="status">
                                                        By Status (0 is Inactive/1 is Active)
                                                    </option>
                                                </select>
                                                <input
                                                    type="text"
                                                    name="keyword"
                                                    className="form-control"
                                                    placeholder="Search"
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

                            <form action="/sliders" method="POST">
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
                                                        <th>Slider Name</th>
                                                        <th>Slider Text</th>
                                                        <th>Sort Order</th>
                                                        <th>Ngôn ngữ</th>
                                                        <th>Status</th>
                                                        <th>App</th>
                                                        <th>Created Date</th>
                                                        <th>Updated Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={9} className="text-center alert alert-info">
                                                            Chưa có dữ liệu
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
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Delete Slider
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div id="deleteMes" className="modal-body"></div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
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

export default Slider;
