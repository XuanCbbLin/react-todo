import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 定義 Product 類型
interface Product {
  id: number; // 假設 ID 是數字
  title: string; // 假設每個產品有一個 title
}

// 定義 API 回應的結構
export interface ProductsResponse {
  products: Product[]; // 假設 API 回應是一個包含產品陣列的物件
}

export const fetchProductApi = createApi({
  reducerPath: 'fetchProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, string>({
      query: () => 'products', // 固定為 'products'
    }),
  }),
});

export const { useGetProductsQuery } = fetchProductApi;
