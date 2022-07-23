import {createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    name: "auth",
    initialState: { user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null, token: localStorage.getItem('token') },
    reducers: {

        login: (state, action) => {

            const { userPayload, tokenPayload } = action.payload;
            state.user = userPayload;
            // state.isAuthenticated = true;
            state.token = tokenPayload;
        },

        logout: (state, action) => {

            localStorage.removeItem("token")
            localStorage.removeItem("user")


            state.user = null;
            state.token = null;

            console.log(state.user);
            // state.isAuthenticated = false;
        },



    }

});

export const { login, logout } = authSlice.actions;


export default authSlice.reducer;