import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const shopApi = createApi({
  reducerPath: "shopApi",
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
  tagTypes: ["Category", "Product", "Brand"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/auth/signin",
        body: { email, password },
      }),
    }),

    getCategories: builder.query({
      query: () => "/category",
      providesTags: ["Category"],
    }),

    addCategory: builder.mutation({
      query: ({ name, slug, parentId }) => ({
        method: "POST",
        url: "/category",
        body: { name, slug, parentId: parentId || null },
      }),
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
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

    getBrands: builder.query({
      query: () => "/brand",
      providesTags: ["Brand"],
    }),

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

    uploadImages: builder.mutation({
      query: (formData) => ({
        url: "/upload/image",
        method: "POST",
        body: formData,
      }),
    }),

    getAllProduct: builder.query({
      query: () => "product/all",
      providesTags: ["Product"],
    }),

    // Bu hissə sənə lazım olan tək məhsulu ID ilə almaq üçündür:
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["Product"],
    }),

    getProductsByCategoryId: builder.query({
      query: (categoryId) => `product/category/${categoryId}`,
      providesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetBrandsQuery,
  useAddProductMutation,
  useUploadImagesMutation,
  useGetAllProductQuery,
  useGetProductByIdQuery,   // Burada tək məhsul üçün hook
  useGetProductsByCategoryIdQuery,
  useDeleteProductMutation,
} = shopApi;
