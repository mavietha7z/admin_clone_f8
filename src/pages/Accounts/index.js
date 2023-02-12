import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, Col, Pagination, Row, Table } from 'react-bootstrap';

import CreateUser from './CreateUser';
import AccountItem from './AccountItem';
import { mySwalError } from '~/configs/alert';
import TitleGlobal from '~/components/TitleGlobal';
import { getUserByType } from '~/services/apiAuth';
import HeadingTable from '~/components/HeadingTable';
import CreateButton from '~/components/CreateButton';
import HeaderListUser from '~/components/HeaderListUser';

function Accounts() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const page = searchParams.get('page');
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        setSearchParams({ page: 1 });
        document.title = 'Quản lí người dùng';
    }, [setSearchParams]);

    useEffect(() => {
        if (currentUser) {
            if (page) {
                const fetchApi = async () => {
                    const result = await getUserByType(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setUsers(result.data);
                        setTotalPages(result.totalPages);
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
            mySwalError('fail', result.message);
        }
    };

    return (
        <div className="wrapper-global">
            <div className="header-global">
                <Row>
                    <TitleGlobal name="Danh sách người dùng" />

                    <Col sm={7}>
                        <CreateButton onClick={() => setShow(true)} />
                        {show && <CreateUser show={show} setShow={setShow} />}
                    </Col>
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

                            <Pagination className="float-end mt-3" size="sm">
                                <Pagination.First /> {items} <Pagination.Last />
                            </Pagination>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </div>
    );
}

export default Accounts;
