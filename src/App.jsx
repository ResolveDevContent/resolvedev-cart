import './App.css'
import { Cart } from './components/Cart.jsx';
import { Productos } from './components/Productos.jsx';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
      <header id='header'>
        <nav className='navbar'>
          <h1>Tienda online</h1>
          <Cart />
        </nav>
      </header>
      <Productos />
    </CartProvider>
  );
}

export default App