import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectForm = (state: RootState) => state.formBuilder

export const kanyeQuoteSelector = createSelector(
  selectForm,
  state => state
)