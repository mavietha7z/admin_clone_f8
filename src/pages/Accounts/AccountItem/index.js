import { deleteUserByType, toggleStatusUser } from '~/services/apiAuth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useSelector } from 'react-redux';
import StatusItem from '~/components/StatusItem';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import RenderDate from '~/components/RenderDate';
import ModalDelete from '~/components/ModalDelete';

const MySwal = withReactContent(Swal);

function AccountItem({ type, data }) {
    const [show, setShow] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleToggleTick = async () => {
        const result = await toggleStatusUser(currentUser.accessToken, 'tick', data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed && window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
        }
    };

    const handleAgreeDelete = async () => {
        setShow(false);

        const result = await deleteUserByType(data._id, 'uid', currentUser.accessToken);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', `Xóa ${data.name} thành công`, 'success')).isConfirmed &&
                window.location.reload();
        } else {
            MySwal.fire('Thất bại', result.message, 'error');
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
                        onClick={() => MySwal.fire('Lỗi', 'Chức năng đang được phát triển', 'error')}
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
