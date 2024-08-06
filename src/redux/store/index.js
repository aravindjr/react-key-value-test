import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../api/post";
// ...

const store = configureStore({
  reducer: {
    postApi: postApi.reducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
