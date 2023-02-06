import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import LearningPathItem from './LearningPathItem';
import CreateLearning from './CreateLearning';
import TitleGlobal from '~/components/TitleGlobal';
import HeadingTable from '~/components/HeadingTable';
import { getLearningRoute } from '~/services/apiLearning';

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
                    MySwal.fire('Lỗi', result.data.message, 'error');
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
                        <Button variant="success" className="mt-5 float-end" onClick={() => setShow(true)}>
                            Thêm mới <FontAwesomeIcon icon={faPlusCircle} />
                        </Button>
                    </Col>

                    {show && <CreateLearning show={show} setShow={setShow} />}
                </Row>
            </div>

            <div className="content-global">
                <Card>
                    <Card.Header>
                        <div className="float-end">
                            <div className="input-group">
                                <select className="form-control">
                                    <option value="title">Tiêu đề</option>
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
