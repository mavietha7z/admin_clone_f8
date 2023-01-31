import { Modal, Tab, Tabs } from 'react-bootstrap';
import FormCreateCourse from '../FormCreateCourse';

function ModalCreateCourse({ show, setShow }) {
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)} aria-labelledby="modal-styling">
            <Modal.Header closeButton style={{ borderBottom: 'none' }}>
                <Modal.Title id="modal-styling">
                    <h2>Thêm mới khóa học</h2>
                </Modal.Title>
            </Modal.Header>

            <Tabs defaultActiveKey="free" id="uncontrolled" className="mb-3 px-5">
                <Tab eventKey="free" title="Thêm khóa học Free">
                    <FormCreateCourse type="free" />
                </Tab>
                <Tab eventKey="pro" title="Thêm khóa học Pro">
                    <FormCreateCourse type="pro" />
                </Tab>
            </Tabs>
        </Modal>
    );
}

export default ModalCreateCourse;
