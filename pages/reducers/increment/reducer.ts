import { createReducer } from '@reduxjs/toolkit';
import { increment } from './actions';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 3
};

export const counterReducer = createReducer(initialState, builder => {
  builder.addCase(increment, state => {
    state.value++;
  })
});