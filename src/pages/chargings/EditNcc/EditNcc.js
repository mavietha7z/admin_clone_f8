import classNames from 'classnames/bind';
import { useState } from 'react';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditNcc() {
    const [status, setStatus] = useState(true);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cập nhật cấu hình NCC tẩy thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">Thông tin kết nối</h2>
                            </div>
                            <div className="card-body pt-0">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form
                                            method="POST"
                                            action="/chargings/provider/22/update"
                                            acceptCharset="UTF-8"
                                        >
                                            <input name="_method" type="hidden" defaultValue="PATCH" />
                                            <input
                                                name="_token"
                                                type="hidden"
                                                defaultValue="fu5RnQtywzyS751plEpKfO4UEuEMiwniIvorMCHy"
                                            />

                                            <div className="card-body row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Tên nhà cung cấp:</label>
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Tên nhà cung cấp"
                                                            defaultValue="NCC tẩy thẻ Gachthe1s"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="provider">Tên nhà cung cấp:</label>
                                                        <input
                                                            name="provider"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="provider"
                                                            defaultValue="Tsr"
                                                            readOnly="readonly"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="callback">Callback Url kiểu POST:</label>
                                                        <input
                                                            name="callback"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            defaultValue="https://thenhanh.vn/chargingws/Tsr/callback"
                                                            readOnly="readonly"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="callback">Callback Url kiểu GET:</label>
                                                        <input
                                                            name="callback"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            defaultValue="https://thenhanh.vn/chargingws/Tsr/callback"
                                                            readOnly="readonly"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="ip">
                                                            Địa chỉ IP nhà cung cấp (nếu khai báo hệ thống sẽ chỉ nhận
                                                            callback từ IP này):
                                                        </label>
                                                        <input
                                                            name="ip"
                                                            type="text"
                                                            className="form-control"
                                                            id="ip"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="post_url">post_url:</label>
                                                        <input
                                                            name="configs[post_url]"
                                                            type="text"
                                                            className="form-control"
                                                            id="post_url"
                                                            defaultValue="https://gachthe1s.com/chargingws/v2"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="partner_id">partner_id:</label>
                                                        <input
                                                            name="configs[partner_id]"
                                                            type="text"
                                                            className="form-control"
                                                            id="partner_id"
                                                            defaultValue={1028427461}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="partner_key">partner_key:</label>
                                                        <input
                                                            name="configs[partner_key]"
                                                            type="text"
                                                            className="form-control"
                                                            id="partner_key"
                                                            defaultValue="88f9646d7b60bfa0eb59b4c4ca4bdb99"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="status">Trạng thái:</label>
                                                        <input
                                                            name="status"
                                                            id="status"
                                                            type="checkbox"
                                                            defaultValue="status"
                                                            data-toggle="toggle"
                                                            style={{ display: 'none' }}
                                                            defaultChecked="checked"
                                                        />
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

export default EditNcc;
