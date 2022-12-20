import classNames from 'classnames/bind';
import Editor from '~/components/Editor';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateStatic() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm mới trang tĩnh" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h2 className="card-title">Tạo trang mới</h2>
                                </div>
                                <form method="POST" action="/pages" acceptCharset="UTF-8" encType="multipart/form-data">
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
                                                        placeholder="Tiêu đề"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="slug">Đường dẫn SEO:</label>
                                                    <input
                                                        name="slug"
                                                        type="text"
                                                        className="form-control"
                                                        id="slug"
                                                        placeholder="Đường dẫn Url"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label htmlFor="language">Ngôn ngữ:</label>
                                                    <select className="form-control" name="language">
                                                        <option value="vi">Tiếng Việt</option>
                                                        <option value="us">English</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="status">Trạng thái:</label>
                                                    <select className="form-control" name="status" id="status">
                                                        <option value={1} selected="selected">
                                                            Bật
                                                        </option>
                                                        <option value={0}>Tắt</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="short_description">Mô tả ngắn:</label>
                                                <textarea
                                                    name="short_description"
                                                    id="short_description"
                                                    className="form-control"
                                                    rows={2}
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Nội dung:</label>

                                                <Editor />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="html_description">Nội dung HTML:</label>
                                                <textarea
                                                    name="html_description"
                                                    id="html_description"
                                                    className="form-control"
                                                    rows={15}
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <label htmlFor="title">Tiêu đề SEO:</label>
                                                    <input
                                                        name="meta[title]"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Tiêu đề seo, 60 ký tự"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <label htmlFor="title">Mô tả SEO:</label>
                                                    <input
                                                        name="meta[description]"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nội dung mô tả khoảng 158 ký tự"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <label htmlFor="title">Từ khóa SEO:</label>
                                                    <input
                                                        name="meta[keyword]"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Các từ khóa seo"
                                                    />
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

export default CreateStatic;
