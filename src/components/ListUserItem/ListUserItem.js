import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

function ListUserItem({ data }) {
    return (
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
                    <strong>{data.myBlogs?.length}</strong>
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
                    <Link to="#" data-toggle="modal" data-target="#deleteModal" title="Xóa thành viên">
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
    );
}

export default ListUserItem;
