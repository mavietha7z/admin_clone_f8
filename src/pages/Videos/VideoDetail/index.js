import { useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getInfoVideo, updateVideo } from '~/services/apiVideo';
import { iso8601ToTimeString } from '~/configs';
import { useSelector } from 'react-redux';

const MySwal = withReactContent(Swal);

function VideoDetail({ data, show, setShow }) {
    const [title, setTitle] = useState(data.title);
    const [image, setImage] = useState(data.image);
    const [view, setView] = useState(data.view);
    const [like, setLike] = useState(data.like);
    const [comment, setComment] = useState(data.comment);
    const [priority, setPriority] = useState(data.priority);
    const [timeVideo, setTimeVideo] = useState(data.timeVideo);

    const [active, setActive] = useState(false);

    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleUpdateVideo = async () => {
        if (active) {
            if (!title || !priority) {
                MySwal.fire('Lỗi', 'Vui lòng điền đủ thông tin', 'error');
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
                (await MySwal.fire('Thành công', 'Cập nhật thành công', 'success')).isConfirmed &&
                    window.location.reload();
            } else {
                MySwal.fire('Thất bại', result.message, 'error');
            }
        } else {
            const result = await getInfoVideo(data.urlVideo);

            if (result.statusCode === 0) {
                setActive(true);
                MySwal.fire('Thành công', 'Cập nhật dữ liệu thành công', 'success');

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
                MySwal.fire('Thất bại', result.message, 'error');
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
