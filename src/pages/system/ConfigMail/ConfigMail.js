import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ConfigMail() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cấu hình Mail" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">Cấu hình mail hiện tại</h2>
                                <div className="float-right">
                                    <Link to="/web/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Quản lý gửi Email</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row p-0">
                                    <div className="col-sm-12">
                                        <form method="POST" action="/sendmail/setting" acceptCharset="UTF-8">
                                            <input name="_method" type="hidden" defaultValue="PATCH" />
                                            <input
                                                name="_token"
                                                type="hidden"
                                                defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                            />
                                            <div className="card-body row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="from_email">Email gửi thư:</label>
                                                        <input
                                                            name="from_email"
                                                            type="text"
                                                            className="form-control"
                                                            id="from_email"
                                                            placeholder="Email"
                                                            defaultValue="mavietha.info@gmail.com"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="from_name">Tên người gửi:</label>
                                                        <input
                                                            name="from_name"
                                                            type="text"
                                                            className="form-control"
                                                            id="from_name"
                                                            placeholder="Tên"
                                                            defaultValue="Hà 2CM"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="driver">Hình thức gửi mail:</label>
                                                        <select name="driver" className="form-control" id="driver">
                                                            <option value="Smtp">Gửi mail bằng Smtp</option>
                                                            <option value="Ses">Gửi mail bằng Amazon Ses</option>
                                                            <option value="Sendgrid" selected>
                                                                Gửi mail bằng Sendgrid
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    Lưu cấu hình
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="card-header">
                                <h2 className="card-title">Mail đã cài</h2>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="stock" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên</th>
                                                    <th>Driver</th>
                                                    <th>Trạng thái</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Gửi mail bằng Smtp</td>
                                                    <td>Smtp</td>
                                                    <td>
                                                        <div
                                                            data-table="softcard_products"
                                                            data-id={47}
                                                            data-col="status"
                                                            className={
                                                                status
                                                                    ? cx('switch', 'round', 'on')
                                                                    : cx('switch', 'round', 'off')
                                                            }
                                                            style={{ verticalAlign: 'top', marginLeft: 10 }}
                                                            onClick={() => handleToggleStatus()}
                                                        >
                                                            <div className={cx('toggle')} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <Link to="/sendmail/driver/3/update">
                                                                <span className="btn btn-info btn-sm">
                                                                    {/* <FaPencilAlt /> */}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card-header">
                                <h2 className="card-title">Mail chưa cài đặt</h2>
                            </div>
                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="stock" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên</th>
                                                    <th>Driver</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
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

export default ConfigMail;
