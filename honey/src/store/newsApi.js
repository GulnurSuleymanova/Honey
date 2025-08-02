

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = localStorage.getItem('token')

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    tagTypes: ['Category', 'News'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ name, password }) => ({
                method: 'post',
                url: 'auth/login',
                body: { username: name, password: password }
            })
        }),
        addCategory: builder.mutation({
            query: ({ name, slug }) => ({
                method: 'post',
                url: 'category',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                body: { name, slug }
            }),
            invalidatesTags: ['Category']
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                method: 'delete',
                url: `category/${id}`,
                headers: {
                    'authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Category']
        }),
        editCategory: builder.mutation({
            query: ({ params, id }) => ({
                method: 'post',
                url: `category/${id}`,
                headers: {
                    'authorization': `Bearer ${token}`
                },
                body: params
            }),
            invalidatesTags: ['Category']
        }),
        getAllCategories: builder.query({
            query: () => 'category',
            providesTags: ['Category']
        }),
        getNews: builder.query({
            query: () => 'news',
            providesTags: ['News']
        }),
        addNews: builder.mutation({
            query: ({ params }) => ({
                url: 'news',
                method: 'post',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                body: params
            }),
            invalidatesTags: ['News']
        }),
        deleteNews: builder.mutation({
            query: (id) => ({
                method: 'delete',
                url: `news/${id}`,
                headers: {
                    'authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['News']
        }),
        editNews: builder.mutation({
            query: ({ params, id }) => ({
                url: `news/${id}`,
                method: 'post',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                body: params
            }),
            invalidatesTags: ['News']
        }),
        getNewsById: builder.query({
            query: (id) => `news/${id}`
        })
    })
})

export const {
    useLoginMutation,
    useAddCategoryMutation,
    useGetAllCategoriesQuery,
    useDeleteCategoryMutation,
    useEditCategoryMutation,
    useGetNewsQuery,
    useAddNewsMutation,
    useDeleteNewsMutation,
    useEditNewsMutation,
    useGetNewsByIdQuery
} = newsApi