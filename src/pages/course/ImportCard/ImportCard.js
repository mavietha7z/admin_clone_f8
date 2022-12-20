import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);
function ImportCard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Nhập thẻ vào kho" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="row mb-5">
                                    <div className="col-md-6 mb-5" style={{ paddingRight: 0 }}>
                                        <div className="card card-secondary mb-5">
                                            <div className="card-header bg-secondary">
                                                <h2 className="card-title text-white mb-0">Nhập thẻ từ TEXT</h2>
                                            </div>

                                            <form method="POST" action="/stockcards/importcard" acceptCharset="UTF-8">
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="vxd2ZKIlYTaton0B7TTz5301QhZLZurN28BpS0z8"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="softcard">Sản phẩm</label>
                                                            <select
                                                                className="form-control ajax-productsku"
                                                                id="ajax-productsku"
                                                                name="service_code"
                                                            >
                                                                <option>Chọn sản phẩm</option>
                                                                <option value="vega">Thẻ Vega</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="softcard_value">Chọn mệnh giá</label>
                                                            <select
                                                                className="form-control product-skus"
                                                                id="product-skus"
                                                                name="value"
                                                            >
                                                                <option value="10000">Vega 10.000đ</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="cardinfo">Thông tin thẻ:</label>
                                                            <textarea
                                                                name="cardinfo"
                                                                rows={8}
                                                                id="cardinfo"
                                                                className="form-control"
                                                                defaultValue={''}
                                                            />
                                                            <p>
                                                                <b>Cú pháp:</b> Serial Mã_thẻ
                                                            </p>
                                                            <p>
                                                                Mỗi lần không quá 50 thẻ. Serial và mã thẻ cách nhau
                                                                bằng 1 khoảng trống.
                                                            </p>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="expire">Hạn dùng: ( Không bắt buộc )</label>
                                                            <input name="expire" id="expire" className="form-control" />
                                                            <p>Hạn dùng được áp dụng chung cho tất cả các thẻ.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-footer" style={{ borderTop: 0 }}>
                                                    <button type="submit" className="btn btn-primary">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card card-primary">
                                            <div className="card-header bg-primary">
                                                <h2 className="card-title text-white mb-0">Nhập thẻ từ EXCEL</h2>
                                            </div>
                                            <form
                                                method="POST"
                                                action="/stockcards/importexcel"
                                                acceptCharset="UTF-8"
                                                encType="multipart/form-data"
                                            >
                                                <input
                                                    name="_token"
                                                    type="hidden"
                                                    defaultValue="vxd2ZKIlYTaton0B7TTz5301QhZLZurN28BpS0z8"
                                                />
                                                <div className="card-body row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlFile1">
                                                                Nhập file Excel
                                                            </label>
                                                            <input
                                                                type="file"
                                                                name="importFile"
                                                                id="importFile"
                                                                className="form-control-file mb-3"
                                                            />
                                                            <p>
                                                                <Link target="_blank" to="/import/nhapthe_mau.xlsx">
                                                                    Tải mẫu về
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer" style={{ borderTop: 0 }}>
                                                    <button type="submit" className="btn btn-primary">
                                                        Tải lên
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImportCard;
