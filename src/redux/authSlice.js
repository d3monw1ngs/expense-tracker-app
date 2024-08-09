import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "../redux/operations/operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        token: null, 
        user: null, 
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: state => {
            state.token = null;
            state.user = null;
        },
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCurrentUser.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setToken, clearToken, loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;