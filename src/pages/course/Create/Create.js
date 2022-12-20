import { useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '~/components/Title';

import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function Create() {
    const [inputCount, setInputCount] = useState(1);

    const addInput = () => {
        if (inputCount < 10) {
            setInputCount(inputCount + 1);
        } else {
            alert('Tối đa chỉ được 10');
        }
    };

    const removeInput = () => {
        if (inputCount > 1) {
            setInputCount(inputCount - 1);
        } else {
            alert('Cần ít nhất 1 nội dung');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm khóa học" />
                </div>
            </div>

            <div className={cx('content')}>
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
                                                name="fullName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Tên khóa học"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="slug">Đường dẫn SEO:</label>
                                            <input
                                                name="urlSeo"
                                                type="text"
                                                className="form-control"
                                                placeholder="Vd: javascript-nang-cao"
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label className=" w-100">
                                                Học được gì sau khóa học:
                                                <FontAwesomeIcon
                                                    className="btn btn-success float-right"
                                                    onClick={addInput}
                                                    icon={faCirclePlus}
                                                    title="Thêm 1 ô input mới"
                                                />
                                            </label>
                                            <div>
                                                {Array.from({ length: inputCount }, (_, i) => (
                                                    <>
                                                        <input
                                                            key={i}
                                                            name="urlSeo"
                                                            type="text"
                                                            className="form-control mb-2 col-11"
                                                            placeholder="Mô tả những gì sẽ học được"
                                                            style={{ display: 'inline-block' }}
                                                        />
                                                        {inputCount > 1 && (
                                                            <FontAwesomeIcon
                                                                className="btn btn-danger float-right"
                                                                onClick={removeInput}
                                                                icon={faCircleMinus}
                                                                title="Xóa ô input này"
                                                            />
                                                        )}
                                                    </>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="item_value">
                                                Giá: ( Nếu để mặc định 0 thì sẽ là miễn phí )
                                            </label>
                                            <input
                                                name="item_value"
                                                type="text"
                                                className="form-control"
                                                placeholder="Giá khóa học"
                                                defaultValue={0}
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="url">Ảnh nền:</label>
                                            <img className="imgPreview" src="" alt="" />
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
                                            <select className="form-control col-4">
                                                <option value="off">Tắt</option>
                                                <option value="on">Bật</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="short_description">Mô tả ngắn:</label>
                                            <textarea
                                                name="short_description"
                                                id="short_description"
                                                className="form-control"
                                                rows={5}
                                                defaultValue=""
                                                placeholder="Mô tả ngắn khóa học"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer" style={{ borderTop: 0 }}>
                            <button type="submit" className="btn btn-primary">
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
