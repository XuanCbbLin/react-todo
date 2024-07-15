import useProduct from '../state/useProduct';

export default function Products() {
  const { products, getProducts } = useProduct();

  return (
    <div>
      <button
        className="mx-auto mb-5 cursor-pointer rounded-md border border-transparent bg-gray-400 px-3 py-1 text-base font-medium"
        onClick={() => getProducts()}
      >
        Get Products
      </button>
      {products.map(product => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
}
