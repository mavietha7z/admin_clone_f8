import classNames from 'classnames/bind';
import { useState } from 'react';
import { Image } from '~/assets/image';
import Editor from '~/components/Editor';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditNews() {
    const [status, setStatus] = useState(true);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="News management" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h2 className="card-title">Tạo bài mới</h2>
                                </div>
                                <form
                                    method="POST"
                                    action="https://thenhanh.vn/thenhanhcp/news"
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
                                            <div className="form-group row">
                                                <div className="col-md-6">
                                                    <label htmlFor="title">Tiêu đề:</label>
                                                    <input
                                                        name="title"
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        placeholder="Title"
                                                        defaultValue="HD RÚT TIỀN VỀ NGÂN HÀNG/VÍ ĐIỆN TỬ CỦA THENHANH.VN"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="news_slug">Đường dẫn SEO:</label>
                                                    <input
                                                        name="news_slug"
                                                        type="text"
                                                        className="form-control"
                                                        id="news_slug"
                                                        placeholder="Đường dẫn SEO"
                                                        defaultValue="huong-dan-rut-tien-ve-ngan-hang-vi-dien-tu-cua-thenhanhvn"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label htmlFor="author">Tác giả:</label>
                                                    <input
                                                        name="author"
                                                        type="text"
                                                        disabled={true}
                                                        className="form-control"
                                                        id="author"
                                                        defaultValue="Admin"
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="author_email">Email:</label>
                                                    <input
                                                        name="author_email"
                                                        type="text"
                                                        disabled={true}
                                                        className="form-control"
                                                        id="author_email"
                                                        defaultValue="support@thenhanh.vn"
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="language">Danh mục:</label>
                                                    <div id="cats">
                                                        <select className="form-control" name="cats">
                                                            <option value>admin.root_cat</option>
                                                            <option value={2}>Tin khuyến mãi</option>
                                                            <option value={9}>Hướng dẫn</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="url">Ảnh:</label>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <button type="button" className="btn btn-default">
                                                                Chọn ảnh
                                                            </button>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <img
                                                                id="logo-icon"
                                                                src={Image.gif}
                                                                alt=""
                                                                style={{ maxHeight: 100 }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label htmlFor="view_count">Lượt xem:</label>
                                                    <input
                                                        name="view_count"
                                                        type="text"
                                                        className="form-control"
                                                        id="view_count"
                                                        defaultValue={534691}
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="language">Ngôn ngữ:</label>
                                                    <select className="form-control" name="language">
                                                        <option value="vi">Tiếng Việt</option>
                                                        <option value="us">English</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="publish_date">Ngày đăng:</label>
                                                    <input
                                                        name="publish_date"
                                                        type="text"
                                                        className="form-control"
                                                        id="publish_date"
                                                        defaultValue="14 / 02 / 2022"
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="status" className="d-block">
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
                                            <div className="form-group">
                                                <label htmlFor="short_description">Mô tả ngắn:</label>
                                                <textarea
                                                    name="short_description"
                                                    id="short_description"
                                                    className="form-control"
                                                    rows={2}
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content">Nội dung:</label>
                                                <Editor />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label htmlFor="tags">Seo Title:</label>
                                                        <input
                                                            name="meta[title]"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Khoảng 60 ký tự"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label htmlFor="tags">Seo Description:</label>
                                                        <input
                                                            name="meta[description]"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Nội dung mô tả cho seo, khoảng 158 ký tự"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label htmlFor="tags">Seo Keyword:</label>
                                                        <input
                                                            name="meta[keyword]"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Các từ khóa seo của bài viết"
                                                        />
                                                    </div>
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

export default EditNews;
