import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);
function CreatePower() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Thêm quyền hạn" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2 className="card-title text-white">Thêm quyền</h2>
                                </div>
                                <form method="POST" action="/permissions" acceptCharset="UTF-8">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Name:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter Name"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="guard_name">Guard Name:</label>
                                            <input
                                                name="guard_name"
                                                type="text"
                                                className="form-control"
                                                id="guard_name"
                                                placeholder="Guard Name"
                                                defaultValue="web"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="description">Description:</label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                id="description"
                                                placeholder="Description"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Thêm
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

export default CreatePower;
