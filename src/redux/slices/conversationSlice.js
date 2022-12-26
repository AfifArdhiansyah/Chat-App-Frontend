import * as conversationService from '../services/conversationService';
import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit';

export const getConversations = createAsyncThunk(
    'conversations/getConversations',
    async (_,{rejectWithValue}) => {
        try {
            const response = await conversationService.getConversations();
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getConversationById = createAsyncThunk(
    'conversations/getConversationById',
    async ({idConversation}, {rejectWithValue}) => {
        try {
            const response = await conversationService.getConversationById(idConversation);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const updateConversation = createAsyncThunk(
    'conversations/updateConversation',
    async ({formData}, {rejectWithValue}) => {
        try {
            const response = await conversationService.updateConversation(formData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const conversationSlice = createSlice({
    name: 'conversations',
    initialState: {
        loading: false,
        status: null,
        message: null,
        error: null,
        conversations: [],
        conversation: []
    },
    reducers: {
        clearState: (state, action) => {
            state.loading = false;
            state.status = null;
            state.message = null;
            state.error = null;
            state.conversations = [];
            state.conversation = [];
        }
    },
    extraReducers: {
        [getConversations.pending]: (state, action) => {
            state.loading = true;
            state.status = null;
            state.message = null;
            state.error = null;
            state.conversations = [];
        },
        [getConversations.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = null;
            state.conversations = action.payload.data;
        },
        [getConversations.rejected]: (state, action) => {
            state.loading = false;
            state.status = "rejected"
            state.message = action.error.message;
            state.error = true;
            state.conversations = [];
        },
        [getConversationById.pending]: (state, action) => {
            state.loading = true;
            state.status = null;
            state.message = null;
            state.error = null;
            state.conversation = [];
        },
        [getConversationById.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = null;
            state.conversation = action.payload.data;
        },
        [getConversationById.rejected]: (state, action) => {
            state.loading = false;
            state.status = "rejected"
            state.message = action.error.message;
            state.error = true;
            state.conversation = [];
        },
        [updateConversation.pending]: (state, action) => {
            state.loading = true;
            state.status = null;
            state.message = null;
            state.error = null;
            state.conversations = [];
        },
        [updateConversation.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = null;
            state.conversations = action.payload.data;
        },
        [updateConversation.rejected]: (state, action) => {
            state.loading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.conversations = [];
        }
    },
});

export default conversationSlice.reducer;