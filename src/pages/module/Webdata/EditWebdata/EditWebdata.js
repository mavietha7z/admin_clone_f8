import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditWebdata() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Update Webdata" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Edit webdata</h2>
                                </div>
                                <form method="POST" action="/webdata" acceptCharset="UTF-8">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="name">Module:</label>
                                            <input
                                                name="module"
                                                type="text"
                                                className="form-control"
                                                id="module"
                                                placeholder="Enter Module"
                                                defaultValue="Mtopup"
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="name">Type:</label>
                                            <input
                                                name="type"
                                                type="text"
                                                className="form-control"
                                                id="type"
                                                placeholder="Enter Type"
                                                defaultValue="topup"
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="guard_name">Key:</label>
                                            <input
                                                name="key"
                                                type="text"
                                                className="form-control"
                                                id="key"
                                                placeholder="Guard Key"
                                                defaultValue="MOBI_TKC"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Description:</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                id="description"
                                                placeholder="Description"
                                                defaultValue="Mobifone TKC"
                                            />
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

export default EditWebdata;
