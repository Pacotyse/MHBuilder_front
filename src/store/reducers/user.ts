import { createAction, createReducer } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';
import { UserResponse } from '../../@types/user';

interface UserState {
  username: string;
  token: string;
  isLogged: boolean;
  isLoading: boolean;
  errorMessage: string;
  credentials: {
    email: string;
    password: string;
  };
}

export const initialState: UserState = {
  username: '',
  token: '',
  isLogged: false,
  isLoading: false,
  errorMessage: '',
  credentials: {
    email: '',
    password: '',
  },
};

export const changeCredentialsField = createAction<{
  value: string;
  // keyof credentials can be 'email' or 'password
  field: keyof UserState['credentials'];
}>('user/CHANGE_CREDENTIALS_FIELD');

export const login = createAppAsyncThunk(
  'user/LOGIN',
  async (_, thunkAPI) => {
    // get the state here
    const state = thunkAPI.getState();
    // Extract email and password from credentials
    const { email, password } = state.user.credentials;
    // Send data to back
    const { data } = await axiosInstance.post('/login', {
      email,
      password,
    });
    return data as UserResponse;
  },
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCredentialsField, (state, action) => {
      const { field, value } = action.payload;
      state.credentials[field] = value;
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    })
    .addCase(login.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLogged = true;
    })
    .addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Login or password is incorrect';
    });
});

export default userReducer;
