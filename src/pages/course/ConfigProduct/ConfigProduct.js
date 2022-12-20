import classNames from 'classnames/bind';
import Editor from '~/components/Editor';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function ConfigProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Cấu hình sản phẩm" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-8">
                        <div className="card rounded-lg">
                            <div className="card-header bg-white">
                                <h2 className="card-title mb-0">Cấu hình văn bản</h2>
                            </div>

                            <div className="card-body row pt-0">
                                <div className="col-12" style={{ padding: 20 }}>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="vi-tab"
                                                data-toggle="tab"
                                                href="#vi"
                                                role="tab"
                                                aria-controls="vi"
                                                aria-selected="true"
                                            >
                                                Tiếng Việt
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="us-tab"
                                                data-toggle="tab"
                                                href="#us"
                                                role="tab"
                                                aria-controls="us"
                                                aria-selected="false"
                                            >
                                                English
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Content */}
                                    <div className="tab-content" id="myTabContent" style={{ padding: 20 }}>
                                        <div
                                            className="tab-pane fade show active"
                                            id="vi"
                                            role="tabpanel"
                                            aria-labelledby="vi-tab"
                                        >
                                            <div className="form-group">
                                                <label htmlFor="key" className="mb-3">
                                                    Meta Title:
                                                </label>
                                                <input
                                                    name="meta_title"
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="MUA MÃ THẺ CÀO GIẢM GIÁ ĐẾN 5%"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="value" className="mb-3">
                                                    Mô tả về dịch vụ:
                                                </label>
                                                <Editor
                                                    desc={
                                                        <>
                                                            <p>
                                                                <strong>
                                                                    ► TẠI ĐÂY BÁN TẤT CẢ CÁC LOẠI THẺ CÀO ĐIỆN THOẠI  ,
                                                                    THẺ GAME ONLINE GIẢM GIÁ 5% - 15% 
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    ► XEM LỊCH SỬ MUA THẺ :{' '}
                                                                    <a href="history/softcard">BẤM VÀO ĐÂY</a>
                                                                </strong>
                                                            </p>
                                                        </>
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="us" role="tabpanel" aria-labelledby="us-tab">
                                            <div className="form-group">
                                                <label htmlFor="key" className="mb-3">
                                                    Meta Title:
                                                </label>
                                                <input name="meta_title" type="text" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="value" className="mb-3">
                                                    Mô tả về dịch vụ:
                                                </label>
                                                <Editor />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer" style={{ borderTop: 0 }}>
                                        <button type="submit" className="btn btn-primary">
                                            Lưu cấu hình
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h2 className="card-title mb-0">Cấu hình chung</h2>
                            </div>
                            <form method="POST" action="/softcard/settingm" acceptCharset="UTF-8">
                                <input
                                    name="_token"
                                    type="hidden"
                                    defaultValue="YFtpMspUfhyWYfVYQlbbyJCVtWAPf98inSRasZEN"
                                />
                                <div className="card-body row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="key" className="mr-3">
                                                Ngừng bán:
                                            </label>
                                            <label className="radio-inline mr-3">
                                                <input type="radio" name="stopsell" defaultValue={1} />
                                                <span>Không</span>
                                            </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="stopsell" defaultValue={0} defaultChecked />
                                                <span>Có</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="key">Số thẻ mua tối đa trong một đơn hàng:</label>
                                            <input
                                                name="maxbuy"
                                                type="text"
                                                className="form-control"
                                                defaultValue={10}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer" style={{ borderTop: 0 }}>
                                    <input
                                        name="settingModule"
                                        type="hidden"
                                        className="form-control"
                                        defaultValue="Postsetting"
                                    />
                                    <button type="submit" className="btn btn-primary">
                                        Lưu cấu hình
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfigProduct;
