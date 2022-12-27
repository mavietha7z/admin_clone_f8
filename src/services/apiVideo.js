// import * as request from '~/utils/request';
import axios from 'axios';
import { getAllVideosFailed, getAllVideosSuccess } from '~/redux/reducer/moduleReducer';
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

export const createNewVideo = async (data, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post('http://localhost:8080/api/video/create', data, {
            headers: {
                token,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error);
        return error.response;
    }
};

export const getAllVideos = async (dispatch) => {
    try {
        const res = await request.get('/video/get');
        dispatch(getAllVideosSuccess(res.data.data));
    } catch (error) {
        console.log('error: ', error);
        dispatch(getAllVideosFailed());
    }
};
