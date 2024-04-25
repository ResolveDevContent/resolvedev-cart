import './App.css'
import { Cart } from './components/Cart.jsx';
import { Productos } from './components/Productos.jsx';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
      <h1>Tienda online</h1>
      <Productos />
      <Cart />
    </CartProvider>
  );
}

export default App