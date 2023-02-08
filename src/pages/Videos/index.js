import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, Col, Row, Table } from 'react-bootstrap';

import VideoItem from './VideoItem';
import CreateVideo from './CreateVideo';
import { mySwalError } from '~/configs/alert';
import TitleGlobal from '~/components/TitleGlobal';
import { getVideoByPage } from '~/services/apiVideo';
import HeadingTable from '~/components/HeadingTable';
import CreateButton from '~/components/CreateButton';

function Videos() {
    const [show, setShow] = useState(false);
    const [videos, setVideos] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const page = searchParams.get('page');

    useEffect(() => {
        setSearchParams({ page: 1 });
        document.title = 'Quản lí video';
    }, [setSearchParams]);

    useEffect(() => {
        if (currentUser) {
            if (page) {
                const fetchApi = async () => {
                    const result = await getVideoByPage(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setVideos(result.data);
                    } else {
                        mySwalError('fail', result.message);
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
                        <CreateButton onClick={() => setShow(true)} />
                        <CreateVideo show={show} setShow={setShow} />
                    </Col>
                </Row>
            </div>

            <div className="content-global">
                <Card>
                    <Card.Body>
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
