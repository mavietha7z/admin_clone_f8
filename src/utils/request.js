import axios from 'axios';

const request = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080/api',
});

export const get = async (path, ...option) => {
    const res = await request.get(path, ...option);

    return res.data;
};

export const post = async (path, ...option) => {
    const res = await request.post(path, ...option);

    return res.data;
};

export const put = async (path, ...option) => {
    const res = await request.put(path, ...option);

    return res.data;
};

export const remove = async (path, ...option) => {
    const res = await request.delete(path, ...option);

    return res.data;
};

export default request;
