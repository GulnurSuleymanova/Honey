import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token;
};

console.log(localStorage.getItem("user"));

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Category", "Product", "News"],
  endpoints: (builder) => ({
    // Auth
    login: builder.mutation({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/auth/signin",
        body: { email, password },
      }),
    }),

    // Category
    getCategories: builder.query({
      query: () => "category",
      providesTags: ["Category"],
    }),

    addCategory: builder.mutation({
      query: ({ name, slug, parentId }) => ({
        method: "POST",
        url: "/category",
        body: {
          name,
          slug,
          parentId: parentId || null,
        },
      }),
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    editCategory: builder.mutation({
      query: ({ name, slug, id }) => ({
        method: "POST",
        url: `/category/${id}`,
        body: { name, slug },
      }),
      invalidatesTags: ["Category"],
    }),

    // Product
    addProduct: builder.mutation({
      query: (productData) => ({
        method: "POST",
        url: "/product",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    // Upload
    uploadImages: builder.mutation({
      query: (formData) => ({
        url: "/upload/image",
        method: "POST",
        body: formData,
      }),
    }),

    // News
    addNews: builder.mutation({
      query: (newsData) => ({
        method: "POST",
        url: "/news",
        body: newsData,
      }),
      invalidatesTags: ["News"],
    }),

    editNews: builder.mutation({
      query: ({ id, ...newsData }) => ({
        url: `/news/${id}`,
        method: "PUT",
        body: newsData,
      }),
      invalidatesTags: ["News"],
    }),

    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),

    allNews: builder.query({
      query: () => "/news",
      providesTags: ["News"],
    }),
  }),
});

export const {
  useLoginMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
  useAddProductMutation,
  useUploadImagesMutation,
  useAddNewsMutation,
  useEditNewsMutation,
  useDeleteNewsMutation, // ✅ Buraya əlavə edildi
  useAllNewsQuery,
} = newsApi;
