import { useCart } from "../hook/useCart"
import { ClearCartIcon } from "../icons/Icons.jsx"

export const Cart = () => {
    const { removeFromCart, cart, updateQuantity, clearCart } = useCart()

    return (
        <aside>
            <ul>
                {cart.map(item => {
                    return (
                        <li key={item.id} className="producto">
                            <img src={item.thumbnail}
                                 alt={item.title}
                                 />
                            <div>
                                <div>
                                    <strong>{item.title}</strong>
                                </div>

                                <div>
                                    <em>${item.price}</em>
                                </div>

                                <footer>
                                    <button onClick={() => removeFromCart(item)}>
                                        {/* <RemoveFromCartIcon /> */ 'hola'}
                                    </button>
                                    <button onClick={() => updateQuantity(item, 1, true)}>+</button>
                                    <input type="number" 
                                        onChange={e => updateQuantity(item, e.target.value, false)} 
                                        value={item.quantity}/>
                                    <button onClick={() => updateQuantity(item, -1, true)}>-</button>
                                </footer>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </div>
        </aside>
    )
}