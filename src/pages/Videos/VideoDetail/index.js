import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';

import { iso8601ToTimeString } from '~/configs';
import { mySwalError, mySwalSuccess } from '~/configs/alert';
import { getInfoVideo, updateVideo } from '~/services/apiVideo';

function VideoDetail({ data, show, setShow }) {
    const [active, setActive] = useState(false);

    const [view, setView] = useState(data.view);
    const [like, setLike] = useState(data.like);
    const [title, setTitle] = useState(data.title);
    const [image, setImage] = useState(data.image);
    const [comment, setComment] = useState(data.comment);
    const [priority, setPriority] = useState(data.priority);
    const [timeVideo, setTimeVideo] = useState(data.timeVideo);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleUpdateVideo = async () => {
        if (active) {
            if (!title || !priority) {
                mySwalError('error', 'Vui lòng điền đủ thông tin');
                return;
            }

            const video = {
                title,
                image,
                urlVideo: data.urlVideo,
                timeVideo,
                view,
                like,
                comment,
                priority,
            };

            const result = await updateVideo(currentUser.accessToken, video, data._id);

            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        } else {
            const result = await getInfoVideo(data.urlVideo);

            if (result.statusCode === 0) {
                setActive(true);
                mySwalSuccess('Cập nhật dữ liệu thành công');

                result.data.map((item) => {
                    setImage(item.snippet.thumbnails.maxres.url);
                    setTimeVideo(iso8601ToTimeString(item.contentDetails.duration));
                    setTitle(item.snippet.title);
                    setView(item.statistics.viewCount);
                    setLike(item.statistics.likeCount);
                    setComment(item.statistics.commentCount);

                    return item;
                });
            } else {
                mySwalError('fail', result.message);
            }
        }
    };

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Url video</Form.Label>
                            <Form.Control type="text" placeholder="Url video" disabled defaultValue={data.urlVideo} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Ảnh nền</Form.Label>

                            <Card.Img src={image} alt={title} style={{ border: '1px solid #9999' }} />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tiêu đề video</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tiêu đề video"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sự ưu tiên</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Sự ưu tiên"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                        </Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Lượt xem</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Lượt xem"
                                        disabled
                                        value={view}
                                        onChange={(e) => setView(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Yêu thích</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Yêu thích"
                                        disabled
                                        value={like}
                                        onChange={(e) => setLike(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Thời gian</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Thời gian"
                                        disabled
                                        value={timeVideo}
                                        onChange={(e) => setTimeVideo(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Bình luận</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Bình luận"
                                        disabled
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={() => setShow(false)}>
                    Đóng
                </Button>
                <Button size="sm" variant="primary" onClick={handleUpdateVideo}>
                    {active ? 'Cập nhật' : 'Lấy dữ liệu mới'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VideoDetail;
