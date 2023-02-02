import Swal from 'sweetalert2';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { Accordion, Button, Modal, Form, Col, Row, Card } from 'react-bootstrap';

import EditorLesson from '../EditorLesson';
import { iso8601ToTimeString } from '~/configs';
import { getInfoVideo } from '~/services/apiVideo';
import { createLesson, getCourseByType } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);

function ModalLesson({ data, show, setShow }) {
    const [selected, setSelected] = useState(null);
    const [options, setOptions] = useState([]);
    const [active, setActive] = useState(false);

    const [nameLesson, setNameLesson] = useState('');
    const [urlVideo, setUrlVideo] = useState('');
    const [timeVideo, setTimeVideo] = useState('');
    const [thumbNail, setThumbNail] = useState('');
    const [html, setHtml] = useState('');
    const [text, setText] = useState('');

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        if (currentUser && data) {
            const fetchApi = async () => {
                const result = await getCourseByType(currentUser.accessToken, 'uid', data._id);

                if (result.statusCode === 0) {
                    const nameChapter = result.data.chapter.map((chapter) => ({
                        label: chapter.nameChapter,
                        id: chapter._id,
                    }));

                    setOptions(nameChapter);
                }
            };
            fetchApi();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleAgrees = async () => {
        if (!selected) {
            MySwal.fire('Lỗi', 'Vui lòng chọn chương', 'error');
            return;
        }
        if (!urlVideo) MySwal.fire('Lỗi', 'Url video không được để trống', 'error');

        if (selected && urlVideo && !active) {
            const result = await getInfoVideo(urlVideo);

            if (result.statusCode === 0) {
                setActive(true);

                result.data.map((item) => {
                    MySwal.fire('Thành công', 'Lấy dữ liệu bài học thành công', 'success');
                    setNameLesson(item.snippet.title);
                    setTimeVideo(item.contentDetails.duration);
                    setThumbNail(item.snippet.thumbnails.maxres.url);

                    return item;
                });
            } else {
                MySwal.fire('Thất bại', result.message, 'error');
            }
        } else if (active) {
            const newLesson = {
                nameLesson,
                timeVideo: iso8601ToTimeString(timeVideo),
                urlVideo,
                thumbNail,
                descHTML: html,
                descMarkdown: text,
            };

            const result = await createLesson(currentUser.accessToken, newLesson, selected.id);

            if (result.statusCode === 0) {
                (await MySwal.fire('Thành công', 'Thêm bài học mới thành công', 'success')).isConfirmed &&
                    window.location.reload();
            } else {
                MySwal.fire('Thất bại', result.message, 'error');
            }
        }
    };

    return (
        <Modal show={show} size="xl" onHide={() => setShow(false)}>
            <Modal.Header>
                <Modal.Title>
                    Chi tiết bài học khóa :<strong>{data.title}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-4">
                    <Col sm={6}>
                        <Accordion className="mb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Thêm bài mới</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Chọn chương:</Form.Label>
                                        <Select
                                            value={selected}
                                            onChange={setSelected}
                                            options={options}
                                            className="col-12 p-0"
                                            placeholder="Chọn chương để thêm bài"
                                        />
                                    </Form.Group>
                                    {selected && (
                                        <Form.Group>
                                            <Form.Label>URL video: (Chỉ hỗ trợ video youtube)</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Vd: R6plN3FvzFY"
                                                value={urlVideo}
                                                disabled={active}
                                                onChange={(e) => setUrlVideo(e.target.value)}
                                            />
                                        </Form.Group>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    {active && (
                        <Col sm={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên bài:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên bài học"
                                    value={nameLesson}
                                    onChange={(e) => setNameLesson(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Thời gian:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tổng thời gian video"
                                    value={iso8601ToTimeString(timeVideo)}
                                    disabled
                                    onChange={(e) => setTimeVideo(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Hình nền video:</Form.Label>
                                <Card.Img src={thumbNail} alt={nameLesson} style={{ border: '1px solid #99999' }} />
                            </Form.Group>
                        </Col>
                    )}
                </Row>

                {active && (
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Thêm mô tả</Accordion.Header>
                            <Accordion.Body>
                                <EditorLesson setText={setText} setHtml={setHtml} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
                    Đóng
                </Button>
                <Button variant="primary" size="sm" onClick={handleAgrees}>
                    {active ? 'Thêm mới bài học' : 'Lấy dữ liệu video'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalLesson;
