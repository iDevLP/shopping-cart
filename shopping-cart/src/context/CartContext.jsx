import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/CartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [list, dispatch] = useReducer(cartReducer, initialState);
    function addCart(producto) {
        producto.cantidad = 1
        dispatch({
            type: "added",
            producto: producto
        });
    }
    function emptyCart() {
        dispatch({
            type: "emptied"
        });
    }
    function deleteCart(id) {
        dispatch({
            type: "deleted",
            id: id
        });
    }
    function incrementCart(id) {
        dispatch({
            type: "incremented",
            id: id
        });
    }
    function decreaseCart(id) {
        dispatch({
            type: "decreased",
            id: id
        });
    }
    return (
        <CartContext.Provider
            value={{
                list,
                addCart,
                emptyCart,
                deleteCart,
                incrementCart,
                decreaseCart
            }}>
            {children}
        </CartContext.Provider>
    );
}