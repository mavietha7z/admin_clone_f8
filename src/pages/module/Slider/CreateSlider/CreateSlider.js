import classNames from 'classnames/bind';
import { useState } from 'react';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateSlider() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm trình diễn ảnh" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Tạo trình diễn ảnh</h2>
                                </div>

                                <form
                                    method="POST"
                                    action="https://thenhanh.vn/thenhanhcp/sliders"
                                    acceptCharset="UTF-8"
                                    encType="multipart/form-data"
                                >
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="slider_name">Tên:</label>
                                                <input
                                                    name="slider_name"
                                                    type="text"
                                                    className="form-control"
                                                    id="slider_name"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="slider_image">Hình ảnh:</label>
                                                {/* <img className="imgPreview" src /> */}
                                                <button type="button" className="btn btn-default ml-3">
                                                    Chọn ảnh
                                                </button>
                                            </div>
                                            <div class="form-group">
                                                <label for="slider_url">Url:</label>
                                                <input
                                                    name="slider_url"
                                                    type="text"
                                                    class="form-control"
                                                    id="slider_url"
                                                    placeholder="Slider Url"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="slider_btn_text">Tên nút bấm:</label>
                                                <input
                                                    name="slider_btn_text"
                                                    type="text"
                                                    className="form-control"
                                                    id="slider_btn_text"
                                                    placeholder="Button Name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="slider_btn_url">Đường dẫn của nút:</label>
                                                <input
                                                    name="slider_btn_url"
                                                    type="text"
                                                    className="form-control"
                                                    id="slider_btn_url"
                                                    placeholder="Button Url"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="slider_text">Mô tả:</label>
                                                <textarea
                                                    name="slider_text"
                                                    id="slider_text"
                                                    className="form-control"
                                                    rows={5}
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lang">Ngôn ngữ:</label>
                                                <select className="form-control" name="lang">
                                                    <option value="us">English</option>
                                                    <option value="vi">Tiếng Việt</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sort_order">Thứ tự:</label>
                                                <input
                                                    name="sort_order"
                                                    type="text"
                                                    className="form-control"
                                                    id="sort_order"
                                                    placeholder="Sort Order"
                                                    defaultValue
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="status" style={{ width: '100%' }}>
                                                    Trạng thái:
                                                </label>
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
                                            Thêm mới
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

export default CreateSlider;
