import { createSlice } from '@reduxjs/toolkit';

const modalReducer = createSlice({
    name: 'modal',
    initialState: {
        course: null,
        account: null,
        blog: null,
        video: null,
    },
    reducers: {
        openModalCourse: (state, action) => {
            state.course = action.payload;
        },
        closeModalCourse: (state) => {
            state.course = null;
        },

        openModalAccount: (state, action) => {
            state.account = action.payload;
        },
        closeModalAccount: (state) => {
            state.account = null;
        },

        openModalBlog: (state, action) => {
            state.blog = action.payload;
        },
        closeModalBlog: (state) => {
            state.blog = null;
        },

        openModalVideo: (state, action) => {
            state.video = action.payload;
        },
        closeModalVideo: (state) => {
            state.video = null;
        },
    },
});

export const {
    openModalCourse,
    closeModalCourse,
    openModalAccount,
    closeModalAccount,
    openModalBlog,
    closeModalBlog,
    openModalVideo,
    closeModalVideo,
} = modalReducer.actions;

export default modalReducer.reducer;
