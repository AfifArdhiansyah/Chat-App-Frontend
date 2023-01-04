import * as friendService from '../services/friendService';
import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit';

export const getFriends = createAsyncThunk(
    'friends/getFriends',
    async (_, {rejectWithValue}) => {
        try {
            const response = await friendService.getFriends();
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const friendSlice = createSlice({
    name: 'friends',
    initialState: {
        loading: false,
        status: null,
        message: null,
        error: null,
        friends: []
    },
    reducers: {
        clearState: (state, action) => {
            state.loading = false;
            state.status = null;
            state.message = null;
            state.error = null;
            state.friends = [];
        }
    },
    extraReducers: {
        [getFriends.pending]: (state, action) => {
            state.loading = true;
            state.status = "pending"
            state.message = null;
            state.error = null;
            state.friends = [];
        },
        [getFriends.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.friends = action.payload.data;
        },
        [getFriends.rejected]: (state, action) => {
            state.loading = false;
            state.status = "rejected"
            state.message = action.error.message;
            state.error = true;
            state.friends = [];
        },
    },
})

export default friendSlice.reducer;