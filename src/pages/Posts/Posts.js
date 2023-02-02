import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import TitleGlobal from '~/components/TitleGlobal';
import TableItem from '~/components/TableItem';
import { getBlogByType } from '~/services/apiBlog';
import HeadingTable from '~/components/HeadingTable';
import { Button, Card, Pagination, Row, Table } from 'react-bootstrap';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

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
                    const result = await getBlogByType(currentUser.accessToken, page);

                    if (result.statusCode === 0) {
                        setPosts(result.data);
                        setTotalPages(result.totalPages);
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

    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <Row>
                    <TitleGlobal name="Danh sách khóa học" />
                </Row>
            </div>
            <div className="content-global">
                <Card>
                    <Card.Header>
                        <div className="float-end">
                            <div className="input-group">
                                <select className="form-control">
                                    <option value="order">Tiêu đề bài viết</option>
                                    <option value="order">Tác giả bài viết</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                    <Button variant="warning">
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
                                    { title: 'Tiêu đề bài viết' },
                                    { title: 'Tác giả' },
                                    { title: 'Trạng thái' },
                                    { title: 'Ngày tạo / Cập nhật' },
                                    { title: 'Hành động' },
                                ]}
                            />

                            <tbody>
                                {posts?.map((post) => (
                                    <TableItem key={post._id} type="posts" data={post} />
                                ))}
                            </tbody>
                        </Table>

                        <Pagination className="float-end" size="lg">
                            <Pagination.First />
                            {items}
                            <Pagination.Last />
                        </Pagination>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Posts;
