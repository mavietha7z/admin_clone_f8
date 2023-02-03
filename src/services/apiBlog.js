import * as request from '~/utils/request';

// Ok
export const getBlogByType = async (token, page = null, type = null) => {
    try {
        const res = await request.get('/posts', {
            headers: {
                token,
            },
            params: {
                type,
                page,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const toggleStatusPosts = async (postId, token) => {
    try {
        const res = await request.post(
            `/posts/status`,
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

export const deletePosts = async (token, type, id) => {
    try {
        const res = await request.remove('/posts/delete', {
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
