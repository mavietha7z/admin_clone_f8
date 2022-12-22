import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { getAllCourse } from '~/services/apiCourse';
import moment from 'moment';

const cx = classNames.bind(styles);

function ListCourse() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const allCourses = useSelector((state) => state.courses.allCourses);
    const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);

    useEffect(() => {
        const fetchApi = async () => {
            await getAllCourse(dispatch, axiosJWT, currentUser.accessToken);
        };
        fetchApi();
    }, []);

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
                                                {allCourses?.slice(-10).map((course) => (
                                                    <tr key={course._id}>
                                                        {console.log('course: ', course)}
                                                        <td>
                                                            <div className="text-center">{course.name}</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <img
                                                                    src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                                                    alt=""
                                                                    style={{
                                                                        width: '160px',
                                                                        height: 'auto',
                                                                        borderRadius: 4,
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <div>{course.chapter.length}</div>
                                                                <button className="btn btn-success btn-sm mt-3">
                                                                    Thêm chương
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">0</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">03 giờ 26 phút</div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                {course.price === 0 ? 'Miễn phí' : 'Pro'}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                {course.status ? (
                                                                    <label className="badge badge-success">Bật</label>
                                                                ) : (
                                                                    <label className="badge badge-danger">Tắt</label>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                {moment(course.createdAt).format('DD/MM/YYYY - hh:mm')}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                                <span
                                                                    className={cx(
                                                                        'btn btn-success edit-softcard-btn btn-sm',
                                                                        'btn-action'
                                                                    )}
                                                                    data-toggle="modal"
                                                                    data-target="#total-order"
                                                                >
                                                                    <Link to={`/course/detail/${course._id}`}>
                                                                        <span className="text-white">Chi tiết</span>
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
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
