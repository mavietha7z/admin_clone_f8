import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal, Table, Accordion } from 'react-bootstrap';

import { Image } from '~/assets/image';
import UpInput from '~/components/UpInput';
import { uploadImage } from '~/services/slideshow';
import { updateCourse } from '~/services/apiCourse';
import HeadingTable from '~/components/HeadingTable';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { loadingStart, loadingSuccess } from '~/redux/reducer/authReducer';

function CourseDetail({ data, show, setShow }) {
    const [inputCount, setInputCount] = useState(data.learnWhat.length);

    const [icon, setIcon] = useState(data.icon);
    const [slug, setSlug] = useState(data.slug);
    const [title, setTitle] = useState(data.title);
    const [image, setImage] = useState(data.image);
    const [video, setVideo] = useState(data.video);
    const [price, setPrice] = useState(data.price);
    const [priority, setPriority] = useState(data.priority);
    const [oldPrice, setOldPrice] = useState(data.oldPrice);
    const [pro, setPro] = useState(() => (data.pro ? '1' : '0'));
    const [description, setDescription] = useState(data.description);
    const [preOrderPrice, setPreOrderPrice] = useState(data.preOrderPrice);
    const [preOrder, setPreOrder] = useState(() => (data.preOrder ? '1' : '0'));
    const [published, setPublished] = useState(() => (data.published ? '1' : '0'));
    const [comingSoon, setComingSoon] = useState(() => (data.comingSoon ? '1' : '0'));
    const [learnWhat, setLearnWhat] = useState(data.learnWhat.map((what) => what.description));

    const iconRef = useRef();
    const imageRef = useRef();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleUpdateCourse = async () => {
        const whatLearn = learnWhat.map((desc) => {
            return { description: desc };
        });

        const course = {
            title,
            image,
            icon,
            comingSoon,
            preOrder,
            pro,
            published,
            priority,
            slug,
            video,
            price,
            oldPrice,
            preOrderPrice,
            description,
            learnWhat: whatLearn,
        };

        const result = await updateCourse(currentUser.accessToken, course, data._id);
        if (result.statusCode === 0) {
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    const handleGetUrlImage = async (e, type) => {
        dispatch(loadingStart());
        let formData = new FormData();
        formData.append('image', e.target.files[0]);

        const result = await uploadImage(currentUser.accessToken, formData);
        dispatch(loadingSuccess());
        if (result.statusCode === 0) {
            if (type === 'image') {
                setImage(result.data.urlImage);
            } else {
                setIcon(result.data.urlImage);
            }
        } else {
            mySwalError('fail', result.message);
        }
    };

    const handleChangeWhatLearn = (e, i) => {
        const updatedWhatLearn = [...learnWhat];
        updatedWhatLearn[i] = e.target.value;
        setLearnWhat(updatedWhatLearn);
    };

    const handleRemoveInput = () => {
        setInputCount(inputCount - 1);
        let cloneLearnWhat = [...learnWhat];
        cloneLearnWhat.pop();
        setLearnWhat(cloneLearnWhat);
    };

    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered>
                    <HeadingTable
                        headings={[{ title: 'T??n m?? t???' }, { title: 'Gi?? tr??? hi???n t???i' }, { title: 'H??nh ?????ng' }]}
                    />

                    <tbody>
                        <tr>
                            <td className="text-center">T??n</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="T??n kh??a h???c"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">???nh n???n</td>
                            <td className="text-center">
                                <img
                                    className="ms-4 mb-4"
                                    src={image}
                                    alt="Preview"
                                    style={{
                                        width: '140px',
                                        height: 'auto',
                                        borderRadius: 4,
                                    }}
                                />
                            </td>
                            <td className="text-center">
                                <Button variant="success" size="sm" onClick={() => imageRef.current.click()}>
                                    Ch???n ???nh
                                </Button>
                                <Form.Control
                                    ref={imageRef}
                                    onChange={(e) => handleGetUrlImage(e, 'image')}
                                    type="file"
                                    hidden
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Icon</td>
                            <td className="text-center">
                                <img
                                    className="ms-4 mb-4"
                                    src={icon || Image.notImage}
                                    alt="Preview"
                                    style={{
                                        width: '40px',
                                        height: 'auto',
                                        borderRadius: 4,
                                    }}
                                />
                            </td>
                            <td className="text-center">
                                <Button variant="success" size="sm" onClick={() => iconRef.current.click()}>
                                    Ch???n ???nh
                                </Button>
                                <Form.Control
                                    ref={iconRef}
                                    onChange={(e) => handleGetUrlImage(e, 'icon')}
                                    type="file"
                                    hidden
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">S???p c??</td>
                            <td className="text-center">
                                <select
                                    className="form-control"
                                    value={comingSoon}
                                    onChange={(e) => setComingSoon(e.target.value)}
                                >
                                    <option value="0">???? c??</option>
                                    <option value="1">S???p c??</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">?????t tr?????c</td>
                            <td className="text-center">
                                <select
                                    className="form-control"
                                    value={preOrder}
                                    onChange={(e) => setPreOrder(e.target.value)}
                                >
                                    <option value="0">Kh??ng</option>
                                    <option value="1">C??</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Lo???i</td>
                            <td className="text-center">
                                <select className="form-control" value={pro} onChange={(e) => setPro(e.target.value)}>
                                    <option value="0">Mi???n ph??</option>
                                    <option value="1">Pro</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Ph??t h??nh</td>
                            <td className="text-center">
                                <select
                                    className="form-control"
                                    value={published}
                                    onChange={(e) => setPublished(e.target.value)}
                                >
                                    <option value="1">???? ph??t h??nh</option>
                                    <option value="0">Ch??a ph??t h??nh</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">S??? ??u ti??n</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="S??? ??u ti??n kh??a h???c khi hi???n th???"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Slug</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Slug kh??a h???c"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">URL video gi???i thi???u</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Url video gi???i thi???u"
                                        value={video}
                                        onChange={(e) => setVideo(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Gi?? hi???n t???i</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Gi?? hi???n t???i"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Gi?? c??</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Gi?? c??"
                                        value={oldPrice}
                                        onChange={(e) => setOldPrice(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Gi?? ?????t tr?????c</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Gi?? ?????t tr?????c"
                                        value={preOrderPrice}
                                        onChange={(e) => setPreOrderPrice(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">M?? t???</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="M?? t??? kh??a h???c"
                                        style={{ height: '80px' }}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Accordion className="mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Nh???ng g?? s??? h???c ???????c trong kh??a n??y ({learnWhat.length})</Accordion.Header>
                        <Accordion.Body>
                            <UpInput
                                count={inputCount}
                                setCount={setInputCount}
                                data={learnWhat}
                                onChange={handleChangeWhatLearn}
                                onClick={handleRemoveInput}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Button className="float-end ms-2" size="sm" onClick={handleUpdateCourse}>
                    L??u
                </Button>
                <Button variant="secondary" className="float-end" size="sm" onClick={() => setShow(false)}>
                    ????ng
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default CourseDetail;
