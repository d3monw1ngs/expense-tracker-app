import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "../../api/userApi";

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', 
    async (_, { rejectWithValue }) => {
        try {
            const user = await fetchCurrentUser();
            return user;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });