import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';

import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import ModalDelete from '~/components/ModalDelete';
import { deleteSlideshow } from '~/services/slideshow';
import { mySwalError, mySwalSuccess } from '~/configs/alert';

function SlideshowItem({ type, data }) {
    const [show, setShow] = useState(false);
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleAgreeDelete = async () => {
        const result = await deleteSlideshow(currentUser.accessToken, data._id);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    return (
        <tr>
            <td style={{ maxWidth: 360 }}>
                <div className="text-center">
                    <strong>{data.title}</strong>
                </div>
            </td>

            {type === 'account' && (
                <td>
                    <div className="text-center">
                        <strong>{data.name}</strong>
                    </div>
                </td>
            )}

            <td>
                <div className="text-center">
                    <Card style={{ width: '18rem', margin: '0 auto' }}>
                        <Card.Img src={data.image} />
                    </Card>
                </div>
            </td>

            <td>
                <div className="text-center" style={{ maxWidth: 700 }}>
                    {data.description}
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
                        onClick={() => mySwalError('error', 'Chức năng này đang được phát triển')}
                    >
                        Chi tiết
                    </Button>
                    <Button onClick={() => setShow(true)} variant="danger" size="sm">
                        Xóa
                    </Button>
                </div>
            </td>

            {show && <ModalDelete show={show} setShow={setShow} title={data.title} onClick={handleAgreeDelete} />}
        </tr>
    );
}

export default SlideshowItem;
