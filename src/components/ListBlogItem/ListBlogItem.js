import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserById } from '~/services/apiAuth';
import moment from 'moment';
import { handleToggleStatus } from '~/services/apiBlog';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ListBlogItem({ data }) {
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();

    const MySwal = withReactContent(Swal);
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    useEffect(() => {
        const fetchApi = async () => {
            const author = await getUserById(data.author._id);

            setAuthor(author?.name);
        };
        fetchApi();
    }, [data.author._id]);

    const handleToggleStatusBlog = async (status) => {
        const result = await handleToggleStatus(data._id, status, currentUser.accessToken, axiosJWT);
        console.log('result: ', result);

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
        <tr>
            <td style={{ minWidth: 600 }}>
                <div className="text-center">{data.title}</div>
            </td>
            <td>
                <div className="text-center">
                    <strong>{author}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    {data.status ? (
                        <label className="badge badge-success">Bật</label>
                    ) : (
                        <label className="badge badge-danger">Tắt</label>
                    )}
                </div>
            </td>

            <td>
                <div className="text-center">{moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</div>
                <div className="text-center">{moment(data.updatedAt).format('DD/MM/YYYY - hh:mm')}</div>
            </td>
            <td>
                <div className="text-center">
                    {data.status ? (
                        <span
                            title="Bật trạng thái"
                            className="btn btn-danger btn-sm mr-2"
                            onClick={() => handleToggleStatusBlog(false)}
                        >
                            Tắt
                        </span>
                    ) : (
                        <span
                            title="Tắt trạng thái"
                            className="btn btn-success btn-sm mr-2"
                            onClick={() => handleToggleStatusBlog(true)}
                        >
                            Bật
                        </span>
                    )}

                    <span className="btn btn-success btn-sm" title="Xem chi tiết">
                        <Link to={`/course/detail/${data._id}`}>
                            <span className="text-white">Chi tiết</span>
                        </Link>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default ListBlogItem;
