import classNames from 'classnames/bind';
import { useState } from 'react';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditMerchant() {
    const [status, setStatus] = useState(true);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm tối tác mới" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-title">Tạo đối tác API</h2>
                                </div>
                                <form method="POST" action="/merchants" acceptCharset="UTF-8">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Tên đối tác:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name"
                                                    defaultValue="Mã Việt Hà"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user">Khách hàng:</label>
                                                <input
                                                    name="user"
                                                    type="text"
                                                    className="form-control"
                                                    id="user"
                                                    placeholder="User ID"
                                                    defaultValue="50"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="partner_id">Partner ID:</label>
                                                <input
                                                    name="partner_id"
                                                    type="text"
                                                    className="form-control"
                                                    id="partner_id"
                                                    placeholder="Partner ID"
                                                    defaultValue="0370860761"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="partner_key">Partner Key:</label>
                                                <input
                                                    name="partner_key"
                                                    type="text"
                                                    className="form-control"
                                                    id="partner_key"
                                                    placeholder="Partner Key"
                                                    defaultValue="5b6ee5ffdb92158c52f30e6a4c2d65ac"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="wallet_num">Địa chỉ ví:</label>
                                                <input
                                                    name="wallet_num"
                                                    type="text"
                                                    className="form-control"
                                                    id="wallet_num"
                                                    placeholder="Ví dụ: 00555666888"
                                                    defaultValue="0050238495"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="ips">IP đối tác:</label>
                                                <br />
                                                <div className="bootstrap-tagsinput">
                                                    <input type="text" placeholder="Nhập IP đối tác" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Callback URL:</label>
                                                <input
                                                    name="callback"
                                                    type="text"
                                                    className="form-control"
                                                    id="callback"
                                                    placeholder="http://"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="icon">Kiểu gọi:</label>
                                                <select name="callback_type" className="form-control">
                                                    <option value="GET" selected>
                                                        GET
                                                    </option>
                                                    <option value="POST">POST</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="icon">Json Post ?</label>
                                                <select name="callback_post_type" className="form-control">
                                                    <option value="Json">Json</option>
                                                    <option value>Thông thường</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="icon">Mô-đun:</label>
                                                <select name="module" className="form-control">
                                                    <option value="Charging" selected>
                                                        Đối thẻ cào
                                                    </option>
                                                    <option value="Softcard">Mua mã thẻ</option>
                                                    <option value="Mtopup">Nạp cước</option>
                                                    <option value="Sms">Gửi SMS</option>
                                                    <option value="Product">Thương mại điện tử</option>
                                                    <option value="Hostbill">Quản lý hóa đơn</option>
                                                    <option value="Elearning">Học trực tuyến</option>
                                                    <option value="Document">Tài liệu</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Mô tả về đối tác:</label>
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    className="form-control"
                                                    placeholder="Mô tả"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="checksign">Kiểm tra chữ ký:</label>

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
                                            <div className="form-group">
                                                <label htmlFor="status">Trạng thái:</label>
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
                                            Thêm đối tác
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMerchant;
