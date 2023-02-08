import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginAdmin } from '~/services/apiAuth';
import { mySwalError, mySwalSuccess } from '~/configs/alert';

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
            mySwalSuccess(result.message);
        } else {
            mySwalError('fail', result.message);
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
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="secondary" onClick={handleLogin} size="sm">
                    Đăng nhập
                </Button>
            </Form>
        </div>
    );
}

export default Login;
