import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';

interface UserState {
  credentials: {
    email: string;
    password: string;
  };
}

export const initialState: UserState = {
  credentials: {
    email: '',
    password: '',
  },
};

export const changeCredentialsField = createAction<{
  value: string;
  // keyof permet de récupérer les clés d'un objet
  // (les valeurs littérales ici 'email' et 'password')
  field: keyof UserState['credentials'];
}>('user/CHANGE_CREDENTIALS_FIELD');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCredentialsField, (state, action) => {
      const { field, value } = action.payload;
      state.credentials[field] = value;
    });
});

export default userReducer;
