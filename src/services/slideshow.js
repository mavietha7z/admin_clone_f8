import * as request from '~/utils/request';

export const getAllSlideshow = async (token, type) => {
    try {
        const res = await request.get('/home/slideshow', {
            headers: {
                token,
            },
            params: {
                type,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const uploadImage = async (file, token) => {
    try {
        const res = await request.post('/upload/image', file, {
            headers: {
                token,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};
