import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
        },
        loading: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.login.currentUser = action.payload;
        },

        logoutSuccess: (state) => {
            state.login.currentUser = null;
        },

        loadingStart: (state) => {
            state.loading = true;
        },
        loadingSuccess: (state) => {
            state.loading = false;
        },
    },
});

export const { loginSuccess, logoutSuccess, loadingStart, loadingSuccess } = authReducer.actions;

export default authReducer.reducer;
