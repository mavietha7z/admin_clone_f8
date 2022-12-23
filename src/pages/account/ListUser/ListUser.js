import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderListUser from '~/components/HeaderListUser';
import ListUserItem from '~/components/ListUserItem';

const cx = classNames.bind(styles);

function ListUser() {
    const allUser = useSelector((state) => state.module?.allUsers?.currentUsers);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Người dùng" />
                    <NavMenu
                        nameHome="Trang chủ"
                        pathHome="/users"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/users/create"
                        colorPlus="success"
                        float="float-right"
                    />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <HeaderListUser />

                            <div className="card-body" style={{ paddingTop: 10 }}>
                                <div className="row p-0">
                                    <div className="col-sm-12 table-responsive">
                                        <table className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="text-center">ID</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Họ tên</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Thông tin</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Vai trò</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Bài viết</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Trạng thái</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Ngày tạo</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Hành động</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {allUser?.slice(-10).map((user) => (
                                                    <ListUserItem key={user._id} data={user} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-5"></div>
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
                                                    <Link className="page-link" to="/users?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/users?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/users?page=4">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        to="/users?page=2"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListUser;
