import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
    name: 'users',
    initialState: {
        getAllUsers: {
            data: null,
        },
    },
    reducers: {
        getAllUsersSuccess: (state, action) => {
            state.getAllUsers.data = action.payload;
        },
    },
});

export const { getAllUsersSuccess } = userReducer.actions;

export default userReducer.reducer;
