import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataFormBuilder = createAsyncThunk('kanye/kanyeQuote', async () => {
  const response = await axios.get('https://api.kanye.rest/');

  return response.data;
});