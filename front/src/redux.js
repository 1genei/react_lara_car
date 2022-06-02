import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    name: "auth",
    initialState: { user: localStorage.getItem('user'), token: localStorage.getItem('token') },
    reducers: {

        login: (state, action) => {

            const { userPayload, tokenPayload } = action.payload;
            state.user = userPayload;
            state.isAuthenticated = true;
            state.token = tokenPayload;


        },

        logout: (state, action) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;

            localStorage.setItem("token", "")
            localStorage.setItem("user", "")
        },



    }

});

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});


export const { login, logout } = authSlice.actions;


export default authSlice.reducer;