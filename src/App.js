import React from "react"
import GlobalStyle from './styles/global'
import RoutesApp from './routes'
import { AuthProvider } from './contexts/auth'
import { ProductsProvider } from './contexts/products'

const App = () => {
    return (
       <AuthProvider>
        <ProductsProvider>
        <RoutesApp />
        <GlobalStyle />
        </ProductsProvider>
       </AuthProvider>
    );
};

export default App