import useProduct from "../state/useProduct";

export default function Products() {
    const { products, getProducts } = useProduct();

    return (
        <div>
            <button onClick={() => getProducts()}>Get Products</button>
            {products.map((product) => (
                <h1 key={product.id}>{product.title}</h1>
            ))}
        </div>
    );
}
