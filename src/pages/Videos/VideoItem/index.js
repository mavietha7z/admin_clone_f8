import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import VideoDetail from '../VideoDetail';
import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import ModalDelete from '~/components/ModalDelete';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { deleteVideo, toggleStatusVideo } from '~/services/apiVideo';

function VideoItem({ type, data }) {
    const [show, setShow] = useState(false);
    const [detailVideo, setDetailVideo] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleAgreeDelete = async () => {
        const result = await deleteVideo(currentUser.accessToken, data._id);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    const handleToggleHome = async () => {
        const result = await toggleStatusVideo(currentUser.accessToken, 'home', data._id);

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
                    <strong>{data.title}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <a
                        className="text-dark"
                        href={`https://youtu.be/${data.urlVideo}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <strong>{data.urlVideo}</strong>
                    </a>
                </div>
            </td>

            <StatusItem type={type} data={data} />

            <td>
                <div className="text-center">
                    <Button variant={`${data.homePage ? 'success' : 'danger'}`} size="sm" onClick={handleToggleHome}>
                        {data.homePage ? 'Bật' : 'Tắt'}
                    </Button>
                </div>
            </td>

            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />

            <td>
                <div className="text-center">
                    <Button variant="success" className="me-2" size="sm" onClick={() => setDetailVideo(true)}>
                        Chi tiết
                    </Button>
                    <Button onClick={() => setShow(true)} variant="danger" size="sm">
                        Xóa
                    </Button>
                </div>
            </td>

            {show && <ModalDelete show={show} setShow={setShow} title={data.title} onClick={handleAgreeDelete} />}
            {detailVideo && <VideoDetail data={data} show={detailVideo} setShow={setDetailVideo} />}
        </tr>
    );
}

export default VideoItem;
