import * as request from '~/utils/request';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
} from '~/redux/reducer/authReducer';
import { getAllUsersFailed, getAllUsersSuccess } from '~/redux/reducer/moduleReducer';

export const loginAdmin = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post('/user/login/admin', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
        return res;
    } catch (error) {
        dispatch(loginFailed());
        return error.response.data;
    }
};

export const logoutAdmin = async (dispatch, id, navigate, token, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post('http://localhost:8080/api/user/logout', id, {
            headers: {
                token: token,
            },
        });
        dispatch(logoutSuccess());
        navigate('/login');
    } catch (error) {
        dispatch(logoutFailed());
    }
};

export const getAllUsers = async (dispatch, token, axiosJWT) => {
    try {
        const res = await axiosJWT.get('http://localhost:8080/api/user/get', {
            headers: {
                token: token,
            },
        });
        dispatch(getAllUsersSuccess(res.data.data));
    } catch (error) {
        console.log('error: ', error);
        dispatch(getAllUsersFailed());
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

export const deleteUserById = async (userId, axiosJWT, token) => {
    try {
        const res = await axiosJWT.delete(`http://localhost:8080/api/user/${userId}`, {
            headers: {
                token: token,
            },
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const getUserById = async (userId, token) => {
    try {
        const res = await request.get(`/user/${userId}`, {
            headers: {
                token: token,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error);
    }
};

export const handleUpdateUser = async (userId, user, navigate) => {
    try {
        const res = await request.put(`/user/update/${userId}`, user);
        navigate('/users');
        return res;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};

export const handleSendEmail = async (email) => {
    try {
        const res = await request.post(`/user/verify-email`, { email });
        console.log('res: ', res);
        return res;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};
