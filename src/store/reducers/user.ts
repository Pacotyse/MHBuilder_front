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
  loginCredentials: {
    email: string;
    password: string;
  };
  registerCredentials: {
    email: string
    password: string
    username: string
  },
}

export const initialState: UserState = {
  username: '',
  token: '',
  isLogged: false,
  isLoading: false,
  errorMessage: '',
  loginCredentials: {
    email: '',
    password: '',
  },
  registerCredentials: {
    email: '',
    password: '',
    username: '',
  },
};

export const changeLoginCredentialsField = createAction<{
  value: string;
  // keyof credentials can be 'email' or 'password
  field: keyof UserState['loginCredentials'];
}>('user/CHANGE_LOGIN_CREDENTIALS_FIELD');

export const changeRegisterCredentialsField = createAction<{
  value: string;
  // keyof registerCredentials can be 'email' or 'password or 'username'
  field: keyof UserState['registerCredentials'];
}>('user/CHANGE_REGISTER_CREDENTIALS_FIELD');

export const login = createAppAsyncThunk(
  'user/LOGIN',
  async (_, thunkAPI) => {
    // get the state here
    const state = thunkAPI.getState();
    // Extract email and password from credentials
    const { email, password } = state.user.loginCredentials;
    // Send data to back
    const { data } = await axiosInstance.post('/users/login', {
      email,
      password,
    });
    return data as UserResponse;
  },
);
export const register = createAppAsyncThunk(
  'user/REGISTER',
  async (_, thunkAPI) => {
    // get the state here
    const state = thunkAPI.getState();
    // Extract email and password and username from registerCredentials
    const { email, password, username } = state.user.registerCredentials;
    // Send data to back
    const { data } = await axiosInstance.post('/users/register', {
      email,
      password,
      username,
    });
    return data as UserResponse;
  },
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLoginCredentialsField, (state, action) => {
      const { field, value } = action.payload;
      state.loginCredentials[field] = value;
    })
    .addCase(changeRegisterCredentialsField, (state, action) => {
      const { field, value } = action.payload;
      state.registerCredentials[field] = value;
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
