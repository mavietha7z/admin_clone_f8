import { useState } from 'react';
import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateCharging() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm loại thẻ" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Thêm loại thẻ</h2>
                                </div>
                                <form method="POST" action="/chargings/telcos/postcreate" acceptCharset="UTF-8">
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Tên:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Ví dụ: VIETTEL"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="key">Khóa mã:</label>
                                                <input
                                                    name="key"
                                                    className="form-control"
                                                    placeholder="Ví dụ: VIETTEL"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="code_length">
                                                    Chiều dài mã nạp (cách nhau dấu phẩy):
                                                </label>
                                                <input name="code_length" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="serial_length">
                                                    Chiều dài Serial (cách nhau dấu phẩy):
                                                </label>
                                                <input name="serial_length" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="icon">Ảnh minh họa:</label>
                                                <div>
                                                    {/* <img id="logo-icon" className="imgPreview" src /> */}
                                                    <input type="hidden" name="icon" id="icon" className="inputImg" />
                                                </div>
                                                <div className="ml-4">
                                                    <button type="button" className="btn btn-default">
                                                        Chọn ảnh
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Mô tả:</label>
                                                <textarea
                                                    name="description"
                                                    className="form-control"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="value">Các mệnh giá hỗ trợ:</label>
                                                <input name="value" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sort">Sắp xếp:</label>
                                                <input
                                                    type="number"
                                                    name="sort"
                                                    className="form-control"
                                                    defaultValue={0}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="key">Yêu cầu khách gửi mệnh giá:</label>
                                                <select name="send_value" className="form-control">
                                                    <option value={1}>Có</option>
                                                    <option value={0}>Không</option>
                                                </select>
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
                                            Thêm
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

export default CreateCharging;
