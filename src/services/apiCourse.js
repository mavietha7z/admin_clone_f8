import * as request from '~/utils/request';

// OK
export const createCourse = async (course, token) => {
    try {
        const res = await request.post('/course/create', course, {
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
export const getCourseByType = async (token, type, id = null) => {
    try {
        const res = await request.get('/course', {
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

// OK
export const toggleStatusCourse = async (courseId, token) => {
    try {
        const res = await request.post(
            `/course/status`,
            {},
            {
                headers: {
                    token,
                },
                params: {
                    id: courseId,
                },
            }
        );
        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const createNewChapter = async (newChapter, token) => {
    try {
        const res = await request.post(`/course/chapter/create`, newChapter, {
            headers: {
                token,
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const createNewLesson = async (newLesson, token) => {
    try {
        const res = await request.post(`/course/lesson/create`, newLesson, {
            headers: {
                token,
            },
        });

        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
