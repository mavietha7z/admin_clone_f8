import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Card, Pagination, Row, Table } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import PostsItem from './PostsItem';
import TitleGlobal from '~/components/TitleGlobal';
import { getBlogByType } from '~/services/apiBlog';
import HeadingTable from '~/components/HeadingTable';
import { mySwalError } from '~/configs/alert';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const page = searchParams.get('page');

    useEffect(() => {
        setSearchParams({ page: 1 });
        document.title = 'Quản lí bài viết';
    }, [setSearchParams]);

    useEffect(() => {
        if (currentUser) {
            if (page) {
                const fetchApi = async () => {
                    const result = await getBlogByType(currentUser.accessToken, page, 'all');

                    if (result.statusCode === 0) {
                        setPosts(result.data);
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
