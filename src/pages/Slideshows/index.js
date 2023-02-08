import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CreateSlide from './CreateSlide';
import SlideshowItem from './SlideshowItem';
import { mySwalError } from '~/configs/alert';
import TitleGlobal from '~/components/TitleGlobal';
import CreateButton from '~/components/CreateButton';
import HeadingTable from '~/components/HeadingTable';
import { getAllSlideshow } from '~/services/slideshow';

function Slideshows() {
    const [show, setShow] = useState(false);
    const [slideshows, setSlideshows] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const type = searchParams.get('type');

    useEffect(() => {
        setSearchParams({ type: 'all' });
        document.title = 'Quản lí slideshow';
    }, [setSearchParams]);

    useEffect(() => {
        if (currentUser) {
            if (type) {
                const fetchApi = async () => {
                    const result = await getAllSlideshow(currentUser.accessToken, type);

                    if (result.statusCode === 0) {
                        setSlideshows(result.data);
                    } else {
                        mySwalError('error', result.message);
                    }
                };
                fetchApi();
            }
        } else {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return (
        <div className="wrapper-global">
            <div className="header-global">
                <Row>
                    <TitleGlobal name="Danh sách slideshow" />

                    <Col sm={7}>
                        <CreateButton onClick={() => setShow(true)} />
                        <CreateSlide show={show} setShow={setShow} />
                    </Col>
                </Row>
            </div>
            <div className="content-global">
                <Card>
                    <Card.Body>
                        <Table striped bordered>
                            <HeadingTable
                                headings={[
                                    { title: 'Tiêu đề' },
                                    { title: 'Ảnh' },
                                    { title: 'Mô tả' },
                                    { title: 'Trạng thái' },
                                    { title: 'Ngày tạo / Cập nhật' },
                                    { title: 'Hành động' },
                                ]}
                            />

                            <tbody>
                                {slideshows.map((slideshow) => (
                                    <SlideshowItem key={slideshow._id} type="slide" data={slideshow} />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Slideshows;
