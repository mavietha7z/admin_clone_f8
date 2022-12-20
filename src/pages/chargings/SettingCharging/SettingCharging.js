import classNames from 'classnames/bind';
import Editor from '~/components/Editor';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function SettingCharging() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Đổi thẻ cào" />
                    <NavMenu
                        nameHome="Trang chính"
                        pathHome="/chargings"
                        nameTime="Thẻ chờ"
                        pathTime="/chargings/pending"
                        namePlus="Loại thẻ"
                        pathPlus="/chargings/telcos"
                        nameCheck="NCC"
                        pathCheck="/chargings/provider"
                        nameSend="Test"
                        pathSend="/chargings/testcard"
                        nameSetting="Cấu hình"
                        pathSetting="/chargings/setting"
                        float="float-right pt-4"
                    />
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
                                                    defaultValue="ĐỔI THẺ CÀO"
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
                                                                <strong>CHÚ Ý KHI ĐỔI THẺ :</strong>
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    ►  THẺ SAI MỆNH GIÁ SẼ BỊ MẤT KHÁCH HÀNG VUI LÒNG
                                                                    NHẬP ĐÚNG THÔNG TIN THẺ
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    ► THẺ BÁO ĐANG CHỜ QUÁ 3P ĐỀU LÀ THẺ LỖI MONG QUÝ
                                                                    KHÁCH XEM LẠI THẺ
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    ► KẾT NỐI API :{' '}
                                                                    <a href="/merchant/list">BẤM VÀO ĐÂY</a>
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    ►► XEM LỊCH SỬ NẠP THẺ :{' '}
                                                                    <a href="/doithecao">BẤM VÀO ĐÂY</a>
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

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Cấu hình chung</h3>
                            </div>
                            <form method="POST" action="/chargings/setting/module" acceptCharset="UTF-8">
                                <input
                                    name="_token"
                                    type="hidden"
                                    defaultValue="fu5RnQtywzyS751plEpKfO4UEuEMiwniIvorMCHy"
                                />
                                <div className="card-body row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="key">Dừng tẩy thẻ: </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="stopcharging" defaultValue={1} />
                                                Có
                                            </label>
                                            <label className="radio-inline">
                                                <input
                                                    type="radio"
                                                    name="stopcharging"
                                                    defaultValue={0}
                                                    defaultChecked
                                                />
                                                Không
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="key">Lấy phí tự động: </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="auto_fee" defaultValue={1} />
                                                Có
                                            </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="auto_fee" defaultValue={0} defaultChecked />
                                                Không
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="key">Hiện Google Captcha khi vượt quá (x thẻ): </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="maxpendingcard"
                                                defaultValue={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="key">Khớp tự động: </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="auto_match" defaultValue={1} defaultChecked />
                                                Bật
                                            </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="auto_match" defaultValue={0} />
                                                Tắt
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
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

export default SettingCharging;
