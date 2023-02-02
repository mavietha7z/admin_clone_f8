import axios from 'axios';
import request from '~/utils/request';

const URL_API_YOUTUBE = 'https://www.googleapis.com/youtube/v3/videos';

export const getInfoVideo = async (url) => {
    try {
        const res = await axios.get(`${URL_API_YOUTUBE}`, {
            params: {
                part: 'snippet,statistics,contentDetails',
                id: url,
                key: 'AIzaSyCMMrp71i75_LScVAw5OZuGmct0C3xLACc',
            },
        });

        if (res.data.items.length === 0) {
            return {
                statusCode: 2,
                message: 'Video không tồn tại',
            };
        } else {
            return {
                statusCode: 0,
                data: res.data.items,
            };
        }
    } catch (error) {
        return {
            statusCode: 2,
        };
    }
};

export const createVideo = async (token, video) => {
    try {
        const res = await request.post('/video/create', video, {
            headers: {
                token,
            },
        });

        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const getVideoByType = async (token, page) => {
    try {
        const res = await request.get('/video', {
            headers: {
                token,
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

// OK
export const toggleStatusVideo = async (token, type, id) => {
    try {
        const res = await request.post(
            '/video/status',
            {},
            {
                headers: {
                    token,
                },
                params: {
                    type,
                    id,
                },
            }
        );

        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
