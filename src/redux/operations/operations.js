import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api';

export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrentUser', 
    async (_, { rejectWithValue }) => {
        try {
            console.log('Fetching current user data...');
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/users/info');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);