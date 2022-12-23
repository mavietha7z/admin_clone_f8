import classNames from 'classnames/bind';
import Tile from '~/components/Title';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookMedical, faMinus, faNewspaper, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { getAllUsers } from '~/services/apiAuth';
import { createAxios } from '~/redux/createInstance';
import { loginSuccess } from '~/redux/reducer/authReducer';
import { useEffect, useState } from 'react';
import { getAllCourse } from '~/services/apiCourse';

const cx = classNames.bind(styles);

function Home() {
    const [courseFree, setCourseFree] = useState(0);
    const [coursePro, setCoursePro] = useState(0);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth?.login?.currentUser);
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    const allUser = useSelector((state) => state.module?.allUsers?.currentUsers);
    const allCourse = useSelector((state) => state.module.allCourses?.currentCourses);

    useEffect(() => {
        let countCourseFree = 0;
        let countCoursePro = 0;

        for (let i = 0; i < allCourse.length; i++) {
            if (allCourse[i].price === 0) {
                countCourseFree++;
            } else {
                countCoursePro++;
            }
            setCourseFree(countCourseFree);
            setCoursePro(countCoursePro);
        }
    }, [allCourse]);

    useEffect(() => {
        const fetchApi = async () => {
            await getAllUsers(dispatch, user?.accessToken, axiosJWT);
            await getAllCourse(dispatch, user?.accessToken, axiosJWT);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Tile name="Bảng quản trị" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-3">
                        <div className={cx('info-box')}>
                            <span className={cx('info-box-icon', 'bg-primary')}>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            <div className={cx('box-content')}>
                                <span className={cx('info-box-text')}>Khóa học miễn phí</span>
                                <span className={cx('info-box-number')}>{courseFree}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={cx('info-box')}>
                            <span className={cx('info-box-icon', 'bg-danger')}>
                                <FontAwesomeIcon icon={faBookMedical} />
                            </span>
                            <div className={cx('box-content')}>
                                <span className={cx('info-box-text')}>Khóa học có phí</span>
                                <span className={cx('info-box-number')}>{coursePro}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={cx('info-box')}>
                            <span className={cx('info-box-icon', 'bg-info')}>
                                <FontAwesomeIcon icon={faNewspaper} />
                            </span>
                            <div className={cx('box-content')}>
                                <span className={cx('info-box-text')}>Tổng blog</span>
                                <span className={cx('info-box-number')}>0đ</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={cx('info-box')}>
                            <span className={cx('info-box-icon', 'bg-success')}>
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <div className={cx('box-content')}>
                                <span className={cx('info-box-text')}>Tổng người dùng</span>
                                <span className={cx('info-box-number')}>{allUser?.length}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <div className="card mb-4">
                            <div className={cx('card-header')}>
                                <h3 className={cx('card-title')}>Khóa học miễn phí</h3>
                                <div className="card-tools">
                                    <button
                                        className={cx('btn-tool')}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            <div id="collapseOne" className="collapse show">
                                <div className="card-body p-0">
                                    <div className={cx('table-responsive')}>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>D626A2453C775C</span>
                                                        <br />
                                                        <small className="text-muted">28-04-2022 12:21</small>
                                                        <br />
                                                        <strong className="text-success">836,400đ</strong>
                                                    </td>
                                                    <td>
                                                        <b>Nguyễn Thanh Trọng</b>
                                                        <br />
                                                        <span>nmanh5059@gmail.com</span>
                                                        <br />
                                                        <span>0706661234</span>
                                                    </td>
                                                    <td>
                                                        <label className="badge badge-secondary">CHỜ</label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center py-3">
                                <Link className="card-link" to="/course" target="_blank">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mb-4">
                            <div className={cx('card-header')}>
                                <h3 className={cx('card-title')}>Khóa học có phí</h3>
                                <div className="card-tools">
                                    <button
                                        className={cx('btn-tool')}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            <div id="collapseTwo" className="collapse show">
                                <div className="card-body p-0">
                                    <div className={cx('table-responsive')}>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>W637E6749A54C5</span>
                                                        <br />
                                                        <small className="text-muted">24-11-2022 01:32</small>
                                                        <br />
                                                        <strong className="text-danger">100,000đ</strong>
                                                    </td>
                                                    <td>
                                                        <b>Mã Việt Hà</b>
                                                        <br />
                                                        <span>Mavietha.info@gmail.com</span>
                                                        <br />
                                                        <span>0706661234</span>
                                                    </td>
                                                    <td>
                                                        <label className="badge badge-warning">ĐANG SỬ LÝ</label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center py-3">
                                <Link className="card-link" to="/wallet/orderwithdraw" target="_blank">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mb-4">
                            <div className={cx('card-header')}>
                                <h3 className={cx('card-title')}>Tất cả bài viết</h3>
                                <div className="card-tools">
                                    <button
                                        className={cx('btn-tool')}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseThree"
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            <div id="collapseThree" className="collapse show">
                                <div className="card-body p-0">
                                    <div className={cx('table-responsive')}>
                                        <ul className={cx('transfer-list')}>
                                            <li className={cx('transfer-item')}>
                                                {/* <BiChevronRight /> */}
                                                <span className="text-primary">
                                                    <strong> T628A29E9F16F4</strong>
                                                </span>
                                                <small className="text-success"> (PAY_SUCCESS)</small>
                                                <span className="badge badge-success float-right">-32,000 VND</span>
                                                <span className={cx('description')}>ad|||Mavietha7z</span>
                                                <small className="text-dark">
                                                    <strong className="text-danger">
                                                        <span>anhduongdangius1</span>
                                                        {/* <GoArrowRight className={cx('icon-right')} /> */}
                                                        <span>Mã Việt Hà </span>
                                                    </strong>
                                                    <span> / 22-05-2022 19:18 / IP: 14.162.4.204</span>
                                                </small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center py-3">
                                <Link className="card-link" to="/transfer-history" target="_blank">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="card mb-4">
                            <div className={cx('card-header')}>
                                <h3 className={cx('card-title')}>Hoạt động gần đây</h3>
                                <div className="card-tools">
                                    <button
                                        className={cx('btn-tool')}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseFive"
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            <div id="collapseFive" className="collapse show">
                                <div className="card-body p-0">
                                    <div className={cx('table-responsive')}>
                                        <ul className={cx('transfer-list')}>
                                            <li className={cx('transfer-item')}>
                                                {/* <BiChevronRight /> */}
                                                <span className="text-dark">
                                                    <strong> ZING: 2341231231</strong>
                                                    <strong> / 23412312d</strong>
                                                </span>
                                                <span className="badge badge-warning float-right">20,000 đ</span> <br />
                                                <small className="text-muted">2022-11-24 15:44:41</small>
                                                <small className="text-dark float-right">(Thẻ chờ)</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center py-3">
                                <Link className="card-link" to="/chargings" target="_blank">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mb-4">
                            <div className={cx('card-header')}>
                                <h3 className={cx('card-title')}>Bình luận của thành viên</h3>
                                <div className="card-tools">
                                    <button
                                        className={cx('btn-tool')}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseSix"
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            <div id="collapseSix" className="collapse show">
                                <div className="card-body p-0">
                                    <div className={cx('table-responsive')}>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Khách</th>
                                                    <th>Số tiền</th>
                                                    <th>SP</th>
                                                    <th>TT</th>
                                                    <th>Ngày</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="/users?type=id&keyword=320">nguyentuananh2019</Link>
                                                        <br />
                                                        <span>0327480633</span>
                                                    </td>
                                                    <td>57,600 VND</td>
                                                    <td>3 x Garena 20.000đ</td>
                                                    <td>
                                                        <label className="badge badge-success">HOÀN THÀNH</label>
                                                    </td>
                                                    <td>2022-03-28 12:07:25</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center py-3">
                                <Link className="card-link" to="/softcard/orders" target="_blank">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card mb-4">
                            <div className={cx('card-header')}>
                                <h3 className={cx('card-title')}>Thành viên</h3>
                                <div className="card-tools">
                                    <span
                                        className="badge badge-success mr-3"
                                        style={{
                                            height: 26,
                                            lineHeight: '14px',
                                            padding: '6px 10px',
                                        }}
                                    >
                                        Hôm nay 0
                                    </span>
                                    <span
                                        className="badge badge-primary mr-3"
                                        style={{
                                            height: 26,
                                            lineHeight: '14px',
                                            padding: '6px 10px',
                                        }}
                                    >
                                        Tổng {allUser?.length}
                                    </span>
                                    <button
                                        className={cx('btn-tool')}
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseFour"
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            <div id="collapseFour" className="collapse show">
                                <div className="card-body p-0">
                                    <div className={cx('table-responsive')}>
                                        <ul className={cx('transfer-list')}>
                                            {allUser?.slice(-5)?.map((user) => (
                                                <li className={cx('transfer-item')} key={user._id}>
                                                    <strong className="text-uppercase">
                                                        <Link to="/users/449/edit">{user.name}</Link>
                                                    </strong>
                                                    <br />
                                                    <FontAwesomeIcon icon={faEnvelope} className="text-danger" />
                                                    <span className="ml-2">{user.email}</span>
                                                    <br />
                                                    {!!user.phone && (
                                                        <>
                                                            <FontAwesomeIcon icon={faPhone} className="text-success" />
                                                            <span className="ml-2">{!!user.phone}</span>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center py-3">
                                <Link className="card-link" to="/users" target="_blank">
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
