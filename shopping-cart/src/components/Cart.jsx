import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { emptyCart, incrementCart, decreaseCart, deleteCart, list } = useContext(CartContext);
    function calcular() {
        return list.reduce((total, producto) => total + producto.price * producto.cantidad, 0).toFixed(2);
    }
    return (
        <section>
            <h2>Productos añadidos</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th scope="col">Artículo</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.map((producto, index) => {
                            return (
                                <tr key={producto.id} className="cart">
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>
                                        <span>{producto.title}</span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-outline-primary"
                                            type="button"
                                            onClick={() => decreaseCart(producto.id)}>-</button>
                                        <span className="px-2">{producto.cantidad}</span>
                                        <button
                                            className="btn btn-outline-primary"
                                            type="button"
                                            onClick={() => incrementCart(producto.id)}>+</button>
                                    </td>
                                    <td>{(producto.price * producto.cantidad).toFixed(2)}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => deleteCart(producto.id)}>
                                            <i className="bi bi-trash3-fill"></i>
                                        </button>

                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>Total:</th>
                        <td>{calcular()}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-success mx-auto d-block w-50 p-3 mt-5" disabled={list<=0} onClick={print}>Comprar</button>
            {/* <button type="button" className="btn btn-danger" onClick={() => emptyCart()} >Vaciar carrito</button> */}
        </section>
    );
}