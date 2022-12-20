import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function NewsCat() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh mục news" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <h3 className="card-title">List</h3>
                                <div className="float-right" style={{ marginRight: 350 }}>
                                    <Link to="/news_cat/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Thêm mới</span>
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
                                                    <option value="name">Theo tên</option>
                                                    <option value="id">Theo ID</option>
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
                            {/* /.card-header */}
                            <form action="/news_cat/actions" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                />
                                <div className="card-body" style={{ paddingTop: 0 }}>
                                    <div className="row">
                                        <div className="col-sm-12 table-responsive">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped dataTable"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Tên</th>
                                                        <th>Slug</th>
                                                        <th>Danh mục cha</th>
                                                        <th>Trạng thái</th>
                                                        <th>Sắp xếp</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong> Tin khuyến mãi</strong>
                                                        </td>
                                                        <td>tin-khuyen-mai</td>
                                                        <td></td>
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
                                                        <td>0</td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to="/news_cat/2/edit">
                                                                    <span className="btn btn-warning btn-sm mr-2">
                                                                        {/* <FaPen /> */}
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    name="Tin khuyến mãi"
                                                                    link="/news_cat/2"
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal delete */}
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
                                Delete : Tin khuyến mãi ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
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

export default NewsCat;
