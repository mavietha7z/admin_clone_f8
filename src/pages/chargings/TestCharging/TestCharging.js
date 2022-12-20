import classNames from 'classnames/bind';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function TestCharging() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Test thẻ cào" />
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
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Test thẻ sang các nhà cung cấp</h2>
                                </div>
                                <div className="card-body row" style={{ paddingTop: 30 }}>
                                    <div className="col-md-6">
                                        <form
                                            method="POST"
                                            action="https://thenhanh.vn/thenhanhcp/chargings/testcard"
                                            acceptCharset="UTF-8"
                                        >
                                            <input
                                                name="_token"
                                                type="hidden"
                                                defaultValue="fu5RnQtywzyS751plEpKfO4UEuEMiwniIvorMCHy"
                                            />
                                            <div className="form-group">
                                                <label htmlFor="key">Chọn nhà cung cấp:</label>
                                                <select name="provider" className="form-control">
                                                    <option value="Trumthe">Trumthe</option>
                                                    <option value="Doithe">Doithe</option>
                                                    <option value="Tsr">Tsr</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="key">Chọn loại thẻ:</label>
                                                <select name="telco" className="form-control">
                                                    <option value="VIETTEL">Viettel ( 90 )</option>
                                                    <option value="VINAPHONE">Vinaphone ( 88 )</option>
                                                    <option value="MOBIFONE">Mobifone ( 86 )</option>
                                                    <option value="GATE">GATE</option>
                                                    <option value="ZING">Zing ( 85 )</option>
                                                    <option value="VIETNAMOBILE">Vietnamobile ( 88 )</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sort">
                                                    Mã thẻ <span className="text-muted">(thẻ này không có thực)</span>:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="code"
                                                    className="form-control"
                                                    defaultValue={438690827828471}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sort">
                                                    Serial <span className="text-muted">(thẻ này không có thực)</span>:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="serial"
                                                    className="form-control"
                                                    defaultValue={10002535266376}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sort">Mệnh giá:</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    className="form-control"
                                                    defaultValue={50000}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg">
                                                Gửi thẻ đi
                                            </button>
                                        </form>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset className="border p-3">
                                            <legend className="w-auto">Kết quả</legend>
                                            <pre>
                                                {'                                            '}
                                                {'{'}
                                                "trans_id":3560494,"request_id":"TEST16294785","amount":43500,"value":null,"declared_value":50000,"telco":"VIETTEL","serial":"10002216212220","code":"553171095914262","status":99,"message":"PENDING"
                                                {'}'}1{'\n'}
                                                {'                                        '}
                                            </pre>
                                        </fieldset>
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

export default TestCharging;
