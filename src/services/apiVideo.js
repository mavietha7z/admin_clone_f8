import * as request from '~/utils/request';

const URL_API_YOUTUBE = 'https://www.googleapis.com/youtube/v3/videos';

export const getInfoVideo = async (url) => {
    try {
        const res = await request.get(`${URL_API_YOUTUBE}`, {
            params: {
                part: 'snippet,statistics,contentDetails',
                id: url,
                key: 'AIzaSyCMMrp71i75_LScVAw5OZuGmct0C3xLACc',
            },
        });

        if (res.items.length === 0) {
            return {
                statusCode: 2,
                message: 'Video không tồn tại',
            };
        } else {
            return {
                statusCode: 0,
                data: res.items,
            };
        }
    } catch (error) {
        return {
            statusCode: 2,
        };
    }
};

// Ok
export const createVideo = async (token, video) => {
    try {
        const res = await request.post('/video/create', video, {
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

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const deleteVideo = async (token, type = null, id = null) => {
    try {
        const res = await request.remove('video/delete', {
            headers: {
                token,
            },
            params: {
                type,
                id,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

//
export const updateVideo = async (token, video, id) => {
    try {
        const res = await request.put('/video/update', video, {
            headers: {
                token,
            },
            params: {
                id,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};
