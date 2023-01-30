import { Button, Modal, Table } from 'react-bootstrap';
import HeadingTable from '../HeadingTable';

function ModalDetail({ data, show, setShow }) {
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)} aria-labelledby="modal-styling">
            <Modal.Header closeButton>
                <Modal.Title id="modal-styling">{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered>
                    <HeadingTable
                        headings={[
                            { title: 'Sắp có' },
                            { title: 'Giá hiện tại' },
                            { title: 'Giá cũ' },
                            { title: 'Giá đặt trước' },
                            { title: 'Sự ưu tiên' },
                            { title: 'Phát hành' },
                            { title: 'Slug' },
                            { title: 'URL video' },
                        ]}
                    />

                    <tbody>
                        <tr>
                            <td className="text-center">{data.comingSoon ? 'Sắp có' : 'Không'}</td>
                            <td className="text-center">{data.price.toLocaleString()}đ</td>
                            <td className="text-center">{data.oldPrice.toLocaleString()}đ</td>
                            <td className="text-center">{data.preOrderPrice.toLocaleString()}đ</td>
                            <td className="text-center">{data.priority}</td>
                            <td className="text-center">{data.published ? 'Đã phát hành' : 'Chưa phát hành'}</td>
                            <td className="text-center">{data.slug}</td>
                            <td className="text-center">
                                <a href={`https://youtu.be/${data.video}`}>{data.video}</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Button className="float-end" size="sm">
                    Sửa
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default ModalDetail;
