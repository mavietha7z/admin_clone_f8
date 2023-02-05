import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';

import TitleGlobal from '~/components/TitleGlobal';
import HeadingTable from '~/components/HeadingTable';
import { getCourseByType } from '~/services/apiCourse';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import CreateCourse from './CreateCourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import CourseItem from './CourseItem';

const MySwal = withReactContent(Swal);

function Courses() {
    const [courses, setCourses] = useState([]);
    const [show, setShow] = useState(false);

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
                        MySwal.fire('Lỗi', result.message || 'Lỗi lấy dữ liệu khóa học', 'error');
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
                        <Button className="float-end mt-5" variant="success" size="xl" onClick={() => setShow(true)}>
                            Thêm mới
                            <FontAwesomeIcon className="ms-2" icon={faCirclePlus} />
                        </Button>

                        <CreateCourse show={show} setShow={setShow} />
                    </Col>
                </Row>
            </div>
            <div className="content-global">
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <div className="float-end">
                                    <select name="type" className="form-control">
                                        <option value="order">-- Tên khóa học --</option>
                                        <option value="order">-- Khóa học Pro --</option>
                                        <option value="order">-- Tên miễn phí --</option>
                                    </select>
                                </div>
                            </Card.Header>

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
