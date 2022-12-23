import * as request from '~/utils/request';
import { getAllCoursesFailed, getAllCoursesSuccess } from '~/redux/reducer/moduleReducer';

export const createNewCourse = async (course) => {
    try {
        const res = await request.post('/course/create', course);
        return res;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};

export const getAllCourse = async (dispatch) => {
    try {
        const res = await request.get('http://localhost:8080/api/course/get');
        dispatch(getAllCoursesSuccess(res.data));
    } catch (error) {
        console.log('error: ', error);
        dispatch(getAllCoursesFailed());
    }
};
