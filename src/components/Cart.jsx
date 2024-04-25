import { useId } from "react"
import { useCart } from "../hook/useCart"
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "../icons/Icons.jsx"
import './Cart.css'

export const Cart = () => {
    const { removeFromCart, cart, updateQuantity, clearCart } = useCart()
    const cartCheckboxId = useId()

    return (
        <section>
            <label className='cart-button' htmlFor={cartCheckboxId} data-item={cart.length}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <label htmlFor={cartCheckboxId} className="background"></label>
            <aside className="cart">
                <ul>
                    {cart.map(item => {
                        return (
                            <li key={item.id} className="producto-cart">
                                <header>
                                    <img src={item.thumbnail}
                                        alt={item.title}
                                    />
                                </header>
                                <div>
                                    <div>
                                        <strong>{item.title}</strong>
                                    </div>

                                    <div>
                                        <em>${item.price}</em>
                                    </div>

                                    <footer>
                                        <div className="quantity">
                                            <button onClick={() => updateQuantity(item, 1, true)}>+</button>
                                            <input type="number" 
                                                onChange={e => updateQuantity(item, e.target.value, false)} 
                                                value={item.quantity}/>
                                            <button onClick={() => updateQuantity(item, -1, true)}>-</button>
                                        </div>
                                        <button onClick={() => removeFromCart(item)}>
                                            <RemoveFromCartIcon />
                                        </button>
                                    </footer>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <footer>
                    <button onClick={clearCart}>
                        <ClearCartIcon />
                    </button>
                </footer>
            </aside>
        </section>
    )
}