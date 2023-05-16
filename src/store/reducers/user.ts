import { createAction, createReducer } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';
import { UserResponse } from '../../@types/user';
import { getUserDataFromLocalStorage, removeUserDataFromLocalStorage } from '../../utils/user';

interface UserState {
  id: number | null
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

const userData = getUserDataFromLocalStorage();

export const initialState: UserState = {
  id: null,
  username: '',
  token: '',
  // iLogged false by default, but if userdata in localStorage, set to true by default
  isLogged: Boolean(userData),
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
  // If user data in the localStorage already exist, set it in the initial state
  ...userData,
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

    // Transform data into json to save it into localStorage
    localStorage.setItem('user', JSON.stringify(data));

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

export const logout = createAction('user/LOGOUT');

export const deleteUser = createAppAsyncThunk(
  'user/DELETE_USER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { id } = state.user;
    const { data } = await axiosInstance.delete(`/users/${id}`);
    return data;
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
      state.id = action.payload.id;
      state.isLoading = false;
      state.isLogged = true;
    })
    .addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Invalid login or password';
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.id = null;
      state.token = '';
      state.username = '';
      // When disconnected, remove user data from localStorage
      removeUserDataFromLocalStorage();
    })
    .addCase(deleteUser.fulfilled, (state) => {
      state.isLogged = false;
      state.id = null;
      state.token = '';
      state.username = '';
      removeUserDataFromLocalStorage();
    })
    .addCase(deleteUser.rejected, (state) => {
      state.errorMessage = 'Failed to delete user.';
    });
});

export default userReducer;
