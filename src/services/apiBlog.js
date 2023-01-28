import * as request from '~/utils/request';

// Ok
export const getBlogByType = async (token, page, type = 'all') => {
    try {
        const res = await request.get('/post', {
            headers: {
                token,
            },
            params: {
                page,
                type,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const toggleStatus = async (postId, token) => {
    try {
        const res = await request.post(
            `/post/status`,
            {},
            {
                headers: {
                    token,
                },
                params: {
                    id: postId,
                },
            }
        );

        return res;
    } catch (error) {
        return error.response.data;
    }
};
