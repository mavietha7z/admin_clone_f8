import { createSlice } from '@reduxjs/toolkit';

const moduleReducer = createSlice({
    name: 'module',
    initialState: {
        allCourses: {
            currentCourses: null,
            error: false,
        },
        allUsers: {
            currentUsers: null,
            error: false,
        },
        allBlogs: {
            currentBlogs: null,
            error: false,
        },
    },
    reducers: {
        getAllCoursesSuccess: (state, action) => {
            state.allCourses.currentCourses = action.payload;
            state.allCourses.error = false;
        },
        getAllCoursesFailed: (state) => {
            state.allCourses.error = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.allUsers.currentUsers = action.payload;
        },
        getAllUsersFailed: (state) => {
            state.allUsers.error = true;
        },
        getAllBlogsSuccess: (state, action) => {
            state.allBlogs.currentBlogs = action.payload;
            state.allBlogs.error = false;
        },
        getAllBlogsFailed: (state) => {
            state.allBlogs.error = true;
        },
    },
});

export const {
    getAllCoursesSuccess,
    getAllCoursesFailed,
    getAllUsersSuccess,
    getAllUsersFailed,
    getAllBlogsSuccess,
    getAllBlogsFailed,
} = moduleReducer.actions;

export default moduleReducer.reducer;
