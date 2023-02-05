import Swal from 'sweetalert2';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';

import VideoDetail from '../VideoDetail';
import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import ModalDelete from '~/components/ModalDelete';
import { deleteVideo, toggleStatusVideo } from '~/services/apiVideo';

const MySwal = withReactContent(Swal);

function VideoItem({ type, data }) {
    const [show, setShow] = useState(false);
    const [detailVideo, setDetailVideo] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleAgreeDelete = async () => {
        const result = await deleteVideo(currentUser.accessToken, null, data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', `Xóa ${data.title} thành công`, 'success')).isConfirmed &&
                window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
        }
    };

    const handleToggleHome = async () => {
        const result = await toggleStatusVideo(currentUser.accessToken, 'home', data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed && window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
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

            <ModalDelete show={show} setShow={setShow} title={data.title} onClick={handleAgreeDelete} />

            {detailVideo && <VideoDetail data={data} show={detailVideo} setShow={setDetailVideo} />}
        </tr>
    );
}

export default VideoItem;
