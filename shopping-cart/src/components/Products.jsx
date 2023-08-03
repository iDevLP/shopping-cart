import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/ProductsContext";

export default function Products() {
    const { products } = useContext(ProductsContext);
    return (
        <main className="container">
            <h1>Products</h1>
            <section className="row">
                <div className="col-md-10 mx-auto">
                    <div className="product-container">
                        {products && products.map(response =>
                            <ProductCard
                                producto={response}
                                key={response.id} />)}
                    </div>
                </div>
            </section>
        </main>
    );
}