import { create } from 'zustand';

interface ProductState {
  products: Product[];
  getProducts: () => void;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

const apiUrl = 'https://dummyjson.com/products/';

const useProduct = create<ProductState>(set => ({
  products: [],
  getProducts: async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    set({ products: data.products });
  },
}));

export default useProduct;
