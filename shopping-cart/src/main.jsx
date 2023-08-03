import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/sass/style.css'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </CartProvider>
  </ProductsProvider>
)
