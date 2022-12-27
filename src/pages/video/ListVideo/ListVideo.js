import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import classNames from 'classnames/bind';
import styles from '~/GlobalStyles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ListVideoItem from '~/components/ListVideoItem';

const cx = classNames.bind(styles);

function ListVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách khóa học" />

                    <NavMenu
                        nameHome="Trang chủ"
                        pathHome="/video"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/video/create"
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
                                            <select className="form-control">
                                                <option value="order">Tiêu đề video</option>
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
                                                        <div className="text-center">Tiêu đề video</div>
                                                    </th>

                                                    <th>
                                                        <div className="text-center">Link youtube</div>
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
                                                {/* {allBlogs?.slice(-10).map((blog) => (
                                                    <ListBlogItem key={blog._id} data={blog} />
                                                ))} */}
                                                <ListVideoItem />
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

export default ListVideo;
