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
