import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';

import StatusItem from '~/components/StatusItem';
import RenderDate from '~/components/RenderDate';
import ModalDelete from '~/components/ModalDelete';
import LearningPathDetail from '../LearningPathDetail';
import { deleteLearningPath } from '~/services/apiLearning';
import { mySwalError, mySwalSuccess } from '~/configs/alert';

function LearningPathItem({ type, data }) {
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleDelete = async () => {
        const result = await deleteLearningPath(currentUser.accessToken, data._id);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    return (
        <tr>
            <td className="text-center">
                <strong>{data.title}</strong>
            </td>
            <td>
                <Card style={{ width: '18rem', height: '12rem', margin: '0 auto' }}>
                    <Card.Img src={data.image} alt={data.title} style={{ height: '100%' }} />
                </Card>
            </td>
            <td style={{ maxWidth: 700 }}>{data.description}</td>

            <StatusItem type={type} data={data} />

            <RenderDate createdAt={data.createdAt} updatedAt={data.updatedAt} />

            <td>
                <div className="text-center">
                    <Button variant="success" className="me-2" size="sm" onClick={() => setDetail(true)}>
                        Chi tiết
                    </Button>
                    <Button onClick={() => setShow(true)} variant="danger" size="sm">
                        Xóa
                    </Button>
                </div>
            </td>

            {detail && <LearningPathDetail show={detail} setShow={setDetail} data={data} />}
            {show && <ModalDelete show={show} setShow={setShow} title={data.title} onClick={handleDelete} />}
        </tr>
    );
}

export default LearningPathItem;
