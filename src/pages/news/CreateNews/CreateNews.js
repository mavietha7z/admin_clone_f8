import classNames from 'classnames/bind';
import { useState } from 'react';
import EditorBlog from '~/components/EditorBlog';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateNews() {
    const [status, setStatus] = useState(false);

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
                                                        defaultValue=""
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
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label htmlFor="author">Tác giả:</label>
                                                    <input
                                                        name="author"
                                                        type="text"
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
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label htmlFor="view_count">Lượt xem:</label>
                                                    <input
                                                        name="view_count"
                                                        type="text"
                                                        className="form-control"
                                                        id="view_count"
                                                        defaultValue={0}
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
                                                        type="date"
                                                        className="form-control"
                                                        id="publish_date"
                                                        defaultValue=""
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
                                                <EditorBlog />
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
                                            Thêm tin
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

export default CreateNews;
