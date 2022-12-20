import classNames from 'classnames/bind';
import { useState } from 'react';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditBanner() {
    const [status, setStatus] = useState(false);

    const handleToggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa banner" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Chỉnh sửa banner</h2>
                                </div>
                                <form method="POST" action="/banners" acceptCharset="UTF-8">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name"
                                                    defaultValue="Công ty 2CM"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="url">URL:</label>
                                                <input
                                                    name="url"
                                                    type="text"
                                                    className="form-control"
                                                    id="url"
                                                    placeholder="Enter Url"
                                                    defaultValue="https://www.2cm.dev"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Descriptions:</label>
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    defaultValue="Thiết kế website"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label htmlFor="url">Ảnh banner:</label>
                                                <div>
                                                    {/* <img id="logo-icon" className="imgPreview" src /> */}
                                                    <input
                                                        type="hidden"
                                                        name="image"
                                                        id="image"
                                                        className="inputImg"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div style={{ marginLeft: 15 }}>
                                                    <button type="button" className="btn btn-default">
                                                        Chọn ảnh
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="status">Status:</label>
                                                <div
                                                    data-table="softcard_products"
                                                    data-id={47}
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
                                            <div className="form-group">
                                                <label htmlFor="name">Sort:</label>
                                                <input
                                                    name="sort"
                                                    type="text"
                                                    className="form-control"
                                                    id="sort"
                                                    placeholder="Sort"
                                                    defaultValue="1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Cập nhật
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

export default EditBanner;
