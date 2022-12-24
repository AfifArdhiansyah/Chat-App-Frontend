import * as auth from '../services/authService';
import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
    'auth/register', 
    async ({formData, redirect}, {rejectWithValue}) => {
        try {
            const response = await auth.register(formData);
            if (response.data.status == "success") {
                setTimeout(() => {
                  redirect("/");
                }, 3000);
            }
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({formData, redirect}, {rejectWithValue}) => {
        try {
            console.log(formData);
            const response = await auth.login(formData);
            if (response.data.status == "success") {
                localStorage.setItem('user', JSON.stringify({token: response.data.data.token}));
                setTimeout(() => {
                  redirect("/home");
                }, 3000);
            }
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        status: null,
        message: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user');
            state.loading = false;
            state.status = null;
            state.message = null;
            state.error = null;
        },
        clearState: (state, action) => {
            state.loading = false;
            state.status = null;
            state.message = null;
            state.error = null;
        },
    },
    extraReducers: {
        [register.pending]: (state) => {
            state.loading = true;
            state.status = null;
            state.message = null;
            state.error = null;
        },
        [register.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.status = payload.status;
            state.message = payload.message;
            state.error = null;
        },
        [register.rejected]: (state, {payload}) => {
            state.loading = false;
            state.status = payload.status;
            state.message = payload.message;
            state.error = payload.error;
        },
        [login.pending]: (state) => {
            state.loading = true;
            state.status = null;
            state.message = "Proccessing your request...";
            state.error = null;
        },
        [login.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.status = payload.status;
            state.message = payload.message;
            state.error = null;
        },
        [login.rejected]: (state, {payload}) => {
            state.loading = false;
            state.status = payload.status;
            state.message = payload.message;
            state.error = payload.error;
        }
    }
});

export const {logout, clearState} = authSlice.actions;
export default authSlice.reducer;