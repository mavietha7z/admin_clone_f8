import classNames from 'classnames/bind';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';

const cx = classNames.bind(styles);

function EditRole() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa vai trò" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-light">
                                <div
                                    className="card-header bg-primary"
                                    style={{ borderBottom: 0, backgroundColor: '#f8f9fa' }}
                                >
                                    <h2 className="card-title text-white">Nhập thông tin</h2>
                                </div>
                                <form method="POST" action="/roles" acceptCharset="UTF-8">
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="LxKZeLZw0dqLV6Ta5FNXrjohIEBt5fCytUCvZ0Oa"
                                    />
                                    <div className="card-body row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Tên:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                disabled
                                                id="name"
                                                placeholder="Tên vai trò"
                                                defaultValue="SALES"
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
                                            <label htmlFor="description">Mô tả:</label>
                                            <input
                                                name="description"
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                placeholder="Mô tả cho vai trò"
                                                defaultValue="Vai trò là người bán hàng, được quản lý danh sách và sửa"
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="Permissions">Quyền:</label>
                                            <select
                                                name="permission[]"
                                                className="form-control select2 select2-hidden-accessible"
                                                data-placeholder="Select Permissions"
                                                style={{ width: '100%' }}
                                                tabIndex={-1}
                                                aria-hidden="true"
                                            >
                                                <option value={1}>list</option>
                                                <option value={2}>create</option>
                                                <option value={3}>edit</option>
                                                <option value={4}>delete</option>
                                                <option value={12}>view</option>
                                                <option value={13}>viewstats</option>
                                                <option value={14}>user</option>
                                                <option value={15}>addfund</option>
                                                <option value={16}>withdrawfund</option>
                                                <option value={19}>addstockcard</option>
                                                <option value={20}>deletestockcard</option>
                                                <option value={22}>deletesoftcard</option>
                                                <option value={27}>listsoftcard</option>
                                                <option value={28}>listcharging</option>
                                                <option value={29}>deletecharging</option>
                                                <option value={30}>resetcharging</option>
                                                <option value={31}>index_newscontroller</option>
                                            </select>
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

export default EditRole;
