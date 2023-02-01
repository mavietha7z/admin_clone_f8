import Swal from 'sweetalert2';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';

import { loginAdmin } from '~/services/apiAuth';

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
            (await MySwal.fire('Thành công', 'Đăng nhập thành công', 'success')).isConfirmed &&
                window.location.reload();
        } else {
            MySwal.fire('Lỗi', result.message || 'Lỗi kết nỗi database', 'error');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <Form style={{ width: 400 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin} type="button">
                    Đăng nhập
                </Button>
            </Form>
        </div>
    );
}

export default Login;
