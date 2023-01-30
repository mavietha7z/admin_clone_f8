import { useRef, useState } from 'react';
import TitleGlobal from '~/components/TitleGlobal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { handleSendEmail, registerNewUser } from '~/services/apiAuth';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('0');
    const [code, setCode] = useState('');

    const MySwal = withReactContent(Swal);
    const inputRef = useRef();

    const handleSendEmailVerify = async () => {
        const result = await handleSendEmail(email);

        if (result.errCode === 0) {
            MySwal.fire('Thành công', `${result.message}`, 'success');
        } else {
            MySwal.fire('Lỗi', `${result.message}`, 'error');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line  no-useless-escape
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const newUser = {
            name: name,
            email: email,
            password: password,
            role: role,
            code: code,
        };

        if (newUser.name.length < 2) {
            MySwal.fire('Lỗi', 'Tên không hợp lệ', 'error');
        } else if (!regexEmail.test(newUser.email)) {
            MySwal.fire('Lỗi', 'Email không hợp lệ', 'error');
        } else if (newUser.password.length < 8) {
            MySwal.fire('Lỗi', 'Mật khẩu tối thiểu 8 kí tự', 'error');
        } else {
            const result = await registerNewUser(newUser);

            if (result.errCode === 0) {
                MySwal.fire('Thành công', `${result.message}`, 'success').then((res) => {
                    if (res.isConfirmed) {
                        setEmail('');
                        setName('');
                        setPassword('');
                        setRole('0');
                        inputRef.current.focus();
                    }
                });
            } else {
                MySwal.fire('Lỗi', `${result.message}`, 'error');
            }
        }
    };

    return (
        <div className={'wrapper-global'}>
            <div className={'header-global'}>
                <div className="row">
                    <TitleGlobal name="Tạo người dùng" />
                </div>
            </div>

            <div className="content-global">
                <div className="row">
                    <div className="col-12">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header" style={{ backgroundColor: '#f8f9fa', borderBottom: 0 }}>
                                    <h2>Thông tin người dùng</h2>
                                </div>

                                <div className="card-body row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Họ và tên:</label>
                                            <input
                                                ref={inputRef}
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
                                        <div className="form-group ">
                                            <label>Mã xác nhận: </label>
                                            <input
                                                name="code"
                                                type="text"
                                                className="form-control"
                                                placeholder="Mã code có 6 số"
                                                maxLength={6}
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                        Thêm người dùng
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary float-right mr-5"
                                        onClick={handleSendEmailVerify}
                                    >
                                        Gửi mã xác nhận
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

export default CreateUser;
