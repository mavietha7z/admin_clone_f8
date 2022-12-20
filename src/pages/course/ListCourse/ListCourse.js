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
                                                    <th>Tên khóa học</th>
                                                    <th>Ảnh nền</th>
                                                    <th>Chương</th>
                                                    <th>Bài học</th>
                                                    <th>Thời lượng</th>
                                                    <th>Giá</th>
                                                    <th>Trạng thái</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Kiến Thức Nhập Môn IT</td>
                                                    <td>
                                                        <img
                                                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                                            alt=""
                                                            style={{
                                                                width: '160px',
                                                                height: 'auto',
                                                                borderRadius: 4,
                                                            }}
                                                        />
                                                    </td>
                                                    <td>3 chương</td>
                                                    <td>13 bài học</td>
                                                    <td>01 giờ 34 phút</td>
                                                    <td>0 VND</td>
                                                    <td>
                                                        <label className="badge badge-success">BẬT</label>
                                                    </td>
                                                    <td>2022-03-28 12:07:25</td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <div className="action-buttons text-center">
                                                                <span
                                                                    className={cx(
                                                                        'btn btn-success edit-softcard-btn btn-sm',
                                                                        'btn-action'
                                                                    )}
                                                                    data-toggle="modal"
                                                                    data-target="#total-order"
                                                                >
                                                                    <span>Chi tiết</span>
                                                                </span>
                                                            </div>
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
