import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Pagination, Row, Table } from 'react-bootstrap';

import PostsItem from './PostsItem';
import TitleGlobal from '~/components/TitleGlobal';
import { getBlogByType } from '~/services/apiBlog';
import HeadingTable from '~/components/HeadingTable';

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
                    const result = await getBlogByType(currentUser.accessToken, page, 'all');

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
        <div className="wrapper-global">
            <div className="header-global">
                <Row>
                    <TitleGlobal name="Danh sách khóa học" />
                </Row>
            </div>
            <div className="content-global">
                <Card>
                    <Card.Body>
                        <Table striped bordered>
                            <HeadingTable
                                headings={[
                                    { title: 'Tiêu đề bài viết' },
                                    { title: 'Tác giả' },
                                    { title: 'Trạng thái' },
                                    { title: 'Trang chủ' },
                                    { title: 'Ngày tạo / Cập nhật' },
                                    { title: 'Hành động' },
                                ]}
                            />

                            <tbody>
                                {posts.map((post) => (
                                    <PostsItem key={post._id} type="posts" data={post} />
                                ))}
                            </tbody>
                        </Table>

                        <Pagination className="float-end me-5" size="lg">
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
