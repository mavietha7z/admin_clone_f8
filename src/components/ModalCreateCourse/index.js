import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);
function ModalCreateCourse({ show, setShow }) {
    const [inputCount, setInputCount] = useState(1);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [video, setVideo] = useState('');

    const [priority, setPriority] = useState(0);
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [preOrderPrice, setPreOrderPrice] = useState(0);
    const [isWhatLearn, setIsWhatLearn] = useState([]);
    const [image, setImage] = useState(null);
    const [icon, setIcon] = useState(null);
    const [desc, setDesc] = useState('');

    const fileRef = useRef();
    const iconRef = useRef();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleChangeWhatLearn = (e, i) => {
        const updatedWhatLearn = [...isWhatLearn];
        updatedWhatLearn[i] = e.target.value;
        setIsWhatLearn(updatedWhatLearn);
    };

    const handlePrevImage = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setImage(file);
    };

    const handlePrevIcon = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setIcon(file);
    };

    const handleCreateCourse = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        const whatLearn = isWhatLearn.map((desc) => {
            return { description: desc };
        });
        const arrAsJson = JSON.stringify(whatLearn);

        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('video', video);
        formData.append('priority', priority);
        formData.append('price', price);
        formData.append('oldPrice', oldPrice);
        formData.append('preOrderPrice', preOrderPrice);
        formData.append('whatLearn', arrAsJson);
        formData.append('image', image);
        formData.append('icon', icon);
        formData.append('description', desc);

        const result = await createCourse(formData, currentUser.accessToken);

        if (result.statusCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                if (res.isConfirmed) {
                    navigate('/course');
                }
            });
        } else {
            MySwal.fire('Thất bại', `${result.message}`, 'error');
        }
    };

    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)} aria-labelledby="modal-styling">
            <Modal.Header closeButton>
                <Modal.Title id="modal-styling">
                    <h2>Thêm mới khóa học</h2>
                </Modal.Title>
            </Modal.Header>
            <Form className="p-5">
                <Row>
                    <Col sm={5}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tên khóa học:</Form.Label>
                            <Form.Control
                                placeholder="Nhập tên khóa học"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Đường dẫn slug:</Form.Label>
                            <Form.Control
                                placeholder="Nhập đường dẫn slug"
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Url video giới thiệu:</Form.Label>
                            <Form.Control
                                placeholder="Nhập url video"
                                type="text"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Sự ưu tiên: ( Mặc định sẽ là 0 )</Form.Label>
                            <Form.Control
                                placeholder="Sự ưu tiên sắp xếp"
                                type="text"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Giá: ( Nếu để mặc định 0 thì sẽ là miễn phí )</Form.Label>
                            <Form.Control
                                placeholder="Nhập giá khóa học"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Giá cũ: ( Nếu là khóa pro )</Form.Label>
                            <Form.Control
                                placeholder="Nhập giá cũ"
                                type="text"
                                value={oldPrice}
                                onChange={(e) => setOldPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Giá đặt trước: ( Nếu là khóa pro )</Form.Label>
                            <Form.Control
                                placeholder="Nhập giá đặt trước"
                                type="text"
                                value={preOrderPrice}
                                onChange={(e) => setPreOrderPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Col>

                    <Col sm={7}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ width: '100%' }}>
                                Học được gì sau khóa học:
                                <FontAwesomeIcon
                                    className="btn btn-success float-end"
                                    onClick={() => setInputCount(inputCount + 1)}
                                    icon={faCirclePlus}
                                    title="Thêm 1 ô input mới"
                                />
                            </Form.Label>

                            {Array.from({ length: inputCount }, (_, i) => (
                                <Fragment key={i}>
                                    <Col sm={11} style={{ display: 'inline-block' }}>
                                        <Form.Control
                                            placeholder="Mô tả những gì sẽ học được"
                                            className="mt-2"
                                            type="text"
                                            defaultValue={isWhatLearn[i]}
                                            onChange={(e) => handleChangeWhatLearn(e, i)}
                                        />
                                    </Col>

                                    {inputCount > 1 && (
                                        <FontAwesomeIcon
                                            className="btn btn-danger float-end remove-input"
                                            onClick={() => setInputCount(inputCount - 1)}
                                            icon={faCircleMinus}
                                            title="Xóa ô input này"
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Ảnh xem trước</Form.Label>
                            {image?.preview && (
                                <img
                                    className="ms-4 mb-4"
                                    src={image.preview}
                                    alt="Preview"
                                    style={{
                                        width: '140px',
                                        height: 'auto',
                                        borderRadius: 4,
                                    }}
                                />
                            )}
                            <div className="mx-4">
                                <Button variant="success" size="sm" onClick={() => fileRef.current.click()}>
                                    Chọn ảnh
                                </Button>
                                <Form.Control ref={fileRef} onChange={handlePrevImage} type="file" hidden />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Icon</Form.Label>
                            {icon?.preview && (
                                <img
                                    className="ms-4 mb-4"
                                    src={icon.preview}
                                    alt="Preview"
                                    style={{
                                        width: '140px',
                                        height: 'auto',
                                        borderRadius: 4,
                                    }}
                                />
                            )}
                            <div className="mx-4">
                                <Button variant="success" size="sm" onClick={() => iconRef.current.click()}>
                                    Chọn ảnh
                                </Button>
                                <Form.Control ref={iconRef} onChange={handlePrevIcon} type="file" hidden />
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Mô tả khóa học:</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Nhập mô tả khóa học"
                                style={{ height: '100px' }}
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="success" className="float-end mt-3">
                    Thêm khóa học mới
                </Button>
            </Form>
        </Modal>
    );
}

export default ModalCreateCourse;
