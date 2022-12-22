import { createSlice } from '@reduxjs/toolkit';

const courseReducer = createSlice({
    name: 'courses',
    initialState: {
        allCourses: null,
    },
    reducers: {
        getAllCoursesSuccess: (state, action) => {
            state.allCourses = action.payload;
        },
    },
});

export const { getAllCoursesSuccess } = courseReducer.actions;

export default courseReducer.reducer;
