import classNames from 'classnames/bind';
import { useState } from 'react';
import NavMenu from '~/components/NavMenu';
import Title from '~/components/Title';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from '~/GlobalStyles.module.scss';
import { registerNewUser } from '~/services/apiAuth';

const cx = classNames.bind(styles);

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('0');

    const MySwal = withReactContent(Swal);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const newUser = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            role: role,
        };

        if (newUser.name.length < 2 || typeof newUser.name !== 'string') {
            MySwal.fire('Lỗi', 'Tên không hợp lệ', 'error');
        } else if (!regexEmail.test(newUser.email)) {
            MySwal.fire('Lỗi', 'Email không hợp lệ', 'error');
        } else if (newUser.password.length < 8) {
            MySwal.fire('Lỗi', 'Mật khẩu tối thiểu 8 kí tự', 'error');
        } else {
            const result = await registerNewUser(newUser);
            console.log('result: ', result);

            if (result.errCode === 0) {
                MySwal.fire('Thành công', `${result.message}`, 'success');
            } else {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className="row">
                    <Title name="Tạo người dùng" />
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
                                    <h2>Thông tin người dùng</h2>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Họ và tên:</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Họ và tên"
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
                                                <label>Điện thoại: ( Có thể bỏ qua )</label>
                                                <input
                                                    name="phone"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Số di động nhận sms, bắt đầu bằng 0"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group ">
                                                <label>Vai trò: ( Người dùng luôn là USER )</label>
                                                <select
                                                    className="form-control"
                                                    value={role}
                                                    onChange={(e) => setRole(e.target.value)}
                                                >
                                                    <option value="0">USER</option>
                                                    <option value="1">ADMIN</option>
                                                </select>
                                            </div>
                                            <div className="form-group ">
                                                <label>Mật khẩu: </label>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Tối thiểu 8 ký tự"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Tạo mới
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

export default CreateUser;
