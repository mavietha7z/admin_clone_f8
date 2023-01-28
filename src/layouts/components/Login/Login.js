import Swal from 'sweetalert2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '~/services/apiAuth';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const user = {
            email,
            password,
        };
        const result = await loginAdmin(user, dispatch);

        if (result.statusCode === 0) {
            navigate('/');
            MySwal.fire('Thành công', `${result.message}`, 'success');
        } else {
            MySwal.fire('Lỗi', `${result.message || 'Lỗi kết nỗi database'}`, 'error');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="mb-5 row">
                <div className="form-group col-8">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group col-8">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group mb-5 col-8">
                    <button type="submit" className="btn btn-success" onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
