import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    name: "auth",
    initialState: { user: null, token: null },
    reducers: {

        login: (state, action) => {

            const { userPayload, tokenPayload } = action.payload;
            state.user = userPayload;
            state.token = tokenPayload;


        },

        logout: (state, action) => {
            state.user = null;
            state.token = null;
        },



    }

});

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});


export const getToken = (state, action) => {}


export const getUser = (state, action) => {}


export default authSlice;