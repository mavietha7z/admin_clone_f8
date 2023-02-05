import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import VideoItem from './VideoItem';
import CreateVideo from './CreateVideo';
import TitleGlobal from '~/components/TitleGlobal';
import { getVideoByType } from '~/services/apiVideo';
import HeadingTable from '~/components/HeadingTable';

const MySwal = withReactContent(Swal);

function Videos() {
    const [videos, setVideos] = useState([]);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const page = new URLSearchParams(location.search).get('page');

    useEffect(() => {
        if (!page) {
            navigate(`${location.pathname}?page=1`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        if (currentUser) {
            if (page) {
                const fetchApi = async () => {
                    const result = await getVideoByType(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setVideos(result.data);
                    } else {
                        MySwal.fire('Lỗi', result.data.message, 'error');
                    }
                };
                fetchApi();
            }
        } else {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className="wrapper-global">
            <div className="header-global">
                <Row>
                    <TitleGlobal name="Danh sách khóa học" />

                    <Col sm={7}>
                        <Button variant="success" className="mt-5 float-end" onClick={() => setShow(true)}>
                            Thêm mới <FontAwesomeIcon icon={faPlusCircle} />
                        </Button>
                    </Col>

                    <CreateVideo show={show} setShow={setShow} />
                </Row>
            </div>

            <div className="content-global">
                <Card>
                    <Card.Header>
                        <div className="float-end">
                            <div className="input-group">
                                <select className="form-control">
                                    <option value="title">Tiêu đề video</option>
                                </select>
                                <Form.Control type="text" placeholder="Search" />
                                <div className="input-group-append">
                                    <Button
                                        variant="warning"
                                        onClick={() => {
                                            MySwal.fire('Lỗi', 'Chức năng này đang được phát triển', 'error');
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Header>

                    <Card.Body style={{ padding: 20, paddingTop: 0 }}>
                        <Table striped bordered>
                            <HeadingTable
                                headings={[
                                    { title: 'Tiêu đề video' },
                                    { title: 'Link youtube' },
                                    { title: 'Trạng thái' },
                                    { title: 'Trang chủ' },
                                    { title: 'Ngày tạo / Cập nhật' },
                                    { title: 'Hành động' },
                                ]}
                            />

                            <tbody>
                                {videos.map((video) => (
                                    <VideoItem key={video._id} type="video" data={video} />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Videos;
