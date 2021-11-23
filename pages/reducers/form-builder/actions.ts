import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataFormBuilder = createAsyncThunk('form/formBuilder', async () => {
  const response = await axios.get('https://localhost:4001/');

  return response.data;
});