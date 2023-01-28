import Swal from 'sweetalert2';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Title from '~/components/Title';
import NavMenu from '~/components/NavMenu';
import { getUserByType } from '~/services/apiAuth';
import ListUserItem from '~/components/ListUserItem';
import HeaderListUser from '~/components/HeaderListUser';

import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

const MySwal = withReactContent(Swal);

function ListUser() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const page = new URLSearchParams(location.search).get('page');

    useEffect(() => {
        if (!page) {
            navigate(`${location.pathname}?page=1`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        if (currentUser) {
            if (page) {
                const fetchApi = async () => {
                    const result = await getUserByType(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setUsers(result.data);
                        setTotalPages(result.totalPages);
                    } else {
                        MySwal.fire('Lỗi', `${result.message || 'Lỗi lấy dữ liệu người dùng'}`, 'error');
                    }
                };
                fetchApi();
            }
        } else {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

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
                                                        <div className="text-center">Username</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Họ tên</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Email</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Vai trò</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Trạng thái</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Tick</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Ngày tạo / cập nhật</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Hành động</div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {users.map((user) => (
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
                                                <li className="page-item disabled">
                                                    <span className="page-link">‹</span>
                                                </li>

                                                <li className="page-item">
                                                    <Link className="page-link" to="/users?page=1">
                                                        1
                                                    </Link>
                                                </li>

                                                <li className="page-item">
                                                    <Link className="page-link">›</Link>
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
