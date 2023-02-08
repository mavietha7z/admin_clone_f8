import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';

import { createSlideshow } from '~/services/slideshow';
import { mySwalError, mySwalSuccess } from '~/configs/alert';

function CreateSlide({ show, setShow }) {
    const [link, setLink] = useState('');
    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [textBtn, setTextBtn] = useState('');
    const [background, setBackground] = useState('');
    const [description, setDescription] = useState('');

    const inputRef = useRef();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleChangeImage = (e) => {
        let file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setImage(file);
    };

    const handleCreateSlide = async () => {
        if (!title || !image || !textBtn || !link || !color || !background || !description) {
            mySwalError('error', 'Vui lòng điền đầy đủ thông tin');
            return;
        }

        let formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('textBtn', textBtn);
        formData.append('link', link);
        formData.append('color', color);
        formData.append('background', background);
        formData.append('description', description);

        const result = await createSlideshow(currentUser.accessToken, formData);

        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header>
                <Modal.Title>Create new slideshow</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title slide</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Title slide"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Button size="sm" className="mb-3" variant="success" onClick={() => inputRef.current.click()}>
                            Choose photo
                        </Button>

                        <input ref={inputRef} onChange={handleChangeImage} type="file" hidden />
                        {image && <Card.Img src={image.preview} alt="Preview" style={{ border: '1px solid #9999' }} />}
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Text button</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Text button"
                                value={textBtn}
                                onChange={(e) => setTextBtn(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Url</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Url"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="#fff"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Background</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))"
                                value={background}
                                onChange={(e) => setBackground(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                style={{ height: 80 }}
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={handleCreateSlide}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateSlide;
