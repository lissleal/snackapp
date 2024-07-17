import { baseUrl } from '../firebase/database'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { objectToArray } from '../utils/array'


export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getProductsByCategory: builder.query({
            query: category => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: response => objectToArray(response),
        }),
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        postOrder: builder.mutation({
            query: order => ({
                url: `orders.json`,
                method: 'POST',
                body: order,
            }),
        }),
        getOrdersByUser: builder.query({
            query: localId => `orders.json?orderBy="userId"&equalTo="${localId}"`,  //revisar url
            transformResponse: response => {
                if (!response) return [];
                return Object.values(response);
            }
        }),
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: { image },
            }),
        }),

    }),
})

export const {
    useGetProductsByCategoryQuery,
    useGetCategoriesQuery,
    useGetOrdersByUserQuery,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = shopApi