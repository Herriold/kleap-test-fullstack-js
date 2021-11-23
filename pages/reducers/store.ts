import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
import { formBuilderReducer } from './form-builder';
import { counterReducer } from './increment';
  
  export const store = configureStore({
    reducer: {
      formBuilder: formBuilderReducer,
      counter: counterReducer
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;