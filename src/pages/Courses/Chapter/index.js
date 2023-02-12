import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Accordion, Button, Col, Form, Modal, Row, Table, useAccordionButton, Card } from 'react-bootstrap';

import ModalDelete from '~/components/ModalDelete';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { createChapter, deleteChapter, renameChapter } from '~/services/apiCourse';

function ContextAwareToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
    return (
        <Button size="sm" className="float-end" onClick={decoratedOnClick}>
            {children}
        </Button>
    );
}

function Chapter({ data, show, setShow }) {
    const [modal, setModal] = useState(false);
    const [active, setActive] = useState(null);
    const [nameEdit, setNameEdit] = useState('');
    const [nameChapter, setNameChapter] = useState('');
    const [chapter, setChapter] = useState(data.chapter);
    const [chapterDelete, setChapterDelete] = useState('');

    const inputRef = useRef();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleCreateChapter = async () => {
        if (!nameChapter) {
            mySwalError('error', 'Tên chương là bắt buộc');
        } else {
            const result = await createChapter(currentUser.accessToken, nameChapter, data._id);

            if (result.statusCode === 0) {
                setNameChapter('');
                inputRef.current.focus();
                mySwalSuccess(result.message, 'load');
                setChapter([...chapter, result.data]);
            } else {
                mySwalError('fail', result.message);
            }
        }
    };

    const handleSaveRename = async (chapterId, nameChapter) => {
        if (active === chapterId && nameChapter !== nameEdit) {
            const result = await renameChapter(currentUser.accessToken, nameEdit, chapterId);

            if (result.statusCode === 0) {
                setChapter(result.data);
                mySwalSuccess(result.message, 'load');
            } else {
                mySwalError('fail', result.message);
            }
        } else {
            setNameEdit(nameChapter);
        }
    };

    const handleDelete = async (id) => {
        setModal(false);
        const result = await deleteChapter(currentUser.accessToken, id);

        if (result.statusCode === 0) {
            setChapter(result.data);
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
        }
    };

    return (
        <Modal show={show} size="lg" onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Thông tin chương khóa : <strong>{data.title}</strong>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Accordion className="mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Thêm chương mới</Accordion.Header>
                        <Accordion.Body>
                            <Form.Label>Tên chương:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên chương"
                                value={nameChapter}
                                ref={inputRef}
                                onChange={(e) => setNameChapter(e.target.value)}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Modal.Title className="mb-2">DANH SÁCH CHƯƠNG</Modal.Title>
                {chapter.map((chapter, index) => {
                    const isActive = active === chapter._id;

                    return (
                        <Row key={chapter._id}>
                            <Col xs={10}>
                                <Accordion className="mb-2">
                                    <Card>
                                        <Card.Header>
                                            <Col sm={10} className="d-inline-block">
                                                {isActive ? (
                                                    <Form.Control
                                                        type="text"
                                                        value={nameEdit}
                                                        onChange={(e) => setNameEdit(e.target.value)}
                                                    />
                                                ) : (
                                                    <div className="mt-2 fs-4">
                                                        {index + 1}. {chapter.nameChapter}
                                                    </div>
                                                )}
                                            </Col>
                                            <ContextAwareToggle eventKey="0">
                                                <FontAwesomeIcon icon={faFolderOpen} />
                                            </ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Table striped bordered>
                                                <thead>
                                                    <tr>
                                                        <th>Tên bài</th>
                                                        <th>URL video</th>
                                                        <th>Thời lượng</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {chapter.lesson.length > 0 ? (
                                                        chapter.lesson.map((lesson) => (
                                                            <tr key={lesson._id}>
                                                                <td style={{ width: '60%' }}>{lesson.nameLesson}</td>
                                                                <td style={{ width: '20%' }}>
                                                                    <a
                                                                        href={`https://youtu.be/${lesson.urlVideo}`}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                    >
                                                                        {lesson.urlVideo}
                                                                    </a>
                                                                </td>
                                                                <td style={{ width: '20%' }}>{lesson.timeVideo}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td className="text-center" colSpan={3}>
                                                                Chưa có bài học nào
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </Table>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col xs={2}>
                                <div className="float-end mt-3">
                                    <Button
                                        className="me-4"
                                        title="Sửa tên chương"
                                        variant="primary"
                                        size="sm"
                                        onClick={() => {
                                            setActive(isActive ? null : chapter._id);
                                            handleSaveRename(chapter._id, chapter.nameChapter);
                                        }}
                                    >
                                        {isActive ? 'Lưu' : <FontAwesomeIcon icon={faPencil} />}
                                    </Button>
                                    <Button
                                        variant="danger"
                                        title="Xóa chương"
                                        size="sm"
                                        onClick={() => {
                                            setChapterDelete(chapter.nameChapter);
                                            setModal(true);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </Button>
                                </div>
                            </Col>

                            {modal && (
                                <ModalDelete
                                    show={modal}
                                    setShow={setModal}
                                    title={`"${chapterDelete}" đồng nghĩa việc xóa tất cả bài học của chương này`}
                                    onClick={() => handleDelete(chapter._id)}
                                />
                            )}
                        </Row>
                    );
                })}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
                    Đóng
                </Button>
                <Button variant="primary" size="sm" onClick={handleCreateChapter}>
                    Thêm chương
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Chapter;
