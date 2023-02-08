import * as request from '~/utils/request';

// Ok
export const getLearningPath = async (type) => {
    try {
        const res = await request.get('/learning', {
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
export const toggleStatusLearningPath = async (token, type, id) => {
    try {
        const res = await request.post(
            '/learning/status',
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

// Ok
export const createLearningPath = async (token, learningPath) => {
    try {
        const res = await request.post('/learning/create', learningPath, {
            headers: {
                token,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// Ok
export const createGroupLearningPath = async (token, group, id) => {
    try {
        const res = await request.post('/learning/create-group', group, {
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

// Ok
export const getLearningPathById = async (token, id) => {
    try {
        const res = await request.get(`/learning/get/${id}`, {
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
export const addCourseToGroup = async (token, data, id) => {
    try {
        const res = await request.post('/learning/add-course', data, {
            headers: {
                token,
            },
            params: {
                groupId: id,
            },
        });

        return res;
    } catch (error) {
        return error.response.data;
    }
};

// OK
export const deleteLearningPath = async (token, id) => {
    try {
        const res = await request.remove('/learning/delete', {
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

// OK
export const updateLearningPath = async (token, data, id) => {
    try {
        const res = await request.put('/learning/update', data, {
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
