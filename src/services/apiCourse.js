import * as request from '~/utils/request';

export const createCourse = async (token, type, course) => {
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

export const toggleStatusCourse = async (token, type = null, id) => {
    try {
        const res = await request.post(
            `/course/status`,
            {},
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

export const updateCourse = async (token, data, id) => {
    try {
        const res = await request.put(`/course/update`, data, {
            headers: {
                token,
            },
            params: {
                id,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

export const renameChapter = async (token, name, id) => {
    try {
        const res = await request.put(
            '/chapter/rename',
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

export const deleteChapter = async (token, id) => {
    try {
        const res = await request.remove('/chapter/delete', {
            headers: {
                token,
            },
            params: {
                id,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};
