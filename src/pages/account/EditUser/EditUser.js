import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import styles from '~/GlobalStyles.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getUserById, handleUpdateUser } from '~/services/apiAuth';

const cx = classNames.bind(styles);

function EditUser() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);
    const [phone, setPhone] = useState('');
    const [tick, setTick] = useState(false);
    const [status, setStatus] = useState(false);

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const pathName = useLocation().pathname;
    const id = pathName.split('/').pop();
    const user = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getUserById(id, user.accessToken);
            setUsername(result.username);
            setName(result.name);
            setEmail(result.email);
            setAdmin(result.admin);
            setPhone(result.phone);
            setTick(result.tick);
            setStatus(result.status);
        };
        fetchApi();
    }, [id, user.accessToken]);

    const handleSubmitUpdate = async () => {
        const newUser = {
            username,
            name,
            email,
            admin,
            phone,
            tick,
            status,
        };

        const result = await handleUpdateUser(id, newUser, navigate);

        if (result.errCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success');
        } else {
            MySwal.fire('Lỗi', `${result.message}`, 'error');
        }
    };

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
                                    <h2 className="card-title">{name}</h2>
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
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Họ và tên:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter full name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group ">
                                            <label>Email:</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Điện thoại:</label>
                                            <input
                                                name="phone"
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter number phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label>Vai trò: ( Người dùng luôn là USER ) </label>
                                            <select
                                                className="form-control"
                                                value={admin}
                                                onChange={(e) => setAdmin(e.target.value)}
                                            >
                                                <option value={false}>USER</option>
                                                <option value={true}>ADMIN</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Tick:</label>
                                            <select
                                                className="form-control"
                                                value={tick}
                                                onChange={(e) => setTick(e.target.value)}
                                            >
                                                <option value={false}>Tắt</option>
                                                <option value={true}>Bật</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Trạng thái:</label>
                                            <select
                                                className="form-control"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <option value={false}>Tắt</option>
                                                <option value={true}>Bật</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmitUpdate}>
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
