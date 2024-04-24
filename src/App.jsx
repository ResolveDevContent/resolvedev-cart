import './App.css'
import { Productos } from './components/Productos.jsx';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
      <h1>Tineda2 online</h1>
      <Productos />
    </CartProvider>
  );
}

export default App