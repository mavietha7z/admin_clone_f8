import { faHouse, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ListCourse() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Danh sách khóa học" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className={cx('card-header', 'bg-white', 'header-card')}>
                                <div className="col-md-6 float-left pl-0">
                                    <Link to="/course/list" className="mr-2">
                                        <button className="btn btn-info">
                                            <FontAwesomeIcon icon={faHouse} />
                                            <span>Home</span>
                                        </button>
                                    </Link>
                                    <Link to="/course/create" className="mr-2">
                                        <button className="btn btn-success">
                                            <FontAwesomeIcon icon={faPlus} />
                                            <span>Thêm khóa học</span>
                                        </button>
                                    </Link>
                                </div>

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
                                                        <div className="text-center">Giá</div>
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
                                                <tr>
                                                    <td>
                                                        <div className="text-center">Kiến Thức Nhập Môn IT</div>
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
                                                            <div>4 chương</div>
                                                            <button className="btn btn-success btn-sm mt-3">
                                                                Thêm chương
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">12 bài học</div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">03 giờ 26 phút</div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">Miễn phí</div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <label className="badge badge-success">BẬT</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">2022-03-28 12:07:25</div>
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
                                                                <Link to="/course/detail">
                                                                    <span className="text-white">Chi tiết</span>
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
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
