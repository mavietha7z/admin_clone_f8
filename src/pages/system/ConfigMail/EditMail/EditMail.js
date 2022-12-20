import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditMail() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cập nhật cấu hình mail" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Thông tin kết nối</h3>
                                <div className="float-right">
                                    <Link to="/web/create">
                                        <button className="btn btn-success">
                                            {/* <FaPlusCircle /> */}
                                            <span>Kho liên kết</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card-body" style={{ paddingTop: 0 }}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form method="POST" action="/sendmail/driver/3/update" acceptCharset="UTF-8">
                                            <input name="_method" type="hidden" defaultValue="PATCH" />
                                            <input
                                                name="_token"
                                                type="hidden"
                                                defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                            />
                                            <div className="card-body row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Tên:</label>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Tên"
                                                            defaultValue="Gửi mail bằng Smtp"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="driver">Provider:</label>
                                                        <input
                                                            name="driver"
                                                            type="text"
                                                            className="form-control"
                                                            id="driver"
                                                            placeholder="Driver"
                                                            defaultValue="Smtp"
                                                            readOnly="readonly"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="host">host:</label>
                                                        <input
                                                            name="configs[host]"
                                                            type="text"
                                                            className="form-control"
                                                            id="host"
                                                            defaultValue="smtp.gmail.com"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="username">username:</label>
                                                        <input
                                                            name="configs[username]"
                                                            type="text"
                                                            className="form-control"
                                                            id="username"
                                                            defaultValue="xh16c2.ddtien@gmail.com"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">password:</label>
                                                        <input
                                                            name="configs[password]"
                                                            type="text"
                                                            className="form-control"
                                                            id="password"
                                                            defaultValue="tjnhjaje"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="port">port:</label>
                                                        <input
                                                            name="configs[port]"
                                                            type="text"
                                                            className="form-control"
                                                            id="port"
                                                            defaultValue={587}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="encryption">encryption:</label>
                                                        <input
                                                            name="configs[encryption]"
                                                            type="text"
                                                            className="form-control"
                                                            id="encryption"
                                                            defaultValue="tls"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="sendmail">sendmail:</label>
                                                        <input
                                                            name="configs[sendmail]"
                                                            type="text"
                                                            className="form-control"
                                                            id="sendmail"
                                                            defaultValue="/usr/sbin/sendmail -bs"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="status">Status:</label>
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    Cập nhật
                                                </button>
                                            </div>
                                        </form>
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

export default EditMail;
