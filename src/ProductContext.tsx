import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Product {
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

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// defined state and action type
interface ProductState {
  products: Product[];
}

type ProductAction = { type: 'SET_PRODUCTS'; payload: Product[] } | { type: 'RESET_PRODUCTS' };

// init state
const initialState: ProductState = {
  products: [],
};

// reducer function
const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'RESET_PRODUCTS':
      return { ...state, products: [] };
    default:
      return state;
  }
};

// create Context
const ProductContext = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Provider component
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

// custom Hook
export const useProduct = () => {
  return useContext(ProductContext);
};
