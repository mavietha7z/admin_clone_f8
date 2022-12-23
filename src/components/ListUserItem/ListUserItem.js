import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { deleteUserById } from '~/services/apiAuth';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { createAxios } from '~/redux/createInstance';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function ListUserItem({ data }) {
    const [currentUser, setCurrentUser] = useState({});
    console.log('currentUser: ', currentUser);

    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const user = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleDelete = async (id) => {
        console.log('id: ', id);
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
        <>
            <tr>
                <td>
                    <div className="text-center">
                        <strong>{data._id}</strong>
                    </div>
                </td>
                <td>
                    <div className="text-center">
                        <strong>{data.name}</strong>
                    </div>
                </td>
                <td>
                    <div className="text-center">
                        <strong>{data.username}</strong>
                        <br />
                        <strong className="text-success">{data.email}</strong>
                        <br />
                        {!!data.phone && <strong className="text-info">{data.phone}</strong>}
                    </div>
                </td>
                <td>
                    <div className="text-center">
                        <strong>{data.admin ? 'ADMIN' : 'USER'}</strong>
                    </div>
                </td>
                <td>
                    <div className="text-center">
                        <strong>{data.blog?.length}</strong>
                    </div>
                </td>
                <td>
                    <div className="text-center">
                        {data.status ? (
                            <label className="badge badge-success">Hoạt động</label>
                        ) : (
                            <label className="badge badge-danger">Bị khóa</label>
                        )}
                    </div>
                </td>
                <td>
                    <div className="text-center">{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</div>
                    <div className="text-center">{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</div>
                </td>

                <td>
                    <div className="action-buttons text-center">
                        <Link to={`/users/edit/${data._id}`} title="Chỉnh sửa thông tin thành viên">
                            <span className="btn btn-sm btn-info mr-2">
                                <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: '1.6rem' }} />
                            </span>
                        </Link>
                        <Link
                            to="#"
                            data-toggle="modal"
                            data-target="#deleteModal"
                            title="Xóa thành viên"
                            onClick={() => setCurrentUser(data)}
                        >
                            <span className="btn btn-sm btn-danger mr-2">
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </Link>
                        <Link to="/users/bell" title="Gửi thông báo đến thành viên">
                            <span className="btn btn-sm btn-warning mr-2">
                                <FontAwesomeIcon icon={faComment} />
                            </span>
                        </Link>
                        <Link to={`/users/detail/${data._id}`} title="Xem thông tin chi tiết thành viên">
                            <span className="btn btn-sm btn-success">
                                <span>Chi tiết</span>
                            </span>
                        </Link>
                    </div>
                </td>
            </tr>

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
        </>
    );
}

export default ListUserItem;
