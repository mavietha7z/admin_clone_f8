import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBolt,
    faClock,
    faComment,
    faMagnifyingGlass,
    faPenToSquare,
    faTrash,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserById } from '~/services/apiAuth';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { createAxios } from '~/redux/createInstance';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const cx = classNames.bind(styles);

function ListUser() {
    const [status, setStatus] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const user = useSelector((state) => state.auth.login.currentUser);

    const allUser = useSelector((state) => state.users?.getAllUsers?.data);
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    const handleDelete = async (id) => {
        const result = await deleteUserById(id, axiosJWT, user.accessToken);
        if (result.errCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                if (res.isConfirmed) {
                    window.location.reload();
                }
            });
        } else {
            MySwal.fire('Lỗi', `${result.message}`, 'error');
        }
    };

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
                            <div className="card-header" style={{ borderBottom: 0 }}>
                                <div className="float-left">
                                    <Link to="/users/logout/all" className="text-danger">
                                        <FontAwesomeIcon icon={faBolt} />
                                        <span>Logout tất cả</span>
                                    </Link>
                                </div>

                                <div className="float-right">
                                    <div className="card-tools ">
                                        <div className="input-group input-group-sm dataTables_filter">
                                            <div className="float-left" style={{ marginRight: 10 }}>
                                                <Link to="/users?role=">
                                                    <button className="btn btn-info">
                                                        <FontAwesomeIcon icon={faClock} />
                                                        <span>Chờ xác thực</span>
                                                    </button>
                                                </Link>
                                                <Link to="/users?role=&group_user=&status=status0&type=&keyword=">
                                                    <button className="btn btn-dark ml-3">
                                                        <FontAwesomeIcon icon={faUsers} />
                                                        <span>Bị khóa</span>
                                                    </button>
                                                </Link>
                                            </div>

                                            <div className="float-right">
                                                <div className="input-group">
                                                    <select name="status" className="form-control">
                                                        <option>-- Trạng thái --</option>
                                                        <option value="status1">Hoạt động</option>
                                                        <option value="status0">Bị khóa</option>
                                                        <option value="verifydoc">Chờ xác thực</option>
                                                    </select>

                                                    <select name="type" className="form-control">
                                                        <option> -- Theo --</option>
                                                        <option value="id">Mã ID</option>
                                                        <option value="email">E-mail</option>
                                                        <option value="phone">Số điện thoại</option>
                                                        <option value="username">Tên đăng nhập</option>
                                                        <option value="name">Họ tên</option>
                                                    </select>

                                                    <input
                                                        type="text"
                                                        name="keyword"
                                                        className="form-control"
                                                        placeholder="Nhập từ khóa"
                                                    />
                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-warning">
                                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                                                    <tr key={user._id}>
                                                        <td>
                                                            <div className="text-center">
                                                                <strong>{user._id}</strong>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <strong>{user.name}</strong>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <strong>{user.username}</strong>
                                                                <br />
                                                                <strong className="text-success">{user.email}</strong>
                                                                <br />
                                                                {!!user.phone && (
                                                                    <strong className="text-info">0369574322</strong>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <strong>{user.admin ? 'ADMIN' : 'USER'}</strong>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <strong>{user.blog?.length}</strong>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
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
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">{user.createdAt}</div>
                                                        </td>

                                                        <td>
                                                            <div className="action-buttons text-center">
                                                                <Link
                                                                    to={`/users/edit/${user._id}`}
                                                                    title="Chỉnh sửa thông tin thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-info mr-2">
                                                                        <FontAwesomeIcon
                                                                            icon={faPenToSquare}
                                                                            style={{ fontSize: '1.6rem' }}
                                                                        />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    data-toggle="modal"
                                                                    data-target="#deleteModal"
                                                                    title="Xóa thành viên"
                                                                    onClick={() => setCurrentUser(user)}
                                                                >
                                                                    <span className="btn btn-sm btn-danger mr-2">
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/users/bell"
                                                                    title="Gửi thông báo đến thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-warning mr-2">
                                                                        <FontAwesomeIcon icon={faComment} />
                                                                    </span>
                                                                </Link>
                                                                <Link
                                                                    to="/users/detail"
                                                                    title="Xem thông tin chi tiết thành viên"
                                                                >
                                                                    <span className="btn btn-sm btn-success">
                                                                        <span>Chi tiết</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
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
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">
                                Delete User
                            </h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Delete : {currentUser.name}?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Đóng
                            </button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() => handleDelete(currentUser._id)}
                                data-dismiss="modal"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListUser;
