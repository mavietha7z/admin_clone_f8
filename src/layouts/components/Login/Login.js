import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log({
            email,
            password,
        });
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="mb-5 row">
                <div className="form-group col-8">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
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
                        name="password"
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
