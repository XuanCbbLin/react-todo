import { useProduct } from '../ProductContext';

const apiUrl = 'https://dummyjson.com/products/';

export default function Products() {
  const { state, dispatch } = useProduct();

  const getProducts = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      dispatch({ type: 'SET_PRODUCTS', payload: data.products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <button
        className="mx-auto mb-5 cursor-pointer rounded-md border border-transparent bg-gray-400 px-3 py-1 text-base font-medium"
        onClick={getProducts} // 點擊按鈕時觸發 getProducts 函數
      >
        Get Products
      </button>
      {state.products.map(product => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
}
