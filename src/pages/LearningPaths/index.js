import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, Col, Row, Table } from 'react-bootstrap';

import CreateLearning from './CreateLearning';
import { mySwalError } from '~/configs/alert';
import LearningPathItem from './LearningPathItem';
import TitleGlobal from '~/components/TitleGlobal';
import HeadingTable from '~/components/HeadingTable';
import CreateButton from '~/components/CreateButton';
import { getLearningPath } from '~/services/apiLearning';

function LearningPaths() {
    const [show, setShow] = useState(false);
    const [learnings, setLearnings] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const type = searchParams.get('type');

    useEffect(() => {
        setSearchParams({ type: 'all' });
        document.title = 'Quản lí lộ trình học';
    }, [setSearchParams]);

    useEffect(() => {
        if (type) {
            const fetchApi = async () => {
                const result = await getLearningPath(type);

                if (result.statusCode === 0) {
                    setLearnings(result.data);
                } else {
                    mySwalError('error', result.message);
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
