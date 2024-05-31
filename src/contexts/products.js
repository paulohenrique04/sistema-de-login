import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (nome, preco) => {
        const product = {
            id: Math.floor(Math.random() * 1000),
            nome,
            preco,
        };

        if(!nome | !preco) {
            throw "Não foi possível cadastrar produto";
        }

        setProducts([...products, product]);
    }

    const removeProduct = (id) => {
        const productsFilter = products.filter(product => product.id !== id);

        setProducts(productsFilter);
    }

    return (
        <ProductsContext.Provider
            value={{ products, addProduct, removeProduct }}
        >
            { children }
        </ProductsContext.Provider>
    );
};
