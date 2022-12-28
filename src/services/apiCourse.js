import * as request from '~/utils/request';
import { getAllCoursesFailed, getAllCoursesSuccess } from '~/redux/reducer/moduleReducer';

export const createNewCourse = async (course, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post('http://localhost:8080/api/course/create', course, {
            headers: {
                token,
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getAllCourse = async (dispatch) => {
    try {
        const res = await request.get('http://localhost:8080/api/course/get');
        dispatch(getAllCoursesSuccess(res.data));
    } catch (error) {
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

export const createNewChapter = async (newChapter, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post(`http://localhost:8080/api/course/chapter/create`, newChapter, {
            headers: {
                token,
            },
        });
        console.log('res: ', res);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const createNewLesson = async (newLesson, token, axiosJWT) => {
    try {
        const res = await axiosJWT.post(`http://localhost:8080/api/course/lesson/create`, newLesson, {
            headers: {
                token,
            },
        });
        console.log('res: ', res);
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

export const handleDeleteACourse = async (courseId, token, axiosJWT) => {
    try {
        const res = await axiosJWT.delete(`http://localhost:8080/api/course/delete/${courseId}`, {
            headers: {
                token,
            },
        });
        console.log('res: ', res);
    } catch (error) {
        console.log('error: ', error);
    }
};
