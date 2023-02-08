import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CourseItem from './CourseItem';
import CreateCourse from './CreateCourse';
import { mySwalError } from '~/configs/alert';
import TitleGlobal from '~/components/TitleGlobal';
import HeadingTable from '~/components/HeadingTable';
import CreateButton from '~/components/CreateButton';
import { getCourseByType } from '~/services/apiCourse';

function Courses() {
    const [show, setShow] = useState(false);
    const [courses, setCourses] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const type = searchParams.get('type');
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        setSearchParams({ type: 'all' });
        document.title = 'Quản lí khóa học';
    }, [setSearchParams]);

    useEffect(() => {
        if (currentUser) {
            if (type) {
                const fetchApi = async () => {
                    const result = await getCourseByType(currentUser.accessToken, type);

                    if (result.statusCode === 0) {
                        setCourses(result.data);
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
                    <TitleGlobal name="Danh sách khóa học" />

                    <Col sm={7}>
                        <CreateButton onClick={() => setShow(true)} />
                        <CreateCourse show={show} setShow={setShow} />
                    </Col>
                </Row>
            </div>
            <div className="content-global">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table striped bordered>
                                    <HeadingTable
                                        headings={[
                                            { title: 'Tên khóa học' },
                                            { title: 'Ảnh xem trước' },
                                            { title: 'Chương' },
                                            { title: 'Bài học' },
                                            { title: 'Thời lượng' },
                                            { title: 'Loại' },
                                            { title: 'Trạng thái' },
                                            { title: 'Ngày tạo / Cập nhật' },
                                            { title: 'Hành động' },
                                        ]}
                                    />

                                    <tbody>
                                        {courses.map((course) => (
                                            <CourseItem key={course._id} type="course" data={course} />
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Courses;
