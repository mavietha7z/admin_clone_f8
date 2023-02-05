import Swal from 'sweetalert2';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import withReactContent from 'sweetalert2-react-content';

import { createGroupLearningPath } from '~/services/apiLearning';

const MySwal = withReactContent(Swal);

function FormRouteGroup({ learningPath }) {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState(null);

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(1);
    const [description, setDescription] = useState('');

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        const option = learningPath.map((learning) => ({
            label: learning.title,
            id: learning._id,
        }));

        setOptions(option);
    }, [learningPath]);

    const handleCreateGroup = async () => {
        if (!selected || !title || !priority || !description) {
            MySwal.fire('Lỗi', 'Vui lòng nhập đầy đủ thông tin', 'error');
            return;
        } else {
            const group = {
                title,
                priority,
                description,
            };

            const result = await createGroupLearningPath(currentUser.accessToken, group, selected.id);

            if (result.statusCode === 0) {
                (await MySwal.fire('Thành công', result.message, 'success')).isConfirmed && window.location.reload();
            } else {
                MySwal.fire('Lỗi', result.message, 'error');
            }
        }
    };

    return (
        <Form className="p-5">
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Chọn lộ trình cần thêm nhóm:</Form.Label>
                        <Select
                            value={selected}
                            onChange={setSelected}
                            options={options}
                            className="col-12 p-0"
                            placeholder="Chọn lộ trình"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tên nhóm:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên nhóm"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sự ưu tiên:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập sự ưu tiên"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Mô tả:</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            placeholder="Nhập mô tả"
                            style={{ height: 100 }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="success" className="float-end my-5" onClick={handleCreateGroup}>
                Thêm nhóm
            </Button>
        </Form>
    );
}

export default FormRouteGroup;
