import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RenderDate from '~/components/RenderDate';
import StatusItem from '~/components/StatusItem';
import { deleteSlideshow } from '~/services/slideshow';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import ModalDelete from '~/components/ModalDelete';

const MySwal = withReactContent(Swal);

function SlideshowItem({ type, data }) {
    const [show, setShow] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleAgreeDelete = async () => {
        const result = await deleteSlideshow(currentUser.accessToken, data._id);

        if (result.statusCode === 0) {
            (await MySwal.fire('Thành công', `Xóa ${data.title} thành công`, 'success')).isConfirmed &&
                window.location.reload();
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
                        onClick={() => MySwal.fire('Lỗi', 'Chức năng này đang được phát triển', 'error')}
                    >
                        Chi tiết
                    </Button>
                    <Button onClick={() => setShow(true)} variant="danger" size="sm">
                        Xóa
                    </Button>
                </div>
            </td>

            <ModalDelete show={show} setShow={setShow} title={data.title} onClick={handleAgreeDelete} />
        </tr>
    );
}

export default SlideshowItem;
