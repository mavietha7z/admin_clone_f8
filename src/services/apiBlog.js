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
