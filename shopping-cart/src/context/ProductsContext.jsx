import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState();
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(products)
    
    return (
        <ProductsContext.Provider
        value={{products}} >
            {children}
        </ProductsContext.Provider>
    );
}