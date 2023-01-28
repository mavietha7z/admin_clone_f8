import axios from 'axios';
import request from '~/utils/request';

const URL_API_YOUTUBE = 'https://www.googleapis.com/youtube/v3/videos';

export const handleGetInfoVideo = async (uidVideo) => {
    try {
        const res = await axios.get(`${URL_API_YOUTUBE}`, {
            params: {
                part: 'snippet,statistics,contentDetails',
                id: uidVideo,
                key: 'AIzaSyCMMrp71i75_LScVAw5OZuGmct0C3xLACc',
            },
        });
        if (res.data.items.length === 0) {
            return {
                errCode: 1,
                message: 'Video không tồn tại',
            };
        } else {
            return {
                errCode: res.status,
                data: res.data.items,
            };
        }
    } catch (error) {
        console.log('error: ', error);
        return {
            errCode: 2,
        };
    }
};

export const createNewVideo = async (data, token) => {
    try {
        const res = await request.post('/video/create', data, {
            headers: {
                token,
            },
        });

        return res;
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
