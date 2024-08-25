import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fetchProductApi } from './features/productSlice';

export const store = configureStore({
  reducer: {
    [fetchProductApi.reducerPath]: fetchProductApi.reducer,
    todo: todoReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fetchProductApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
