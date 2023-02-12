import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Form, Button, Card } from 'react-bootstrap';

import { createLearningPath } from '~/services/apiLearning';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { loadingStart, loadingSuccess } from '~/redux/reducer/authReducer';

function FormLearningPath() {
    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState(1);
    const [description, setDescription] = useState('');

    const imageRef = useRef();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview);
        };
    }, [image]);

    const handleOnChangeImage = (e) => {
        let file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setImage(file);
    };

    const handleCreateLearningPath = async () => {
        if (!title || !slug || !priority || !content || !description || !image) {
            mySwalError('error', 'Vui lòng nhập đầy đủ thông tin');
            return;
        } else {
            dispatch(loadingStart());
            let formData = new FormData();
            formData.append('title', title);
            formData.append('slug', slug);
            formData.append('priority', priority);
            formData.append('content', content);
            formData.append('description', description);
            formData.append('image', image);

            const result = await createLearningPath(currentUser.accessToken, formData);
            dispatch(loadingSuccess());
            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        }
    };

    return (
        <Form className="p-5">
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên lộ trình:</Form.Label>
                        <Form.Control
                            placeholder="Nhập tên lộ trình"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Slug:</Form.Label>
                        <Form.Control
                            placeholder="Vd: back-end-development"
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sự ưu tiên:</Form.Label>
                        <Form.Control
                            placeholder="Nhập độ ưu tiên"
                            type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nội dung:</Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ height: 100 }}
                            placeholder="Nhập nội dung lộ trình"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mô tả:</Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ height: 100 }}
                            placeholder="Nhập mô tả lộ trình"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Ảnh:</Form.Label>

                        <div className="float-end mb-3">
                            <Button variant="secondary" size="sm" onClick={() => imageRef.current.click()}>
                                Chọn ảnh
                            </Button>
                        </div>
                        <input type="file" ref={imageRef} onChange={handleOnChangeImage} hidden />

                        {image && (
                            <Card.Img src={image.preview} alt="Image Preview" style={{ border: '1px solid #9999' }} />
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="success" className="float-end my-5" onClick={handleCreateLearningPath}>
                Thêm lộ trình
            </Button>
        </Form>
    );
}

export default FormLearningPath;
