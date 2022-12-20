import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateSEO() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Tạo link SEO" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Tạo seo meta cho website</h2>
                                </div>
                                <form method="POST" action="/seo" acceptCharset="UTF-8">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Url:</label>
                                                <input
                                                    name="link"
                                                    type="text"
                                                    className="form-control"
                                                    id="link"
                                                    placeholder="Copy Url muốn tạo vào đây: http://"
                                                    defaultValue=""
                                                    required="true"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label style={{ display: 'block' }}>Ảnh đại diện của trang</label>
                                                <div className="preview">
                                                    {/* <img id="logo-icon" className="imgPreview" src /> */}
                                                    <input
                                                        type="hidden"
                                                        name="image"
                                                        id="image"
                                                        className="inputImg"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <button type="button" className="btn btn-primary">
                                                    Chọn ảnh
                                                </button>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="language">Ngôn ngữ:</label>
                                                <select className="form-control" name="lang">
                                                    <option value="vi">Tiếng Việt</option>
                                                    <option value="us">English</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="title">Tiêu đề SEO:</label>
                                                <input
                                                    name="meta[title]"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Khoảng 64 ký tự"
                                                    defaultValue=""
                                                    required="true"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Mô tả SEO:</label>
                                                <textarea
                                                    name="meta[description]"
                                                    className="form-control"
                                                    placeholder="Mô tả seo, khoảng 168 ký tự"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="keyword">Từ khóa SEO:</label>
                                                <textarea
                                                    name="meta[keyword]"
                                                    className="form-control"
                                                    placeholder="Từ khóa seo"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Tạo mới
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

export default CreateSEO;
