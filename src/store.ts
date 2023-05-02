import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './features/tasks-slice';
import { userReducer } from './features/user-slice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: userReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
