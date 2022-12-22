import { getAllCoursesSuccess } from '~/redux/reducer/courseReducer';
import * as request from '~/utils/request';

export const createNewCourse = async (course) => {
    try {
        const res = await request.post('/course/create', course);
        return res;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};

export const getAllCourse = async (dispatch, axiosJWT, token) => {
    try {
        const res = await axiosJWT.get('http://localhost:8080/api/course/get', {
            headers: {
                token,
            },
        });
        dispatch(getAllCoursesSuccess(res.data.data));
        console.log('res: ', res);
    } catch (error) {
        console.log('error: ', error);
    }
};
