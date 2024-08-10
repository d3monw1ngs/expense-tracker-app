import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: '',
        email: '',
        token: '',
        avatar: null,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            return { ...state, ...action.payload };
        },
        clearUser() {
            return { token: null, name: null, avatar: null };
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;