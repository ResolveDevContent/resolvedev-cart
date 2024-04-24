import './App.css'
import { CartProvider } from './context/cart';
import { productos } from './mocks/productos.json'

function App() {

  return (
    <CartProvider> 
      <div>
        <ul>
          {productos.map(prod => {
            return (
              <li key={prod.id}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                />
                <div>
                  <strong>{prod.title}</strong> - ${prod.price}
                </div>

                <footer>
                  <small>
                    Qty: {prod.quantity}
                  </small>
                  <button onClick={addToCart}>+</button>
                </footer>
              </li>
            )
          })}
        </ul>
      </div>
    </CartProvider>
  );
}

export default App