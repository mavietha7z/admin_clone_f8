import { getAllBlogsFailed, getAllBlogsSuccess } from '~/redux/reducer/moduleReducer';
import * as request from '~/utils/request';

export const getAllBlogs = async (dispatch) => {
    try {
        const res = await request.get('/blog/get');
        dispatch(getAllBlogsSuccess(res.data));
    } catch (error) {
        console.log('error: ', error);
        dispatch(getAllBlogsFailed());
    }
};

export const handleCreateNewBlog = async (data) => {
    try {
        const res = await request.post('/blog/create', data);
        return res;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};

export const handleSelectImage = async (data) => {
    try {
        const res = await request.post('/image/upload', data);
        return res;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};

export const handleToggleStatus = async (blogId, status, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post(
            `http://localhost:8080/api/blog/status/${blogId}`,
            { status },
            {
                headers: {
                    token,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};
