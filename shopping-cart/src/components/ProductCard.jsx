import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ producto, cart }) {
    const [isOnCart, setIsOnCart] = useState(false)
    const { addCart, deleteCart } = useContext(CartContext);
    return (
        <article className="product-card">
            <img src={producto.image} className="product-card-img" alt="..." />
            <div className="product-card-body">
                <h5 className="product-card-title">{producto.title}</h5>
                <p className="product-card-text">{producto.price}</p>
                {isOnCart ?
                    <button type="button" className="btn btn-danger"
                        onClick={() => {
                            deleteCart(producto.id);
                            setIsOnCart(!isOnCart);
                        }} >
                        Quitar del carrito
                        <i class="bi bi-cart-x-fill"></i>
                    </button>
                    :
                    <button type="button" className="btn btn-primary"
                        onClick={() => {
                            addCart(producto);
                            setIsOnCart(!isOnCart);
                        }} >
                        Añadir al carrito
                        <i class="bi bi-cart-plus-fill"></i>
                    </button>
                }

            </div>
        </article>
    );
}