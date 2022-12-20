import classNames from 'classnames/bind';
import { useState } from 'react';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditCharging() {
    const [status, setStatus] = useState(true);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa loại thẻ" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Sửa loại thẻ</h2>
                                </div>
                                <form method="POST" action="/chargings/telcos/6/update" acceptCharset="UTF-8">
                                    <input name="_method" type="hidden" defaultValue="PATCH" />
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="fu5RnQtywzyS751plEpKfO4UEuEMiwniIvorMCHy"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Tên:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name"
                                                    defaultValue="Vietnamobile ( 88 )"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="key">Khóa mã:</label>
                                                <input
                                                    name="key"
                                                    className="form-control"
                                                    placeholder="Ví dụ: VIETTEL"
                                                    defaultValue="VIETNAMOBILE"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="code_length">
                                                    Chiều dài mã nạp (cách nhau dấu phẩy):
                                                </label>
                                                <input name="code_length" defaultValue="" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="serial_length">
                                                    Chiều dài Serial (cách nhau dấu phẩy):
                                                </label>
                                                <input name="serial_length" defaultValue="" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="icon">Ảnh:</label>
                                                <img src="" alt="" style={{ maxWidth: 100, maxHeight: 100 }} />
                                                <input
                                                    type="hidden"
                                                    name="icon"
                                                    id="icon"
                                                    className="inputImg"
                                                    defaultValue=""
                                                />
                                                <div className="mt-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-default"
                                                        onclick="selectFileWithCKFinder('icon', 'logo-icon')"
                                                    >
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
                                                <label htmlFor="value">Các mệnh giá:</label>
                                                <input
                                                    name="value"
                                                    className="form-control"
                                                    defaultValue="10000,20000,30000,50000,100000,200000,300000,500000"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sort">Sắp xếp:</label>
                                                <input name="sort" className="form-control" defaultValue={3} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="key">Yêu cầu khách gửi mệnh giá:</label>
                                                <select name="send_value" className="form-control">
                                                    <option value={1} selected>
                                                        Có
                                                    </option>
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
    );
}

export default EditCharging;
