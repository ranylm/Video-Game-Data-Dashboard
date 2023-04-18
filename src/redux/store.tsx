import { configureStore } from "@reduxjs/toolkit";
import watchingSlice from "./reducers/watching.slice";
import searchResultsSlice from "./reducers/searchResult.slice";

export const store = configureStore({
  reducer: { watchList: watchingSlice, searchResults: searchResultsSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
