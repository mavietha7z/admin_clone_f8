import * as request from '~/utils/request';
import { loginSuccess, logoutSuccess } from '~/redux/reducer/authReducer';

// Ok
export const loginAdmin = async (user, dispatch) => {
    try {
        const res = await request.post('/auth/login', user, {
            params: {
                role: 'admin',
            },
        });
        dispatch(loginSuccess(res.data));

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const logoutAdmin = async (dispatch, id, navigate, token) => {
    try {
        const res = await request.post(
            '/auth/logout',
            {},
            {
                headers: {
                    token: token,
                },
            }
        );

        dispatch(logoutSuccess());
        navigate('/login');
        return res;
    } catch (error) {
        return error.response.data;
    }
};

// OK
export const getUserByType = async (token, page) => {
    try {
        const res = await request.get('/user', {
            headers: {
                token: token,
            },
            params: {
                page,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const registerNewUser = async (user) => {
    try {
        const res = await request.post('/user/register', user);

        const { data, ...other } = res;

        return { ...other };
    } catch (error) {
        return error.response.data;
    }
};

export const deleteUserById = async (userId, token) => {
    try {
        const res = await request.remove(`/user/${userId}`, {
            headers: {
                token: token,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const getUserById = async (userId, token) => {
    try {
        const res = await request.get(`/user/${userId}`, {
            headers: {
                token: token,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const handleUpdateUser = async (userId, user, navigate) => {
    try {
        const res = await request.put(`/user/update/${userId}`, user);

        navigate('/users');
        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const handleSendEmail = async (email) => {
    try {
        const res = await request.post(`/user/verify-email`, { email });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const refreshUser = async (token, dispatch, navigate) => {
    try {
        const res = await request.get('/auth/current-user', {
            headers: {
                token,
            },
            params: {
                v: Math.random(),
            },
        });

        const { data, ...other } = res;
        dispatch(loginSuccess(data));

        return { ...other };
    } catch (error) {
        return error.response.data;
    }
};
