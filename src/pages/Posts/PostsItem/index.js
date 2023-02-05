import Swal from 'sweetalert2';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';

import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import { deletePosts } from '~/services/apiBlog';
import ModalDelete from '~/components/ModalDelete';

const MySwal = withReactContent(Swal);

function PostsItem({ type, data }) {
    const [show, setShow] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleAgreeDelete = async () => {
        const result = await deletePosts(currentUser.accessToken, 'uid', data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', `Xóa ${data.metaTitle} thành công`, 'success')).isConfirmed &&
                window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
        }
    };

    return (
        <tr>
            <td>
                <div className="text-center">
                    <strong>{data.metaTitle}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{data.author?.name}</strong>
                </div>
            </td>

            <StatusItem type={type} data={data} />

            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />

            <td>
                <div className="text-center">
                    <Button
                        variant="success"
                        className="me-2"
                        size="sm"
                        onClick={() => MySwal.fire('Lỗi', 'Chức năng đang được phát triển', 'error')}
                    >
                        Chi tiết
                    </Button>
                    <Button onClick={() => setShow(true)} variant="danger" size="sm">
                        Xóa
                    </Button>
                </div>
            </td>

            <ModalDelete show={show} setShow={setShow} title={data.metaTitle} onClick={handleAgreeDelete} />
        </tr>
    );
}

export default PostsItem;
