import * as request from '~/utils/request';

export const createNewCourse = async (course) => {
    try {
        const res = await request.post('/course/create', course);

        return res;
    } catch (error) {
        console.log('error: ', error);
    }
};
