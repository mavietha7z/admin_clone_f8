import classNames from 'classnames/bind';
import { useState } from 'react';
import EditorBlog from '~/components/EditorBlog';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function NewsEdit() {
    const [status, setStatus] = useState(true);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa khuyễn mãi" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h2 className="card-title">Sửa</h2>
                                </div>

                                <form
                                    method="POST"
                                    action="/news_cat"
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
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="name">Tên:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Title"
                                                    defaultValue="Tin khuyến mãi"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="slug">Đường dẫn SEO:</label>
                                                <input
                                                    name="url_key"
                                                    type="text"
                                                    className="form-control"
                                                    id="slug"
                                                    placeholder="Đường dẫn SEO"
                                                    defaultValue="tin-khuyen-mai"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="language">Ngôn ngữ:</label>
                                                <select className="form-control" name="lang">
                                                    <option value="vi">Tiếng Việt</option>
                                                    <option value="us">English</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="language">Danh mục:</label>
                                                <div id="product_cat">
                                                    <select className="form-control" name="cat_id">
                                                        <option value>admin.root_cat</option>
                                                        <option value={2}>Tin khuyến mãi</option>
                                                        <option value={9}>Hướng dẫn</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-5">
                                                <label htmlFor="url">Ảnh:</label>
                                                <div className="row">
                                                    <div className="col-md-6 pl-2">
                                                        <button type="button" className="btn btn-info">
                                                            Chọn ảnh
                                                        </button>
                                                    </div>
                                                    <div className="col-md-6">
                                                        {/* <img id="logo-icon" className="imgPreview" src /> */}
                                                        <input
                                                            type="hidden"
                                                            name="image"
                                                            id="image"
                                                            className="inputImg"
                                                            defaultValue
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
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
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="description">Mô tả ngắn:</label>
                                                <EditorBlog />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="sort">Sắp xếp:</label>
                                                <input
                                                    name="sort"
                                                    type="text"
                                                    className="form-control"
                                                    id="sort"
                                                    defaultValue={0}
                                                />
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

export default NewsEdit;
