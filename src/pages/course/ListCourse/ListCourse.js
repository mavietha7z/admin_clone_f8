import Swal from 'sweetalert2';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Title from '~/components/Title';
import NavMenu from '~/components/NavMenu';
import HeadingTable from '~/components/HeadingTable';
import { getCourseByType } from '~/services/apiCourse';
import ListCourseItem from '~/components/ListCourseItem';

import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

const MySwal = withReactContent(Swal);

function ListCourse() {
    const [courses, setCourses] = useState([]);

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
                    const result = await getCourseByType(currentUser.accessToken, type);

                    if (result.statusCode === 0) {
                        setCourses(result.data);
                    } else {
                        MySwal.fire('Lỗi', `${result.message || 'Lỗi lấy dữ liệu khóa học'}`, 'error');
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
                                                <option value="order">Khóa học Pro</option>
                                                <option value="order">Tên miễn phí</option>
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
                                            <HeadingTable
                                                headings={[
                                                    { title: 'Tên khóa học' },
                                                    { title: 'Ảnh xem trước' },
                                                    { title: 'Chương' },
                                                    { title: 'Bài học' },
                                                    { title: 'Thời lượng' },
                                                    { title: 'Loại' },
                                                    { title: 'Trạng thái' },
                                                    { title: 'Ngày tạo / Cập nhật' },
                                                    { title: 'Hành động' },
                                                ]}
                                            />

                                            <tbody>
                                                {courses.map((course) => (
                                                    <ListCourseItem key={course._id} data={course} />
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

export default ListCourse;
