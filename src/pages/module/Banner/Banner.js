import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Trao đổi Banner" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h2 className="card-title">Danh sách</h2>
                                <div className="float-right" style={{ marginRight: 200 }}>
                                    <Link to="/banners/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Thêm Banner</span>
                                        </button>
                                    </Link>
                                </div>
                                <div className="card-tools ">
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

                            <form action="/banners/actions" method="POST">
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
                                                        <th className="center sorting_disabled" rowSpan={1} colSpan={1}>
                                                            <label className="pos-rel">
                                                                <input type="checkbox" className="ace" id="checkall" />
                                                                <span className="lbl" />
                                                            </label>
                                                        </th>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Image</th>
                                                        <th>URL</th>
                                                        <th>Description</th>
                                                        <th>Created</th>
                                                        <th>Status</th>
                                                        <th>Sort</th>
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
                                                                    defaultValue={1}
                                                                    name="check[]"
                                                                />
                                                                <span className="lbl" />
                                                            </label>
                                                        </td>
                                                        <td>1</td>
                                                        <td>Công ty nencer</td>
                                                        <td>
                                                            <img
                                                                src="https://thenhanh.vn/storage/userfiles/images/1539191180873464-logo-1715-en.png"
                                                                width="50px"
                                                                alt=""
                                                            />
                                                        </td>
                                                        <td>https://www.nencer.com</td>
                                                        <td>Thiết kế web</td>
                                                        <td>2018-10-18 07:39:33</td>
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
                                                        <td>1</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/banners/1/edit">
                                                                    <span className="btn btn-info btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>

                                                                <Link
                                                                    to="#"
                                                                    name="Công ty nencer"
                                                                    link="/banners/1"
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
                                                    <div className="col-md-4">
                                                        <select name="action" className="form-control">
                                                            <option value />
                                                            <option value="on">Bật đã chọn</option>
                                                            <option value="off">Tắt đã chọn</option>
                                                            <option value="delete">Xóa đã chọn</option>
                                                        </select>
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
                                    Delete Product
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div id="deleteMes" className="modal-body">
                                Delete : Công ty nencer ?
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

export default Banner;
