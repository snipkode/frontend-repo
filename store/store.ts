import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import updateReducer from './updateSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    update: updateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
