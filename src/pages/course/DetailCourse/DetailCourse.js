import TitleGlobal from '~/components/TitleGlobal';

import { Link } from 'react-router-dom';

function DetailCourse() {
    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <div className="row">
                    <TitleGlobal name="Thông tin chi tiết" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="col-12">
                            <div className="card-header" style={{ backgroundColor: '#f4f6f9' }}>
                                <h2 className="card-title mb-0">Thông tin khóa học</h2>
                            </div>
                        </div>

                        <div className="card-body row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="card">
                                    <div className="card-body row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="name">Tên sản phẩm:</label>
                                            <input
                                                disabled
                                                name="fullName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Tên khóa học"
                                                defaultValue="Kiến Thức Nhập Môn IT"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Đường dẫn SEO:</label>
                                            <input
                                                disabled
                                                name="urlSeo"
                                                type="text"
                                                className="form-control"
                                                placeholder="Vd: javascript-nang-cao"
                                                defaultValue="lessons-for-newbie"
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="item_value">
                                                Giá: ( Nếu để mặc định 0 thì sẽ là miễn phí )
                                            </label>
                                            <input
                                                disabled
                                                name="item_value"
                                                type="text"
                                                className="form-control"
                                                placeholder="Giá khóa học"
                                                defaultValue={0}
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label className=" w-100">Học được gì sau khóa học:</label>
                                            <div>
                                                <input
                                                    disabled
                                                    name="urlSeo"
                                                    type="text"
                                                    className="form-control mb-2 col-11"
                                                    placeholder="Các kiến thức cơ bản, nền móng của ngành IT"
                                                    style={{ display: 'inline-block' }}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    disabled
                                                    name="urlSeo"
                                                    type="text"
                                                    className="form-control mb-2 col-11"
                                                    placeholder="Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng"
                                                    style={{ display: 'inline-block' }}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    disabled
                                                    name="urlSeo"
                                                    type="text"
                                                    className="form-control mb-2 col-11"
                                                    placeholder="Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng"
                                                    style={{ display: 'inline-block' }}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    disabled
                                                    name="urlSeo"
                                                    type="text"
                                                    className="form-control mb-2 col-11"
                                                    placeholder="Hiểu hơn về cách internet và máy vi tính hoạt động"
                                                    style={{ display: 'inline-block' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-md-offset-3">
                                <div className="card">
                                    <div className="card-body row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="name">Tổng số chương:</label>
                                            <input
                                                disabled
                                                name="fullName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Số chương của khóa học"
                                                defaultValue="4 chương"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Tổng số bài học:</label>
                                            <input
                                                disabled
                                                name="urlSeo"
                                                type="text"
                                                className="form-control"
                                                placeholder="Số bài cần phải học trong khóa"
                                                defaultValue="12 bài học"
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label>Thời lượng khóa học:</label>
                                            <input
                                                disabled
                                                name="urlSeo"
                                                type="text"
                                                className="form-control"
                                                placeholder="Thời gian để học hết khóa"
                                                defaultValue="03 giờ 26 phút"
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label>Tác giả khóa học:</label>
                                            <input
                                                disabled
                                                name="urlSeo"
                                                type="text"
                                                className="form-control"
                                                placeholder="Người đăng khóa học"
                                                defaultValue="Sơn Đặng"
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="url">Ảnh nền:</label>
                                            <img
                                                className="ml-4 mb-4"
                                                src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                                                alt=""
                                                style={{
                                                    width: '160px',
                                                    height: 'auto',
                                                    borderRadius: 4,
                                                }}
                                            />
                                            <div style={{ marginLeft: 15 }}>
                                                <button type="button" className="btn btn-info" disabled>
                                                    Chọn ảnh
                                                </button>
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="status" style={{ width: '100%' }}>
                                                Trạng thái:
                                            </label>
                                            <select className="form-control col-4" disabled>
                                                <option value="off">Tắt</option>
                                                <option value="on" selected>
                                                    Bật
                                                </option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="short_description">Mô tả ngắn:</label>
                                            <textarea
                                                disabled
                                                name="short_description"
                                                id="short_description"
                                                className="form-control"
                                                rows={5}
                                                placeholder="Mô tả ngắn khóa học"
                                                defaultValue="Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer" style={{ borderTop: 0 }}>
                            <button type="submit" className="btn btn-secondary mr-4">
                                <Link to="/course/list" className="text-white">
                                    Quay lại
                                </Link>
                            </button>
                            <button type="submit" className="btn btn-primary">
                                <Link to="/course/edit" className="text-white">
                                    Sửa
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCourse;
