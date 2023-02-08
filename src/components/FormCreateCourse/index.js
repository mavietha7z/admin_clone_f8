import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import UpInput from '../UpInput';
import { createCourse } from '~/services/apiCourse';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { loadingStart, loadingSuccess } from '~/redux/reducer/authReducer';

function FormCreateCourse({ type }) {
    const [inputCount, setInputCount] = useState(1);
    const [comingSoon, setComingSoon] = useState('0');
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [video, setVideo] = useState('');
    const [priority, setPriority] = useState(1);
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [preOrderPrice, setPreOrderPrice] = useState(0);
    const [isWhatLearn, setIsWhatLearn] = useState([]);
    const [image, setImage] = useState(null);
    const [icon, setIcon] = useState(null);
    const [desc, setDesc] = useState('');

    const fileRef = useRef();
    const iconRef = useRef();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview);
            icon && URL.revokeObjectURL(icon.preview);
        };
    }, [image, icon]);

    const handleChangeWhatLearn = (e, i) => {
        const updatedWhatLearn = [...isWhatLearn];
        updatedWhatLearn[i] = e.target.value;
        setIsWhatLearn(updatedWhatLearn);
    };

    const handlePrevImage = (e, type) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        if (type === 'image') {
            setImage(file);
        } else {
            setIcon(file);
        }
    };

    const handleCreateCourse = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        dispatch(loadingStart());

        if (type === 'free') {
            const whatLearn = isWhatLearn.map((desc) => {
                return { description: desc };
            });
            const arrAsJson = JSON.stringify(whatLearn);

            formData.append('title', title);
            formData.append('slug', slug);
            formData.append('video', video);
            formData.append('priority', priority);
            formData.append('whatLearn', arrAsJson);
            formData.append('image', image);
            formData.append('icon', icon);
            formData.append('description', desc);

            const result = await createCourse(currentUser.accessToken, 'free', formData);
            dispatch(loadingSuccess());
            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        } else if (type === 'pro' && comingSoon === '0') {
            const whatLearn = isWhatLearn.map((desc) => {
                return { description: desc };
            });
            const arrAsJson = JSON.stringify(whatLearn);

            formData.append('title', title);
            formData.append('slug', slug);
            formData.append('video', video);
            formData.append('priority', priority);
            formData.append('whatLearn', arrAsJson);
            formData.append('image', image);
            formData.append('icon', icon);
            formData.append('price', price);
            formData.append('oldPrice', oldPrice);
            formData.append('preOrderPrice', preOrderPrice);
            formData.append('comingSoon', comingSoon);

            const result = await createCourse(currentUser.accessToken, 'pro', formData);
            dispatch(loadingSuccess());
            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        } else {
            formData.append('title', title);
            formData.append('slug', slug);
            formData.append('priority', priority);
            formData.append('image', image);
            formData.append('comingSoon', comingSoon);

            const result = await createCourse(currentUser.accessToken, 'pro', formData);
            dispatch(loadingSuccess());
            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        }
    };

    const handleRemoveInput = () => {
        setInputCount(inputCount - 1);
    };

    return (
        <Form className="p-5">
            <Row>
                <Col sm={5}>
                    {type === 'pro' && (
                        <Form.Group className="mb-3">
                            <Form.Label>Sắp có:</Form.Label>
                            <select
                                className="form-control"
                                value={comingSoon}
                                onChange={(e) => setComingSoon(e.target.value)}
                            >
                                <option value="1">Sắp có</option>
                                <option value="0">Đã có</option>
                            </select>
                        </Form.Group>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Tên khóa học:</Form.Label>
                        <Form.Control
                            placeholder="Nhập tên khóa học"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Đường dẫn slug:</Form.Label>
                        <Form.Control
                            placeholder="Nhập đường dẫn slug"
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </Form.Group>
                    {comingSoon === '0' && (
                        <Form.Group className="mb-3">
                            <Form.Label>Url video giới thiệu:</Form.Label>
                            <Form.Control
                                placeholder="Nhập url video"
                                type="text"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                            />
                        </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label>Sự ưu tiên:</Form.Label>
                        <Form.Control
                            placeholder="Sự ưu tiên sắp xếp"
                            type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </Form.Group>

                    {type === 'pro' && comingSoon === '0' && (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Giá:</Form.Label>
                                <Form.Control
                                    placeholder="Nhập giá khóa học"
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Giá cũ:</Form.Label>
                                <Form.Control
                                    placeholder="Nhập giá cũ"
                                    type="text"
                                    value={oldPrice}
                                    onChange={(e) => setOldPrice(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Giá đặt trước:</Form.Label>
                                <Form.Control
                                    placeholder="Nhập giá đặt trước"
                                    type="text"
                                    value={preOrderPrice}
                                    onChange={(e) => setPreOrderPrice(e.target.value)}
                                />
                            </Form.Group>
                        </>
                    )}

                    {type === 'free' && (
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
                    )}
                </Col>

                <Col sm={7}>
                    {(type !== 'pro' || comingSoon === '0') && (
                        <UpInput
                            count={inputCount}
                            setCount={setInputCount}
                            data={isWhatLearn}
                            onChange={handleChangeWhatLearn}
                            onClick={handleRemoveInput}
                        />
                    )}

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
                            <Form.Control
                                ref={fileRef}
                                onChange={(e) => handlePrevImage(e, 'image')}
                                type="file"
                                hidden
                            />
                        </div>
                    </Form.Group>

                    {(type !== 'pro' || comingSoon === '0') && (
                        <Form.Group className="mb-3">
                            <Form.Label>Icon</Form.Label>
                            {icon?.preview && (
                                <img
                                    className="ms-4 mb-4"
                                    src={icon.preview}
                                    alt="Preview"
                                    style={{
                                        width: '40px',
                                        height: 'auto',
                                        borderRadius: 4,
                                    }}
                                />
                            )}
                            <div className="mx-4">
                                <Button variant="success" size="sm" onClick={() => iconRef.current.click()}>
                                    Chọn ảnh
                                </Button>
                                <Form.Control
                                    ref={iconRef}
                                    onChange={(e) => handlePrevImage(e, 'icon')}
                                    type="file"
                                    hidden
                                />
                            </div>
                        </Form.Group>
                    )}
                </Col>
            </Row>
            <Button variant="success" className="float-end my-5" onClick={handleCreateCourse}>
                Thêm khóa học mới
            </Button>
        </Form>
    );
}

export default FormCreateCourse;
