import './productos.css'

import { products as productos} from '../mocks/productos.json'
import { useCart } from '../hook/useCart.js'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons/Icons.jsx'

export const Productos = () => {
    const { addToCart, removeFromCart, cart } = useCart()

    return (
        <article>
            <ul>
            {productos.map(prod => {
                const inCart = cart.some(item => prod.id == item.id)

                return (
                <li key={prod.id} className="producto">
                    <header>
                        <img
                            src={prod.thumbnail}
                            alt={prod.title}
                        />
                    </header>
                    <div>
                        <div>
                            <strong>{prod.title}</strong><span>${prod.price}</span>
                        </div>

                        <footer>
                            <button 
                                style={{ backgroundColor: inCart ? 'red' : '#00ac64' }}
                                onClick={() => {
                                    inCart ? removeFromCart(prod)
                                           : addToCart(prod)
                                        }}>
                                    { 
                                        inCart ? <RemoveFromCartIcon />
                                               :  <AddToCartIcon /> 
                                    }
                            </button>
                        </footer>
                    </div>
                </li>
                )
            })}
            </ul>
        </article>
    )
}