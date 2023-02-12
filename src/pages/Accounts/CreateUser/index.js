import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';

import { registerUser } from '~/services/apiAuth';
import { mySwalError, mySwalSuccess } from '~/configs/alert';

function CreateUser({ show, setShow }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('0');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputRef = useRef();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    const handleCreateUser = async () => {
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (name.length < 2) {
            mySwalError('error', 'Tên không đúng định dạng');
            return;
        } else if (!regexEmail.test(email)) {
            mySwalError('error', 'Email không đúng định dạng');
            return;
        } else if (password.length < 8) {
            mySwalError('error', 'Mật khẩu tối thiểu 8 kí tự');
            return;
        } else {
            const newUser = {
                name,
                email,
                password,
                role,
            };

            const result = await registerUser(currentUser.accessToken, newUser);
            if (result.statusCode === 0) {
                mySwalSuccess(result.message);
            } else {
                mySwalError('fail', result.message);
            }
        }
    };

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập họ và tên"
                            ref={inputRef}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="0">USER</option>
                            <option value="1">ADMIN</option>
                        </select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
                    Đóng
                </Button>
                <Button variant="primary" size="sm" onClick={handleCreateUser}>
                    Thêm mới
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateUser;
