import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';

import CourseItem from './CourseItem';
import CreateCourse from './CreateCourse';
import TitleGlobal from '~/components/TitleGlobal';
import HeadingTable from '~/components/HeadingTable';
import CreateButton from '~/components/CreateButton';
import { getCourseByType } from '~/services/apiCourse';

const MySwal = withReactContent(Swal);

function Courses() {
    const [show, setShow] = useState(false);
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const type = new URLSearchParams(location.search).get('type');

    useEffect(() => {
        if (!type) {
            navigate(`${location.pathname}?type=all`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    useEffect(() => {
        if (currentUser) {
            if (type) {
                const fetchApi = async () => {
                    const result = await getCourseByType(currentUser.accessToken, type);

                    if (result.statusCode === 0) {
                        setCourses(result.data);
                    } else {
                        MySwal.fire('Lỗi', result.message, 'error');
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
