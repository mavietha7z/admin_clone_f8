import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import { getUserById } from '~/services/apiAuth';

const cx = classNames.bind(styles);

function EditUser() {
    const [currentUser, setCurrentUser] = useState(null);
    const pathName = useLocation().pathname;
    const id = pathName.split('/').pop();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getUserById(id);
            setCurrentUser(result);
        };
        fetchApi();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Sửa người dùng" />
                    <NavMenu
                        nameHome="Tất cả"
                        pathHome="/users"
                        colorHome="warning"
                        namePlus="Thêm mới"
                        pathPlus="/users/create"
                        colorPlus="success"
                        float="float-right"
                    />
                </div>
            </div>

            <div className={cx('content')}>
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card card-light">
                                <div className="card-header" style={{ backgroundColor: '#f8f9fa', borderBottom: 0 }}>
                                    <h2 className="card-title">{currentUser?.name}</h2>
                                </div>

                                <div className="card-body row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Username:</label>
                                            <input
                                                name="username"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter username"
                                                value={currentUser?.username}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Họ và tên:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter full name"
                                                value={currentUser?.name}
                                            />
                                        </div>
                                        <div className="form-group ">
                                            <label>Email:</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={currentUser?.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label>Vai trò: ( Người dùng luôn là USER ) </label>
                                            <select className="form-control" value={currentUser?.admin}>
                                                <option value={false}>USER</option>
                                                <option value={true}>ADMIN</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Điện thoại:</label>
                                            <input
                                                name="phone"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter number phone"
                                                value={currentUser?.phone}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Tick:</label>
                                            <select className="form-control" value={currentUser?.tick}>
                                                <option value={false}>Tắt</option>
                                                <option value={true}>Bật</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;
