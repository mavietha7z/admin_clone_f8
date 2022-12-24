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

export const getCourseById = async (courseId, token, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`http://localhost:8080/api/course/get/${courseId}`, {
            headers: {
                token,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error);
    }
};

export const createNewChapter = async (courseId, nameChapter, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post(
            `http://localhost:8080/api/course/chapter/${courseId}`,
            { nameChapter },
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

export const createNewLesson = async (courseId, newLesson, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post(`http://localhost:8080/api/course/lesson/${courseId}`, newLesson, {
            headers: {
                token,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error);
        return error.response.data;
    }
};

export const handleToggleStatusCourse = async (courseId, status, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post(
            `http://localhost:8080/api/course/status/${courseId}`,
            { status },
            {
                headers: {
                    token,
                },
            }
        );
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
