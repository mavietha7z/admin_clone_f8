import * as request from '~/utils/request';

// OK
export const createCourse = async (course, token, type) => {
    try {
        const res = await request.post('/course/create', course, {
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

// Ok
export const createChapter = async (token, name, id) => {
    try {
        const res = await request.post(
            '/chapter/create',
            { name },
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
export const createLesson = async (token, lesson, chapterId) => {
    try {
        const res = await request.post('/lesson/create', lesson, {
            headers: {
                token,
            },
            params: {
                chapterId,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// OK
export const deleteCourse = async (courseId, token, type) => {
    try {
        const res = await request.remove('/course/delete', {
            headers: {
                token,
            },
            params: {
                type,
                id: courseId,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// OK
export const updateCourse = async (token, data, courseId) => {
    try {
        const res = await request.put(`/course/update`, data, {
            headers: {
                token,
            },
            params: {
                id: courseId,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const renameChapter = async (token, name, chapterId) => {
    try {
        const res = await request.put(
            '/chapter/rename',
            { name },
            {
                headers: {
                    token,
                },
                params: {
                    id: chapterId,
                },
            }
        );

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const deleteChapter = async (token, chapterId) => {
    try {
        const res = await request.remove('/chapter/delete', {
            headers: {
                token,
            },
            params: {
                id: chapterId,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};
