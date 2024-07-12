import useProduct from "../state/useProduct";

export default function Products() {
    const { products, getProducts } = useProduct();

    return (
        <div>
            <button
                className="rounded-md border border-transparent px-3 py-1 text-base font-medium cursor-pointer mx-auto mb-5 bg-gray-400"
                onClick={() => getProducts()}
            >
                Get Products
            </button>
            {products.map((product) => (
                <h1 key={product.id}>{product.title}</h1>
            ))}
        </div>
    );
}
