import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import ModalDelete from '~/components/ModalDelete';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { deleteUserByType, toggleStatusUser } from '~/services/apiAuth';

function AccountItem({ type, data }) {
    const [show, setShow] = useState(false);
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleToggleTick = async () => {
        const result = await toggleStatusUser(currentUser.accessToken, 'tick', data._id);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    const handleAgreeDelete = async () => {
        const result = await deleteUserByType(currentUser.accessToken, 'uid', data._id);

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
                    <strong>{data.username}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{data.name}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{data.email}</strong>
                </div>
            </td>

            <td>
                <div className="text-center">
                    <strong>{data.admin ? 'ADMIN' : 'USER'}</strong>
                </div>
            </td>

            <StatusItem type={type} data={data} />

            <td>
                <div className="text-center">
                    <Button variant={`${data.tick ? 'success' : 'danger'}`} size="sm" onClick={handleToggleTick}>
                        {data.tick ? 'Bật' : 'Tắt'}
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

            <ModalDelete show={show} setShow={setShow} title={data.name} onClick={handleAgreeDelete} />
        </tr>
    );
}

export default AccountItem;
