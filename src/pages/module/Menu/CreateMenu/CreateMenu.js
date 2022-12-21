import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function CreateMenu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm mới menu" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h2 className="card-title">Tạo mới menu</h2>
                                </div>
                                <form method="POST" action="/menu" acceptCharset="UTF-8" encType="multipart/form-data">
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
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        placeholder="Title"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="news_slug">Đường dẫn url:</label>
                                                    <input
                                                        name="url"
                                                        type="text"
                                                        className="form-control"
                                                        id="news_slug"
                                                        placeholder="Đường dẫn url"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-6">
                                                    <label htmlFor="author">Loại:</label>
                                                    <select className="form-control" name="menu_type" id="menu_type">
                                                        <option value>-- Select menu type --</option>
                                                        <option value="header">Header</option>
                                                        <option value="footer">Footer</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="title">Parent menu:</label>
                                                    <select className="form-control" name="parent_id" id="parent_id">
                                                        <option value={0}>-- Select parent menu --</option>
                                                        <option value={60}> Mua Mã Thẻ</option>
                                                        <option value={88}> Buy card</option>
                                                        <option value={61}> Đổi Thẻ Cào</option>
                                                        <option value={89}> Card Charging</option>
                                                        <option value={87}> Nạp Điện Thoại</option>
                                                        <option value={90}> Topup</option>
                                                        <option value={91}> News</option>
                                                        <option value={100}> Chuyển Tiền</option>
                                                        <option value={103}> Lịch Sử</option>
                                                        <option value={101}> Rút Tiền</option>
                                                        <option value={73}> Thông Tin</option>
                                                        <option value={79}> Làm việc : 08:00 - 20:00</option>
                                                        <option value={92}> Hỗ trợ khách hàng</option>
                                                        <option value={74}> ĐỐI TÁC</option>
                                                        <option value={95}> SHOP ACC GAME</option>
                                                        <option value={96}> MUA THẺ CÀO</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-4">
                                                    <label htmlFor="view_count">Thứ tự:</label>
                                                    <input
                                                        name="sort_order"
                                                        type="text"
                                                        className="form-control"
                                                        id="view_count"
                                                        defaultValue={1}
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="language">Ngôn ngữ:</label>
                                                    <select className="form-control" name="language">
                                                        <option value="vi">Tiếng Việt</option>
                                                        <option value="us">English</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="status">Trạng thái:</label>
                                                    <select className="form-control" name="status" id="status">
                                                        <option value={1} selected>
                                                            Bật
                                                        </option>
                                                        <option value={0}>Tắt</option>
                                                    </select>
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

export default CreateMenu;
