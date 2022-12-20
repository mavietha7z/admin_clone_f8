import classNames from 'classnames/bind';
import { useState } from 'react';
import Editor from '~/components/Editor';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditProduct() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa sản phẩm" />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-12">
                            <div className="card-header" style={{ backgroundColor: '#f4f6f9' }}>
                                <h2 className="card-title mb-0">Sửa: Thẻ Vega</h2>
                            </div>
                            <form
                                method="POST"
                                action="/thenhanhcp/softcard"
                                acceptCharset="UTF-8"
                                encType="multipart/form-data"
                            >
                                <input
                                    name="_token"
                                    type="hidden"
                                    defaultValue="YFtpMspUfhyWYfVYQlbbyJCVtWAPf98inSRasZEN"
                                />
                                <div className="card-body row">
                                    <div className="col-6 col-md-offset-3">
                                        <div className="card">
                                            <div className="card-body row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="name">Tên sản phẩm:</label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Name"
                                                        defaultValue="Thẻ Vega"
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="slug">Đường dẫn SEO:</label>
                                                    <input
                                                        name="slug"
                                                        type="text"
                                                        className="form-control"
                                                        id="slug"
                                                        placeholder="Đường dẫn SEO"
                                                        defaultValue="the-vega"
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="service_code">SERVICE CODE (Mã sản phẩm):</label>
                                                    <input
                                                        name="service_code"
                                                        type="text"
                                                        className="form-control"
                                                        id="service_code"
                                                        placeholder="ví dụ: GARENA"
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="cat_id">Danh mục:</label>
                                                    <select className="form-control" name="cat_id">
                                                        <option value={1}>Thẻ điện thoại</option>
                                                        <option value={2} selected>
                                                            Thẻ game
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="item_value">Mệnh giá:</label>
                                                    <input
                                                        name="item_value"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Cách nhau bởi dấu phẩy"
                                                        defaultValue="10000,20000,50000,100000,200000,500000,1000000,2000000"
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="country">Quốc gia:</label>
                                                    <select className="form-control" name="country">
                                                        <option value="AU">Australia</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CN">China</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="JP">Japan</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="url">Ảnh thẻ:</label>
                                                    <img id="logo-icon" className="imgPreview" alt="" src="" />
                                                    <input type="hidden" name="image" id="image" className="inputImg" />
                                                    <div style={{ marginLeft: 15 }}>
                                                        <button type="button" className="btn btn-info">
                                                            Chọn ảnh
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="status" style={{ width: '100%' }}>
                                                        Trạng thái:
                                                    </label>
                                                    <input
                                                        name="status"
                                                        id="status"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                        data-toggle="toggle"
                                                        style={{ display: 'none' }}
                                                        defaultChecked="checked"
                                                    />
                                                    <div
                                                        data-table="softcard_products"
                                                        data-id={46}
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
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="short_description">Mô tả ngắn:</label>
                                                    <textarea
                                                        name="short_description"
                                                        id="short_description"
                                                        className="form-control"
                                                        rows={5}
                                                        defaultValue={''}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="description">Mô tả:</label>
                                                    <Editor />
                                                </div>

                                                <div className="form-group col-md-12">
                                                    <label>Sắp xếp:</label>
                                                    <input
                                                        name="sort"
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue={0}
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <fieldset className="border p-3">
                                                        <legend className="w-auto" style={{ fontSize: 24 }}>
                                                            SEO ONPAGE
                                                        </legend>
                                                        <label htmlFor="sort">Tiêu đề SEO:</label>
                                                        <input
                                                            name="meta[title]"
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <label htmlFor="sort">Mô tả SEO:</label>
                                                        <textarea
                                                            name="meta[description]"
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={''}
                                                        />
                                                        <label htmlFor="sort">Từ khóa SEO:</label>
                                                        <input
                                                            name="meta[keyword]"
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="card-footer" style={{ borderTop: 0 }}>
                                                <button type="submit" className="btn btn-primary">
                                                    Cập nhật
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <table id="example1" className="table table-bordered table-striped dataTable">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Tên</th>
                                                    <th>Mệnh giá</th>
                                                    <th>Nhà cung cấp</th>
                                                    <th>Trạng thái</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>222</td>
                                                    <td>vega 10000</td>
                                                    <td>10,000</td>
                                                    <td />
                                                    <td>
                                                        <div
                                                            data-table="softcard_products"
                                                            data-id={46}
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
                                                    </td>
                                                    <td>2022-02-22 15:03:07</td>
                                                    <td>
                                                        <div className="action-buttons">
                                                            <span
                                                                data-id={222}
                                                                className="btn btn-info btn-small mr-2"
                                                                data-toggle="modal"
                                                                data-target="#modal-edit"
                                                            >
                                                                {/* <FaPen title="Sửa" /> */}
                                                            </span>
                                                            <span
                                                                className="btn btn-danger btn-small deleteClick"
                                                                data-toggle="modal"
                                                                data-target="#modal-delete"
                                                                data-name="vega 10000"
                                                                data-link="/softcard/item/delete/222"
                                                            >
                                                                {/* <FaTrashAlt /> */}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div
                                            id="SofcardModal"
                                            className="modal fade"
                                            tabIndex={-1}
                                            role="dialog"
                                            aria-labelledby="myModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content" id="contentItemModal"></div>
                                            </div>
                                        </div>
                                        <div
                                            className="modal fade"
                                            id="deleteModal"
                                            tabIndex={-1}
                                            role="dialog"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <form id="deleteForm" action method="GET">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">
                                                                Delete Softcard Item
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="close"
                                                                data-dismiss="modal"
                                                                aria-label="Close"
                                                            >
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div id="deleteMes" className="modal-body"></div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button type="submit" className="btn btn-primary">
                                                                Submit
                                                            </button>
                                                        </div>
                                                        <input type="hidden" name="_method" defaultValue="delete" />
                                                        <input
                                                            type="hidden"
                                                            name="_token"
                                                            defaultValue="DiYfatRBWbDZIg9ILI8UrEi4OQ2CXIFZ4hxP2bXo"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal edit */}
            <div
                className="modal fade"
                id="modal-edit"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form method="POST" action="/softcard/item/update/222" acceptCharset="UTF-8">
                            <input name="_method" type="hidden" defaultValue="PATCH" />
                            <input
                                name="_token"
                                type="hidden"
                                defaultValue="DiYfatRBWbDZIg9ILI8UrEi4OQ2CXIFZ4hxP2bXo"
                            />
                            <div className="modal-header">
                                <h2 className="modal-title" id="SoftcardModal">
                                    Sửa: Vega 10.000đ
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body" id="contentItem">
                                <div className="col-md-12" style={{ padding: 0 }}>
                                    <div
                                        className="card card-info"
                                        style={{
                                            boxShadow: '0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%)',
                                            borderRadius: 6,
                                        }}
                                    >
                                        <div className="card-body row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Tên mệnh giá:</label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        defaultValue="vega 10000"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="value">Mệnh giá:</label>
                                                    <input
                                                        name="value"
                                                        type="number"
                                                        className="form-control"
                                                        defaultValue={10000}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="price[VND]">Giá bán VND:</label>
                                                    <div className="input-group">
                                                        <input
                                                            name="price[VND]"
                                                            type="number"
                                                            step="0.01"
                                                            className="form-control"
                                                        />
                                                        <div className="input-group-append">
                                                            <span
                                                                className="input-group-text"
                                                                style={{ padding: '6px 12px', fontSize: '1.5rem' }}
                                                            >
                                                                VND
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="discount">Chiết khấu nhóm (%):</label>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <label htmlFor="discount">Guest</label>
                                                            <input
                                                                name="discount[1]"
                                                                type="number"
                                                                step="0.01"
                                                                className="form-control"
                                                                placeholder="%"
                                                            />
                                                        </div>
                                                        <div className="col-4">
                                                            <label htmlFor="discount">THÀNH VIÊN</label>
                                                            <input
                                                                name="discount[2]"
                                                                type="number"
                                                                step="0.01"
                                                                className="form-control"
                                                                placeholder="%"
                                                            />
                                                        </div>
                                                        <div className="col-4">
                                                            <label htmlFor="discount">VIP/API</label>
                                                            <input
                                                                name="discount[4]"
                                                                type="number"
                                                                step="0.01"
                                                                className="form-control"
                                                                placeholder="%"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="provider">Nhà cung cấp:</label>
                                                    <select name="provider" className="form-control">
                                                        <option value>-- Chọn nhà cung cấp --</option>
                                                        <option value={22}>Kho thẻ Stock</option>
                                                        <option value={33}>Kho thẻ Netpay</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="sort">Thứ tự:</label>
                                                    <input
                                                        name="sort"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Thứ tự"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal delete */}

            <div
                className="modal fade"
                id="modal-delete"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">
                                Xóa: Vega 2.000.000đ
                            </h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn có chắc muốn xóa không: Vega 2.000.000đ ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Đóng
                            </button>
                            <button type="button" className="btn btn-primary">
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
