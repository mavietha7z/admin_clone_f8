import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';

import TitleGlobal from '~/components/TitleGlobal';
import { getUserByType } from '~/services/apiAuth';
import HeadingTable from '~/components/HeadingTable';
import HeaderListUser from '~/components/HeaderListUser';
import CreateUser from './CreateUser';
import { Button, Card, Col, Pagination, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import AccountItem from './AccountItem';

const MySwal = withReactContent(Swal);

function Accounts() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

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
                    const result = await getUserByType(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setUsers(result.data);
                        setTotalPages(result.totalPages);
                    } else {
                        MySwal.fire('Lỗi', result.message || 'Lỗi lấy dữ liệu người dùng', 'error');
                    }
                };
                fetchApi();
            }
        } else {
            navigate('/login');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    let items = [];
    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination.Item key={i} active={i === Number(page)}>
                {i}
            </Pagination.Item>
        );
    }

    const handleGetUserLock = async () => {
        const result = await getUserByType(currentUser.accessToken, null, 'lock');

        if (result.statusCode === 0) {
            setUsers(result.data);
        } else {
            MySwal.fire('Lỗi', result.message, 'error');
        }
    };

    return (
        <div className="wrapper-global">
            <div className="header-global">
                <Row>
                    <TitleGlobal name="Danh sách người dùng" />

                    <Col sm={7}>
                        <Button variant="success" className="float-end mt-5" onClick={() => setShow(true)}>
                            Thêm mới <FontAwesomeIcon icon={faPlusCircle} />
                        </Button>
                    </Col>

                    <CreateUser show={show} setShow={setShow} />
                </Row>
            </div>

            <div className="content-global">
                <Row>
                    <Card>
                        <HeaderListUser onClick={handleGetUserLock} />

                        <Card.Body style={{ paddingTop: 10 }}>
                            <Table striped bordered>
                                <HeadingTable
                                    headings={[
                                        { title: 'Username' },
                                        { title: 'Họ tên' },
                                        { title: 'Email' },
                                        { title: 'Vai trò' },
                                        { title: 'Trạng thái' },
                                        { title: 'Tick' },
                                        { title: 'Ngày tạo / cập nhật' },
                                        { title: 'Hành động' },
                                    ]}
                                />

                                <tbody>
                                    {users.length > 0 ? (
                                        users.map((user) => <AccountItem key={user._id} type="account" data={user} />)
                                    ) : (
                                        <tr>
                                            <td colSpan={8} className="text-center">
                                                Không có kết quả
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                            <Pagination className="float-end" size="lg">
                                <Pagination.First />
                                {items}
                                <Pagination.Last />
                            </Pagination>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </div>
    );
}

export default Accounts;
