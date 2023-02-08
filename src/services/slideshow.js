import * as request from '~/utils/request';

// Ok
export const uploadImage = async (token, file) => {
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

// Ok
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

// Ok
export const toggleStatusSlide = async (token, type, id) => {
    try {
        const res = await request.post(
            '/home/status',
            {},
            {
                headers: {
                    token,
                },
                params: {
                    id,
                },
            }
        );

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// OK
export const createSlideshow = async (token, slide) => {
    try {
        const res = await request.post('/home/create', slide, {
            headers: {
                token,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// OK
export const deleteSlideshow = async (token, id) => {
    try {
        const res = await request.remove('/home/delete', {
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
