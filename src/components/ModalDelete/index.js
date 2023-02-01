import { Button, Modal } from 'react-bootstrap';

function ModalDelete({ show, setShow, title, onClick }) {
    return (
        <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete: {title}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
                    Đóng
                </Button>
                <Button title="Hành động không thể hoàn tác" size="sm" variant="danger" onClick={onClick}>
                    Đồng ý
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;
