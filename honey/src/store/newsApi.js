import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = JSON.parse(localStorage.getItem("user"))?.token;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
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
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    addCategory: builder.mutation({
      query: ({ name, slug }) => ({
        url: "category",
        method: "POST",
        body: { name, slug },
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
      query: ({ params, id }) => ({
        url: `category/${id}`,
        method: "PUT",
        body: params,
      }),
      invalidatesTags: ["Category"],
    }),

    // Product
    addProduct: builder.mutation({
      query: ({
        name,
        description,
        price,
        stock,
        brandId,
        colors,
        sizes,
        images,
        categoryId,
        slug,
      }) => ({
        method: "POST",
        url: "/product",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {
          name,
          description,
          price,
          stock,
          brandId,
          colors,
          sizes,
          images,
          categoryId,
          slug,
        },
      }),
      invalidatesTags: ["Product"],
    }),

    // Image upload
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
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: newsData,
      }),
      invalidatesTags: ["News"],
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
} = newsApi;
