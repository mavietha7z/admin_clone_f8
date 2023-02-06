import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';

import CreateLearning from './CreateLearning';
import LearningPathItem from './LearningPathItem';
import TitleGlobal from '~/components/TitleGlobal';
import HeadingTable from '~/components/HeadingTable';
import { getLearningRoute } from '~/services/apiLearning';
import CreateButton from '~/components/CreateButton';

const MySwal = withReactContent(Swal);

function LearningPaths() {
    const [show, setShow] = useState(false);
    const [learnings, setLearnings] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const type = new URLSearchParams(location.search).get('type');

    useEffect(() => {
        if (!type) {
            navigate(`${location.pathname}?type=all`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    useEffect(() => {
        if (type) {
            const fetchApi = async () => {
                const result = await getLearningRoute(type);

                if (result.statusCode === 0) {
                    setLearnings(result.data);
                } else {
                    MySwal.fire('Lỗi', result.message, 'error');
                }
            };
            fetchApi();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return (
        <div className="wrapper-global">
            <div className="header-global">
                <Row>
                    <TitleGlobal name="Danh sách lộ trình" />

                    <Col sm={7}>
                        <CreateButton onClick={() => setShow(true)} />
                        {show && <CreateLearning show={show} setShow={setShow} />}
                    </Col>
                </Row>
            </div>

            <div className="content-global">
                <Card>
                    <Card.Body>
                        <Table striped bordered>
                            <HeadingTable
                                headings={[
                                    { title: 'Tên lộ trình' },
                                    { title: 'Hình ảnh' },
                                    { title: 'Mô tả' },
                                    { title: 'Trạng thái' },
                                    { title: 'Ngày tạo / Cập nhật' },
                                    { title: 'Hành động' },
                                ]}
                            />

                            <tbody>
                                {learnings.map((learning) => (
                                    <LearningPathItem key={learning._id} type="learning" data={learning} />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default LearningPaths;
