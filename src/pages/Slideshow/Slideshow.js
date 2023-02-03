import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import TitleGlobal from '~/components/TitleGlobal';
import TableItem from '~/components/TableItem';
import HeadingTable from '~/components/HeadingTable';
import { getAllSlideshow } from '~/services/slideshow';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import CreateSlide from '~/components/CreateSlide';

const MySwal = withReactContent(Swal);

function Slideshow() {
    const [slideshows, setSlideshows] = useState([]);
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
                    const result = await getAllSlideshow(currentUser.accessToken, type);

                    if (result.statusCode === 0) {
                        setSlideshows(result.data);
                    } else {
                        MySwal.fire('Lỗi', result.message || 'Lỗi lấy dữ liệu slideshow', 'error');
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
                        <Button variant="success" className="float-end mt-5" onClick={() => setShow(true)}>
                            Thêm mới
                            <FontAwesomeIcon className="ms-2" icon={faPlusCircle} />
                        </Button>
                    </Col>

                    <CreateSlide show={show} setShow={setShow} />
                </Row>
            </div>
            <div className="content-global">
                <Card>
                    <Card.Header>
                        <div className="float-end">
                            <div className="input-group">
                                <select name="type" className="form-control">
                                    <option value="order">Tên slideshow</option>
                                </select>

                                <Form.Control type="text" placeholder="Search" />
                                <div className="input-group-append">
                                    <Button
                                        variant="warning"
                                        onClick={() => {
                                            MySwal.fire('Lỗi', 'Chức năng đang được phát triển', 'error');
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card.Header>

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
                                    <TableItem key={slideshow._id} type="slide" data={slideshow} />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Slideshow;
