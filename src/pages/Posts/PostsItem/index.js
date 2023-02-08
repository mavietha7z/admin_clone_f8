import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import ModalDelete from '~/components/ModalDelete';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { deletePosts, toggleStatusPosts } from '~/services/apiBlog';

function PostsItem({ type, data }) {
    const [show, setShow] = useState(false);
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleAgreeDelete = async () => {
        const result = await deletePosts(currentUser.accessToken, 'uid', data._id);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    const handleToggleHome = async () => {
        const result = await toggleStatusPosts(currentUser.accessToken, 'home', data._id);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
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

            <td>
                <div className="text-center">
                    <Button
                        variant={`${data.homePage ? 'success' : 'danger'}`}
                        size="sm"
                        onClick={handleToggleHome}
                        title={`${data.homePage ? 'Tắt' : 'Bật'} trạng thái`}
                    >
                        {data.homePage ? 'Bật' : 'Tắt'}
                    </Button>
                </div>
            </td>

            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />

            <td>
                <div className="text-center">
                    <Button
                        variant="success"
                        className="me-2"
                        size="sm"
                        onClick={() => mySwalError('error', 'Chức năng đang được phát triển')}
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
