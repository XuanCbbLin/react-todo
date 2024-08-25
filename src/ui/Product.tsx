import { useState } from 'react';
import { useGetProductsQuery } from '../features/productSlice';

export default function Products() {
  const [fetchProducts, setFetchProducts] = useState(false);
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery('', {
    skip: !fetchProducts, // 當按鈕未被點擊時，跳過查詢
  });

  const handleFetchProducts = () => {
    setFetchProducts(true); // 點擊按鈕後觸發查詢
  };

  return (
    <div>
      <button
        onClick={handleFetchProducts}
        className="mx-auto mb-5 cursor-pointer rounded-md border border-transparent bg-gray-400 px-3 py-1 text-base font-medium"
      >
        Get Products
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      {products && products.products.map(product => <h1 key={product.id}>{product.title}</h1>)}
    </div>
  );
}
