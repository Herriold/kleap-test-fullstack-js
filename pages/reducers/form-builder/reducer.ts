import { createReducer } from '@reduxjs/toolkit';
import { getDataFormBuilder } from './actions';

export type formBuilderState = {
  data: { quote: string };
  pending: boolean;
  error: boolean;
};

const initialState: formBuilderState = {
  data: { quote: 'click that button' },
  pending: false,
  error: false,
};

export const formBuilderReducer = createReducer(initialState, builder => {
  builder
    .addCase(getDataFormBuilder.pending, state => {
      state.pending = true;
    })
    .addCase(getDataFormBuilder.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getDataFormBuilder.rejected, state => {
      state.pending = false;
      state.error = true;
    });
});

export default formBuilderReducer;