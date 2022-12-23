import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import ListCourseItem from '~/components/ListCourseItem/ListCourseItem';

const cx = classNames.bind(styles);

function ListCourse() {
    const allCourse = useSelector((state) => state.module.allCourses?.currentCourses);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách khóa học" />

                    <NavMenu
                        nameHome="Trang chủ"
                        pathHome="/course"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/course/create"
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
                                                <option value="order">Tên khóa học</option>
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
                                                        <div className="text-center">Tên khóa học</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Ảnh nền</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Chương</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Bài học</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Thời lượng</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Loại</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Trạng thái</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Ngày tạo</div>
                                                    </th>
                                                    <th>
                                                        <div className="text-center">Hành động</div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {allCourse?.slice(-10).map((course) => (
                                                    <ListCourseItem key={course._id} data={course} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="float-right">
                                            <ul className="pagination mr-4" role="navigation">
                                                <li className="page-item">
                                                    <Link className="page-link" aria-hidden="true">
                                                        ‹
                                                    </Link>
                                                </li>
                                                <li className="page-item active" aria-current="page">
                                                    <Link className="page-link">1</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=2">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=3">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/softcard/orders?page=2" rel="next">
                                                        ›
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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

export default ListCourse;
