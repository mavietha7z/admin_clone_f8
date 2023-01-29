import moment from 'moment';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';

import { toggleStatus } from '~/services/apiBlog';

const MySwal = withReactContent(Swal);

function ListBlogItem({ data, stt }) {
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleToggleStatus = async () => {
        const result = await toggleStatus(data._id, currentUser.accessToken);

        if (result.statusCode === 0) {
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
        <tr>
            <td>
                <div className="text-center">
                    <strong>{stt + 1}</strong>
                </div>
            </td>
            <td style={{ minWidth: 500 }}>
                <div className="text-center">
                    <strong>{data.metaTitle}</strong>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <strong>{data.author?.name}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <label className={`badge badge-${data.status ? 'success' : 'danger'}`}>
                        {data.status ? 'Bật' : 'Tắt'}
                    </label>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</strong>
                </div>
                <div className="text-center">
                    <strong>{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</strong>
                </div>
            </td>
            <td>
                <div className="text-center">
                    <span
                        title={data.status ? 'Tắt trạng thái' : 'Bật  trạng thái'}
                        className={`btn btn-sm mr-2 btn-${data.status ? 'danger' : 'success'}`}
                        onClick={handleToggleStatus}
                    >
                        {data.status ? 'Tắt' : 'Bật'}
                    </span>

                    <span className="btn btn-success btn-sm" title="Xem chi tiết">
                        <Link to={`/post/detail/${data._id}`}>
                            <span className="text-white">Chi tiết</span>
                        </Link>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListBlogItem;
