import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import ListBlogItem from '~/components/ListBlogItem';
import { getAllBlogs } from '~/services/apiBlog';
import { useEffect } from 'react';

import styles from '~/GlobalStyles.module.scss';
const cx = classNames.bind(styles);

function ListBlog() {
    const allBlogs = useSelector((state) => state.module.allBlogs?.currentBlogs);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchApi = async () => {
            await getAllBlogs(dispatch);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách khóa học" />

                    <NavMenu
                        nameHome="Trang chủ"
                        pathHome="/blog"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/blog/create"
                        colorPlus="success"
                        float="float-right"
                    />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={cx('card-header', 'bg-white', 'header-card')}>
                                <div className="col-md-6 float-right">
                                    <div className="float-right">
                                        <div className="input-group">
                                            <select name="type" className="form-control">
                                                <option value="order">Tiêu đề bài viết</option>
                                                <option value="order">Tác giả bài viết</option>
                                            </select>
                                            <input
                                                type="text"
                                                name="keyword"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-warning">
                                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body" style={{ padding: 20, paddingTop: 0 }}>
                                <div className="row table-responsive p-0">
                                    <div className="col-sm-12 pr-0">
                                        <table id="example1" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="text-center">Tiêu đề bài viết</div>
                                                    </th>

                                                    <th>
                                                        <div className="text-center">Tác giả</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Trạng thái</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Ngày tạo / Cập nhật</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Hành động</div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {allBlogs?.slice(-10).map((blog) => (
                                                    <ListBlogItem key={blog._id} data={blog} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListBlog;
