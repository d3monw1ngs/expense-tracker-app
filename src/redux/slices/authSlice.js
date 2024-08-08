import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../redux/operations/operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, user: null, status: 'idle', error: null },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: state => {
            state.token = null;
            state.user = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getCurrentUser.pending, state => {
                state.status = 'loading';
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.status ='succeeded';
                state.user = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;