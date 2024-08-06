import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (userId) => `posts/${userId ? "?userId=" + userId : ""}`,
    }),

    getPostDetails: builder.query({
      query: (id) => `posts/${id}`,
    }),

    getPostComments: builder.query({
      query: (id) => `posts/${id}/comments`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostDetailsQuery,
  useGetPostCommentsQuery,
} = postApi;
