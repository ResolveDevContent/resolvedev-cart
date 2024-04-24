import { products as productos} from '../mocks/productos.json'
import { useCart } from '../hook/useCart.js'

export const Productos = () => {
    const { addToCart, removeFromCart, cart, updateQuantity, clearCart } = useCart()

    return (
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
                    <button onClick={() => addToCart(prod)}>Agrega</button>
                    <button onClick={() => updateQuantity(prod, 1, true)}>+</button>
                    <button onClick={() => updateQuantity(prod, -1, true)}>-</button>
                    <input type="number" onChange={e => updateQuantity(prod, e.target.value, false)}/>
                    <button onClick={() => removeFromCart(prod)}>eliminar</button>
                    </footer>
                </li>
                )
            })}
            </ul>
            <div>
                {cart.map(item => {
                    return (
                        <div key={item.id}>{item.title} : {item.quantity}</div>
                    )
                })}
            </div>
            <button onClick={clearCart}>Vaciar carrinho</button>
        </div>
    )
}